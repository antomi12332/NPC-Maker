export default function HistoryBindCard({ histories }: { histories: { title: string } }) {
  return (
    <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
      <div className="text-black text-sm font-normal leading-tight">{histories.title}</div>
    </div>
  );
}