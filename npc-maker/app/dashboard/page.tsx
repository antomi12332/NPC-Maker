'use client'
import Header from "@/app/components/header";
import ProjectCard from "../components/dashboard/projectcard";
import { Input } from "../components/input";
import Banner from "../components/banner";


export default function Dashboard() {
  return (
    <div>
      <Header titleText="Dashboard" />
      <Banner bannerText="Your Game Projects" bannerDescription="Manage and create game projects for NPC dialog generation" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-end inline-flex">

        <div className="self-stretch px-[170px] py-[60px] justify-start items-center gap-[60px] inline-flex">
          <div className="shrink basis-0 flex-col justify-start items-start gap-6 inline-flex pe-96">
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
              <button className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
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
                  <Input type="text" placeholder="Project Name" />
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
                  <Input type="text" placeholder="Project Description" />
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
