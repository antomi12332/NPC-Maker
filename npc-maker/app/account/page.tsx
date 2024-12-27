import Header from "@/app/components/header";


export default function Account() {
  return (
    <div>
      <Header titleText="Account" />

      <div className="w-auto h-full pt-20 bg-white flex-col justify-start items-center inline-flex">

        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-10 inline-flex">
          <div className="w-[100px] h-[100px] relative bg-[#d8d8d8]/50 rounded-[50px]" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
            <div className="self-stretch text-black text-2xl font-bold leading-loose">User&apos;s Name</div>
            <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
              <div className="px-1 py-0.5 bg-[#d8d8d8]/50 rounded-sm border border-black/10 justify-center items-center gap-0.5 flex">
                <div className="text-black text-xs font-normal leading-none">Indie Game Developer</div>
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Manage your account details and token balance here</div>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="h-12 p-3 rounded-lg border border-black flex-col justify-center items-center flex">
              <div className="text-black text-base font-medium leading-normal">View NPC Dialog</div>
            </div>
            <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
              <div className="text-white text-base font-medium leading-normal">Purchase Tokens</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[396px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Token Balance</div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <div className="text-white text-base font-medium leading-normal">Purchase Tokens</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-5 inline-flex">
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">Tokens</div>
                <div className="text-black text-[28px] font-medium leading-9">250</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Purchase Tokens</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Select a token pack to purchase</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[520px] flex-col justify-start items-center gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Select Token Pack</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Token Pack (small) $15</div>
                  </div>
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Token Pack (medium) $30</div>
                  </div>
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Token Pack (large) $60</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Buy Tokens</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Recent Purchases</div>
          </div>
          <div className="grow shrink basis-0 py-5 flex-col justify-center items-center gap-10 inline-flex">
            <div className="self-stretch justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-xl font-medium leading-7">Token Pack (small)</div>
                  <div className="self-stretch text-black text-base font-normal leading-normal">Purchased on 10/10/2021</div>
                  <div className="self-stretch py-1 justify-start items-center gap-1.5 inline-flex">
                    <div className="px-1 py-0.5 bg-[#d8d8d8]/50 rounded-sm border border-black/10 justify-center items-center gap-0.5 flex">
                      <div className="text-black text-xs font-normal leading-none">Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-xl font-medium leading-7">Token Pack (medium)</div>
                  <div className="self-stretch text-black text-base font-normal leading-normal">Purchased on 09/25/2021</div>
                  <div className="self-stretch py-1 justify-start items-center gap-1.5 inline-flex">
                    <div className="px-1 py-0.5 bg-[#d8d8d8]/50 rounded-sm border border-black/10 justify-center items-center gap-0.5 flex">
                      <div className="text-black text-xs font-normal leading-none">Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 h-[300px] py-1 justify-start items-start flex">
            <div className="px-4 pt-[138px] pb-2 bg-[#d8d8d8]/50 rounded-md flex-col justify-end items-center gap-[126px] inline-flex">
              <div className="w-[1068px] h-4 text-center text-black text-xs font-normal leading-none">Manage your token balance effectively for generating NPC dialog easily.</div>
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
