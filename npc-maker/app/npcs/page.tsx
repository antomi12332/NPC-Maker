import Header from "@/app/components/header";


export default function NpcDialog() {
  return (
    <div>
      <Header titleText="NPC Dialog" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">

        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">NPC Dialog Page</div>
            <div className="self-stretch text-black text-base font-normal leading-normal">Generate NPC dialog using AI</div>
          </div>
          <div className="grow shrink basis-0 h-[400px] justify-start items-start flex">
            <div className="h-[400px] relative bg-[#d8d8d8]/50" />
          </div>
        </div>
        <div className="self-stretch h-[400px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Locations</div>
          </div>
          <div className="self-stretch h-[172px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🌎</div>
                </div>
                <div className="self-stretch h-7 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">City 1</div>
                </div>
              </div>
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🏰</div>
                </div>
                <div className="self-stretch h-7 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">Castle of Mystics</div>
                </div>
              </div>
              <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
                <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
                  <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🌳</div>
                </div>
                <div className="self-stretch h-7 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-black text-xl font-normal leading-7">Enchanted Forest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[524px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-24 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Generate NPC Dialog</div>
            <div className="w-[520px] text-center text-black text-base font-normal leading-normal">Specify NPCs and dialog</div>
          </div>
          <div className="self-stretch h-[248px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[510px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">NPC Name</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter name</div>
                </div>
              </div>
              <div className="w-[510px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">NPC Dialog</div>
                <div className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal leading-tight">Enter dialog</div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[510px] flex-col justify-start items-center gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Link to Quest</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Quest 1</div>
                  </div>
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Quest 2</div>
                  </div>
                  <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
                    <div className="text-black text-sm font-normal leading-tight">Quest 3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <div className="text-white text-base font-medium leading-normal">Generate Dialog</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[396px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Token Balance</div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <div className="text-white text-base font-medium leading-normal">Purchase More Tokens</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-5 inline-flex">
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">Tokens</div>
                <div className="text-black text-[28px] font-medium leading-9">325</div>
              </div>
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">Available NPCs</div>
                <div className="text-black text-[28px] font-medium leading-9">150</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[780px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
            <div className="w-[180px] h-[180px] justify-start items-start flex">
              <div className="h-[180px] relative bg-[#d8d8d8]/50" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Token Packs</div>
              <div className="self-stretch text-black text-base font-normal leading-normal">Purchase tokens to generate dialog</div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                  <div className="text-white text-base font-medium leading-normal">Buy Tokens</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[420px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 rounded-md border border-black/10 flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[340px] justify-start items-start inline-flex">
                  <div className="h-[340px] px-4 bg-[#d8d8d8]/50 justify-center items-center flex">
                    <div className="w-[308px] h-4 text-center text-black text-xs font-normal leading-none">150 Tokens</div>
                  </div>
                </div>
                <div className="self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-black text-base font-normal leading-normal">Token Pack (small)</div>
                  <div className="self-stretch text-black text-xl font-medium leading-7">$15</div>
                </div>
              </div>
              <div className="grow shrink basis-0 rounded-md border border-black/10 flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[340px] justify-start items-start inline-flex">
                  <div className="h-[340px] px-4 bg-[#d8d8d8]/50 justify-center items-center flex">
                    <div className="w-[308px] h-4 text-center text-black text-xs font-normal leading-none">350 Tokens</div>
                  </div>
                </div>
                <div className="self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-black text-base font-normal leading-normal">Token Pack (medium)</div>
                  <div className="self-stretch text-black text-xl font-medium leading-7">$30</div>
                </div>
              </div>
              <div className="grow shrink basis-0 rounded-md border border-black/10 flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[340px] justify-start items-start inline-flex">
                  <div className="h-[340px] px-4 bg-[#d8d8d8]/50 justify-center items-center flex">
                    <div className="w-[308px] h-4 text-center text-black text-xs font-normal leading-none">800 Tokens</div>
                  </div>
                </div>
                <div className="self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-black text-base font-normal leading-normal">Token Pack (large)</div>
                  <div className="self-stretch text-black text-xl font-medium leading-7">$60</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
