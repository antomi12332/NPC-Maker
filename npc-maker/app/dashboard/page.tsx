'use client'
import Header from "@/app/components/header";
import Banner from "../components/banner";
import ProjectCard from "../components/dashboard/projectcard";


export default function Dashboard() {
  return (
    <div>
      <Header titleText="Dashboard" />
      <Banner bannerText="Your Game Projects" bannerDescription="Manage and create game projects for NPC dialog generation" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-end inline-flex">
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Your Projects</div>
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-4 justify-start items-start overflow-x-auto">
            <ProjectCard />
          </div>



        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Create New Project</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Start a new project to design your game world</div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Create Project</div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 py-5 flex-col justify-center items-center gap-10 inline-flex">
            <div className="self-stretch justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-xl font-medium leading-7">Project Name</div>
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
                  <div className="self-stretch text-black text-xl font-medium leading-7">Project Description</div>
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
