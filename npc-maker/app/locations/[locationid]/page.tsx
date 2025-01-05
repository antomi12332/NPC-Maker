'use client'
import Banner from "@/components/banner";
import Header from "@/components/header";



export default function Locations() {
  return (
    <div>
      <Header titleText="Locations" />
      <Banner bannerText="Manage Locations" bannerDescription="Create and edit locations to place your NPCs" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">

        <div className="self-stretch h-[488px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Locations</div>
          </div>
          <div className="self-stretch h-[260px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🏰</div>
                </div>
                <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">Castle</div>
                  <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">Medieval setting</div>
                </div>
                <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">20 NPCs</div>
              </div>
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🌆</div>
                </div>
                <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">City Square</div>
                  <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">Modern urban environment</div>
                </div>
                <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">15 NPCs</div>
              </div>
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🏞️</div>
                </div>
                <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">Forest Clearing</div>
                  <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">Magical realm</div>
                </div>
                <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">10 NPCs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[396px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Add Location</div>
          </div>
          <div className="self-stretch h-[168px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Location Name</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter location name</div>
                </div>
              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Description</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Describe the location</div>
                </div>
              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Number of NPCs</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">0</div>
                </div>
                <div className="self-stretch text-black/50 text-xs font-normal leading-none">Specify the number of NPCs</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Add Location</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 h-[300px] py-1 justify-start items-start flex">
            <div className="px-4 pt-[138px] pb-2 bg-[#d8d8d8]/50 rounded-md flex-col justify-end items-center gap-[126px] inline-flex">
              <div className="w-[1068px] h-4 text-center text-black text-xs font-normal leading-none">Explore the different locations in your game world and bring your NPCs to life!</div>
              <div className="self-stretch justify-center items-center gap-1 inline-flex">
                <div className="w-5 h-1 bg-white rounded-[100px]" />
                <div className="w-1 h-1 bg-black/30 rounded-[100px]" />
                <div className="w-1 h-1 bg-black/30 rounded-[100px]" />
                <div className="w-1 h-1 bg-black/30 rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
