export default function TokenPacks(props: { pack_name: string, price: number, tokenAmount: number }) {
  return (
    <div className="grow shrink basis-0 rounded-md border border-black/10 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[170] justify-start items-start inline-flex">
        <div className="h-[170] px-4 bg-[#d8d8d8]/50 justify-center items-center flex">
          <div className="w-[154] h-4 text-center text-black text-xs font-normal leading-none">{props.tokenAmount} Tokens</div>
        </div>
      </div>
      <div className="self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch text-black text-base font-normal leading-normal">Token Pack ({props.pack_name})</div>
        <div className="self-stretch text-black text-xl font-medium leading-7">${props.price}</div>
      </div>
    </div>
  );
}