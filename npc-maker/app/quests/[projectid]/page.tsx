'use client';
import { Button } from "@/components/ui/button";
import { CREATE_QUESTS_MUTATION, GET_QUESTS } from "@/app/_apollo/gql/questsgql";
import { getLocalStorageItem } from "@/utils/cache";
import { Input } from "@/components/ui/input";
import { Mutation, Query, Quests } from "@/gql/graphql";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Banner from "@/components/banner";
import Header from "@/components/header";
import QuestCard from "@/components/pages/quests/questsCard";



export default function QuestsPage() {
  const projectUUID = JSON.parse(getLocalStorageItem('projectData') || '{}').id || null;
  const { data, loading, error } = useQuery<Query>(GET_QUESTS, { variables: { id: projectUUID } });
  const [createQuest] = useMutation<Mutation>(CREATE_QUESTS_MUTATION);
  const [questName, setQuestName] = useState<string>('');
  const [questObjective, setQuestObjective] = useState<string>('');
  const [questReward, setQuestReward] = useState<string>('');
  const [questData, setquestData] = useState<{ node: Quests }[]>([]);

  useEffect(() => {
    if (data && data.projectsCollection.edges.length > 0) {
      setquestData(data.projectsCollection.edges[0].node.questsCollection.edges);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateQuest = async () => {
    if (!questName.trim() || !questObjective.trim() || !questReward.trim()) {
      toast({
        variant: "destructive",
        title: "Enter quest details",
        duration: 2000,
      });
      return;
    }
    try {
      const { data } = await createQuest({
        variables: {
          project_id: projectUUID,
          title: questName,
          objective: questObjective,
          reward: questReward,
        },
      });
      toast({
        title: "Quest Created",
        description: questName,
        duration: 2000,
      });
      setquestData([...questData, { node: data.insertIntoquestsCollection.records[0] }]);
      setQuestName('');
      setQuestObjective('');
      setQuestReward('');
    }
    catch (error) {
      console.error('Error creating quest:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };



  return (
    <div>
      <Header titleText="Quests" />
      <Banner bannerText="Create and Manage Quests" bannerDescription="Create quests tied to specific projects/locations and link NPCs for quest-related dialog" />

      <div className={"bodyFitment"}>

        <div className="grid grid-flow-col grid-rows-1 self-stretch py-[60px] justify-start items-center gap-10 overflow-auto">

          {questData.map(({ node }) => (
            <QuestCard key={node.id} questData={node} setquestData={setquestData} />
          ))}

        </div>
        <div className="self-stretch h-[376px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Create New Quest</div>
          </div>
          <div className="self-stretch h-[148px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Quest Name</div>

                <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  placeholder="Enter quest name"
                  value={questName}
                  onChange={(e) => setQuestName(e.target.value)}
                  maxLength={50}
                />

              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Objective</div>

                <Input
                  className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  placeholder="Describe the objective of the quest"
                  value={questObjective}
                  onChange={(e) => setQuestObjective(e.target.value)}
                  maxLength={100}
                />


              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Reward</div>

                <Input
                  className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  placeholder="List the rewards for completing the quest"
                  value={questReward}
                  onChange={(e) => setQuestReward(e.target.value)}
                  maxLength={100}
                />

              </div>
            </div>
            <div className="justify-start items-start gap-3 inline-flex">
              <Button className="w-60 p-6 bg-black rounded-lg text-lg flex-col justify-center items-center inline-flex" onClick={handleCreateQuest}>Add Quest</Button>
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
