export default function Banner(props: { bannerText: string, bannerDescription: string }) {
  return (
    <div className="w-full h-full self-stretch px-[170px] py-[60px] bg-black/60 justify-center items-center gap-[60px] inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <div className="w-[520px] text-center text-white text-[40px] font-bold leading-[48px]">{props.bannerText}</div>
        <div className="w-[520px] text-center text-white text-base font-normal leading-normal">{props.bannerDescription}</div>
      </div>
    </div>
  );
}