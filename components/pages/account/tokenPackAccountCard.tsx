export default function TokenPackAccountCard(props: { pack_name: string, price: number }) {
  return (
    <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
      <div className="text-black text-sm font-normal leading-tight">{props.pack_name} ${props.price}</div>
    </div>
  );
}