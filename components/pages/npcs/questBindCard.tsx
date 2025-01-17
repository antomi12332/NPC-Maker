import { Quests } from "@/gql/graphql";

export default function QuestBindCard({ quests }: { quests: Quests }) {
  return (
    <div className="p-2 bg-black/5 rounded-md flex-col justify-center items-center inline-flex">
      <div className="text-black text-sm font-normal leading-tight">{quests.title}</div>
    </div>
  );
}