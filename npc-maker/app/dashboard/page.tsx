'use client';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Banner from "../../components/banner";
import Header from "@/components/header";
import { ALL_PROJECTS_QUERY, CREATE_PROJECT_MUTATION } from "../_apollo/gql/projectsgql";
import ProjectCard from "@/components/pages/dashboard/projectcard";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";





export default function Dashboard() {
  const { toast } = useToast();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [createProject] = useMutation(CREATE_PROJECT_MUTATION);
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);
  const [projects, setProjects] = useState<{ node: { id: string; name: string; description: string } }[]>([]);

  useEffect(() => {
    if (data) {
      setProjects(data.projectsCollection.edges);
    }
  }, [data]);

  const handleCreateProject = async () => {
    if (!projectName.trim() || !projectDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Enter a name and description to your project.",
        duration: 3000,
      });
      return;
    }
    try {
      const { data } = await createProject({
        variables: {
          name: projectName,
          description: projectDescription,
        },
      });
      const newProject = data.insertIntoprojectsCollection.records[0];
      toast({
        title: "Project Created",
        description: projectName,
        duration: 2000,
      });
      setProjects([...projects, { node: newProject }]);
      setProjectName('');
      setProjectDescription('');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header titleText="Dashboard" />
      <Banner bannerText="Your Game Projects" bannerDescription="Manage and create game projects for NPC dialog generation" />

      <div className={"bodyFitment"}>

        <div className="self-stretch px-[170px] py-[60px] justify-start items-center gap-[60px] inline-flex">
          <div className="shrink basis-0 flex-col justify-start items-start gap-6 inline-flex pe-96">
            <div className="shrink w-1 text-black text-[40px] font-bold leading-[48px]">Your Projects</div>
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-4 justify-start items-start overflow-x-auto">
            {projects.map(({ node }) => (
              <ProjectCard key={node.id} project={node} setProjects={setProjects} />
            ))}
          </div>
        </div>

        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Create New Project</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Start a new project to design your game world</div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <button className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex" onClick={handleCreateProject}>
                <div className="text-white text-base font-medium leading-normal">Create Project</div>
              </button>
            </div>
          </div>
          <div className="grow shrink basis-0 py-5 flex-col justify-center items-center gap-10 inline-flex">
            <div className="self-stretch justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <Input
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    maxLength={40}
                  />
                  <div className="self-stretch text-black text-base font-normal leading-normal">Enter the name of your new project</div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <Input
                    type="text"
                    placeholder="Project Description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    maxLength={40}
                  />
                  <div className="self-stretch text-black text-base font-normal leading-normal">Briefly describe your new project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
