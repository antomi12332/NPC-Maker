import Header from "@/app/components/header";


export default function Quests() {
  return (
    <div>
      <Header titleText="Quests" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">

        <div className="self-stretch px-[170px] py-[60px] bg-black/60 justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[520px] text-center text-white text-[40px] font-bold leading-[48px]">Create and Manage Quests</div>
            <div className="w-[520px] text-center text-white text-base font-normal leading-normal">Create quests tied to specific projects/locations and link NPCs for quest-related dialog</div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-10 inline-flex">
          <div className="w-[100px] h-[100px] relative bg-[#d8d8d8]/50 rounded-[50px]" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="self-stretch text-black text-2xl font-bold leading-loose">Quest Details</div>
            <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
              <div className="px-1 py-0.5 bg-[#d8d8d8]/50 rounded-sm border border-black/10 justify-center items-center gap-0.5 flex">
                <div className="text-black text-xs font-normal leading-none">Project: Project Name</div>
              </div>
              <div className="px-1 py-0.5 bg-[#d8d8d8]/50 rounded-sm border border-black/10 justify-center items-center gap-0.5 flex">
                <div className="text-black text-xs font-normal leading-none">Location: Location Name</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[376px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Create New Quest</div>
          </div>
          <div className="self-stretch h-[148px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Quest Name</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter quest name</div>
                </div>
              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Objective</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Describe the objective of the quest</div>
                </div>
              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Reward</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">List the rewards for completing the quest</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="w-60 p-3 rounded-lg border border-black flex-col justify-center items-center inline-flex">
                <div className="text-black text-base font-medium leading-normal">Cancel</div>
              </div>
              <div className="w-60 p-3 bg-black rounded-lg flex-col justify-center items-center inline-flex">
                <div className="text-white text-base font-medium leading-normal">Save Quest</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 h-[300px] py-1 justify-start items-start flex">
            <div className="px-4 pt-[138px] pb-2 bg-[#d8d8d8]/50 rounded-md flex-col justify-end items-center gap-[126px] inline-flex">
              <div className="w-[1068px] h-4 text-center text-black text-xs font-normal leading-none">Manage quests effectively to enhance NPC dialog generation in your game</div>
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
