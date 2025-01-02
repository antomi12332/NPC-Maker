'use client'
import { CURRENT_PROJECT, SAVE_BACKGROUND_MUTATION } from "@/app/_apollo/gql/projectsgql";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Banner from "@/components/banner";
import Header from "@/components/header";
import { Input } from "@/components/input";



export default function Projects() {
  const [projectBackground, setProjectBackground] = useState('');
  const [saveBackground] = useMutation(SAVE_BACKGROUND_MUTATION);
  const { toast } = useToast()
  const path = usePathname()
  const projectUUID = path.split('/').pop();
  const currentProject = useQuery(CURRENT_PROJECT, { variables: { id: projectUUID } });

  // ensures background is loaded before rendering Textarea
  useEffect(() => {
    if (currentProject.data && currentProject.data.projectsCollection.edges.length > 0) {
      setProjectBackground(currentProject.data.projectsCollection.edges[0].node.background);
    }
  }, [currentProject.data]);

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

  return (
    <div>
      <Header titleText="Projects" />
      <Banner bannerText="Project Details" bannerDescription="Add project details including backgrounds, cultures, and histories" />



      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Game World Background</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Add description of your game world</div>
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
                  <div className="text-white text-base font-medium leading-normal"
                    onClick={handleSaveBackground}>
                    Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Cultures</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe a culture to add to your game world</div>
          </div>
          <div className="flex flex-col">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">Culture Title</div>
                  <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter culture title"
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
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <div className="text-white text-base font-medium leading-normal">Add</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">History</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe history to add to your game world</div>
          </div>
          <div className="flex flex-col">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-sm font-medium leading-tight">History Title</div>
                  <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                    placeholder="Enter history title"
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
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <div className="text-white text-base font-medium leading-normal">Add</div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
