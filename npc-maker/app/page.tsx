import Header from "./components/header";


export default function Home() {
  return (
    <div>
      <Header titleText="NPC Maker" />

      <div className="px-[170px] py-[60px] justify-center items-center gap-[60px] flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">Build worlds FASTER</div>
          <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Create engaging stories for your game with YOUR creativity powered by AI</div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="w-60 p-3 rounded-lg border border-black flex-col justify-center items-center inline-flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">Sign Up</div>
            </div>
            <div className="w-60 p-3 bg-black rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-white text-base font-medium font-['Roboto'] leading-normal">Login</div>
            </div>
          </div>
        </div>
        
        <div className="grow shrink basis-0 h-[400px] justify-start items-start flex">
          <div className="h-[400px] relative bg-[#d8d8d8]/50" />
        </div>
      </div>





      <div className="w-screen px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
        <div className="grow shrink basis-0 h-auto py-1 justify-center items-center flex">
          <div className="px-4 pt-[138px] pb-2 bg-[#d8d8d8]/50 rounded-md flex-col justify-end items-center gap-[126px] inline-flex">
            <div className="w-[1068px] h-4 text-center text-black text-xs font-normal font-['Roboto'] leading-none">Start creating immersive dialog for your game characters now!</div>
            <div className="self-stretch justify-center items-center gap-1 inline-flex">
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
