'use client'
import { Button } from "@/components/ui/button";
import { CREATE_CULTURE_MUTATION, GET_CULTURES } from "@/app/_apollo/gql/culturegql";
import { CREATE_HISTORY_MUTATION, GET_HISTORIES } from "@/app/_apollo/gql/historygql";
import { Culture } from "@/gql/graphql";
import { CURRENT_PROJECT, SAVE_BACKGROUND_MUTATION, SAVE_NAME_MUTATION } from "@/app/_apollo/gql/projectsgql";
import { getLocalStorageItem } from "@/utils/cache";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SetStateAction, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@/hooks/use-toast";
import Banner from "@/components/banner";
import CultureCard from "@/components/pages/projectdetail/culturecard";
import Header from "@/components/header";
import HistoryCard from "@/components/pages/projectdetail/historycard";
import { MdEdit } from "react-icons/md";



export default function Projects() {
  const { toast } = useToast()
  const projectUUID = JSON.parse(getLocalStorageItem('projectData') || '{}').id || null;
  const { data: projectData, loading: projectLoading, error: projectError } = useQuery(CURRENT_PROJECT, { variables: { id: projectUUID } });
  const { data: cultureData, loading: cultureLoading, error: cultureError } = useQuery(GET_CULTURES, { variables: { id: projectUUID } });
  const { data: historyData, loading: historyLoading, error: historyError } = useQuery(GET_HISTORIES, { variables: { id: projectUUID } });
  const [saveProjectName] = useMutation(SAVE_NAME_MUTATION);
  const [saveBackground] = useMutation(SAVE_BACKGROUND_MUTATION);
  const [createCulture] = useMutation(CREATE_CULTURE_MUTATION);
  const [createHistory] = useMutation(CREATE_HISTORY_MUTATION);
  const [cultureName, setCultureName] = useState('');
  const [cultureDescription, setCultureDescription] = useState('');
  const [historyName, setHistoryName] = useState('');
  const [historyDescription, setHistoryDescription] = useState('');
  const [projectBackground, setProjectBackground] = useState('');
  const [cultures, setCultures] = useState<{ node: Culture }[]>([]);
  const [histories, setHistories] = useState<{ node: History }[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');

  // preload project data
  useEffect(() => {
    if (projectData && projectData.projectsCollection.edges.length > 0) {
      setProjectBackground(projectData.projectsCollection.edges[0].node.background);
      setProjectTitle(projectData.projectsCollection.edges[0].node.project_name);
    }
  }, [projectData]);
  useEffect(() => {
    if (cultureData && cultureData.projectsCollection.edges.length > 0) {
      setCultures(cultureData.projectsCollection.edges[0].node.cultureCollection.edges);
    }
  }, [cultureData]);
  useEffect(() => {
    if (historyData && historyData.projectsCollection.edges.length > 0) {
      setHistories(historyData.projectsCollection.edges[0].node.historyCollection.edges);
    }
  }, [historyData]);

  if (projectLoading || cultureLoading || historyLoading) return <p>Loading...</p>;
  if (projectError || cultureError || historyError) return <p>Error loading project details</p>;

  const handleEditProjectName = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setProjectTitle(e.target.value);
  };

  const handleTitleSave = () => {
    // Add logic to save the new title
    saveProjectName({
      variables: {
        id: projectUUID,
        project_name: projectTitle,
      },
    });
    setIsEditing(false);
    toast({
      title: "Project Name Updated",
      description: projectTitle,
      duration: 2000,
    });
  };

  const handleSaveBackground = async () => {
    try {
      await saveBackground({
        variables: {
          id: projectUUID,
          background: projectBackground,
        },
      });
      toast({
        title: "Background Saved",
        duration: 2000,
      });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };


  const handleCreateCulture = async () => {
    if (!cultureName.trim() || !cultureDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Enter a name and description to your culture.",
        duration: 2000,
      });
      return;
    }
    try {
      const { data } = await createCulture({
        variables: {
          project_id: projectUUID,
          title: cultureName,
          description: cultureDescription,
        },
      });
      const newCulture = data.insertIntocultureCollection.records[0];
      toast({
        title: "Culture Created",
        description: cultureName,
        duration: 2000,
      });
      setCultures([...cultures, { node: newCulture }]);
      setCultureName('');
      setCultureDescription('');
    } catch (error) {
      console.error('Error creating culture:', error);
    }
  };

  const handleCreateHistory = async () => {
    if (!historyName.trim() || !historyDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Enter a name and description to your history.",
        duration: 2000,
      });
      return;
    }
    try {
      const { data } = await createHistory({
        variables: {
          project_id: projectUUID,
          title: historyName,
          description: historyDescription,
        },
      });
      const newHistory = data.insertIntohistoryCollection.records[0];
      toast({
        title: "History Created",
        description: historyName,
        duration: 2000,
      });
      setHistories([...histories, { node: newHistory }]);
      setHistoryName('');
      setHistoryDescription('');
    } catch (error) {
      console.error('Error creating history:', error);
    }
  }

  return (
    <div>
      <Header titleText="Projects" />
      <Banner bannerText="Project Details" bannerDescription="Add project details including backgrounds, cultures, and histories" />

      <div className="w-full h-full pt-20 bg-white flex-row justify-center items-center place-items-center inline-flex">
        <div className="self-stretch text-black text-[40px] font-bold leading-[48px] px-2">
          {/* project title */}
          {isEditing ? (
            <input
              type="text"
              value={projectTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleSave}
              className="text-[40px] font-bold leading-[48px] px-2"
            />
          ) : (
            projectTitle
          )}
        </div>
        <MdEdit className="w-auto h-auto text-2xl" onClick={handleEditProjectName} />
      </div>




      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Game World Background</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Add description of your game world</div>
            <div className="grid grid-flow-col w-96 grid-rows-3 gap-4 justify-start items-start overflow-x-auto">
            </div>
          </div>
          <div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">Background Description</div>
                  <Textarea className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    defaultValue={projectBackground}
                    placeholder="Enter game world background"
                    onChange={(e) => setProjectBackground(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <Button className="text-white text-base font-medium leading-normal"
                    onClick={handleSaveBackground}>
                    Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Cultures</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe a culture to add to your game world</div>
            <div className="grid grid-flow-col w-96 grid-rows-3 gap-4 justify-start items-start overflow-x-auto">
              {cultures.map(({ node }) => (
                <CultureCard key={node.id} cultures={node} setCultures={setCultures} />
              ))}
            </div>

          </div>
          <div className="flex flex-col">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">Culture Title</div>
                  <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter culture title"
                    value={cultureName}
                    onChange={(e) => setCultureName(e.target.value)}
                    maxLength={40}
                  />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
              </div>
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">Culture Description</div>
                  <Textarea className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter culture description"
                    value={cultureDescription}
                    onChange={(e) => setCultureDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <Button className="text-white text-base font-medium leading-normal" onClick={handleCreateCulture}>Add</Button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">History</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe history to add to your game world</div>
            <div className="grid grid-flow-col w-96 grid-rows-3 gap-4 justify-start items-start overflow-x-auto">
              {histories.map(({ node }) => (
                <HistoryCard key={node.id} histories={node} setHistories={setHistories} />
              ))}
            </div>

          </div>
          <div className="flex flex-col">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">History Title</div>
                  <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter history title"
                    value={historyName}
                    onChange={(e) => setHistoryName(e.target.value)}
                    maxLength={40}
                  />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
              </div>
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">History Description</div>
                  <Textarea className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter history description"
                    value={historyDescription}
                    onChange={(e) => setHistoryDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <Button className="text-white text-base font-medium leading-normal" onClick={handleCreateHistory}>Add</Button>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
