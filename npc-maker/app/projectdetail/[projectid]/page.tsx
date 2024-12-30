import Banner from "@/app/components/banner";
import Header from "@/app/components/header";



export default function Projects() {
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
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Background Description</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter game world background here</div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Save</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Cultures</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe a culture to add to your game world</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Cultures Description</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter cultures description here</div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Save</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">History</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Describe history to add to your game world</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
            </div>
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[520px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">History Description</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter history description here</div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Save</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
