'use client';
import { GET_QUESTS } from "@/app/_apollo/gql/questsgql";
import { GET_TOKEN_PACKS } from "@/app/_apollo/gql/tokenpackgql";
import Banner from "@/components/banner";
import Header from "@/components/header";
import CultureBindCard from "@/components/pages/npcs/cultureBindCard";
import HistoryBindCard from "@/components/pages/npcs/historyBindCard";
import QuestBindCard from "@/components/pages/npcs/questBindCard";
import TokenPacks from "@/components/pages/npcs/tokenPacks";
import { Button } from "@/components/ui/button";
import { Culture, Quests, Token_Packs } from "@/gql/graphql";
import { useProjectData } from "@/hooks/useProject";
import { getLocalStorageItem } from "@/utils/cache";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";



export default function NpcDialog() {
  const projectUUID = JSON.parse(getLocalStorageItem('projectData') || '{}').id || null;
  const { projectData, cultureData, historyData } = useProjectData(projectUUID);
  const { data: questGQL, loading: questLoading, error: questError } = useQuery(GET_QUESTS, { variables: { id: projectUUID } });
  const { data: tokenPacks } = useQuery(GET_TOKEN_PACKS);
  const [cultures, setCultures] = useState<{ node: Culture }[]>([]);
  const [histories, setHistories] = useState<{ node: History }[]>([]);
  const [questData, setquestData] = useState<{ node: Quests }[]>([]);
  const [tokenData, setTokenData] = useState<{ node: Token_Packs }[]>([]);



  useEffect(() => {
    if (cultureData && cultureData.projectsCollection.edges.length > 0) {
      setCultures(cultureData.projectsCollection.edges[0].node.cultureCollection.edges);
    }
  }, [cultureData]);
  useEffect(() => {
    if (historyData && historyData.projectsCollection.edges.length > 0) {
      setHistories(historyData.projectsCollection.edges[0].node.historyCollection.edges);
    }
  }, [historyData]);
  useEffect(() => {
    if (questGQL && questGQL.projectsCollection.edges.length > 0) {
      setquestData(questGQL.projectsCollection.edges[0].node.questsCollection.edges);
    }
  }, [questGQL]);
  useEffect(() => {
    if (tokenPacks && tokenPacks.token_packsCollection.edges.length > 0) {
      setTokenData(tokenPacks.token_packsCollection.edges);
    }
  }, [tokenPacks]);



  return (
    <div>
      <Header titleText="NPC Dialog" />
      <Banner bannerText="NPC Dialog" bannerDescription="Generate dialog for NPCs in your game" />

      <div className="w-full h-full pt-20 bg-white flex-col justify-start items-center inline-flex">

        <div className="self-stretch h-[400px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Select Location</div>
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
        <div className="self-stretch h-24 flex-col justify-start items-center gap-6 flex">
          <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Generate NPC Dialog</div>
          <div className="w-[520px] text-center text-black text-base font-normal leading-normal">Specify NPCs and dialog</div>
        </div>
        <div className="self-stretch h-[524px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">

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
                  {questData.map(({ node }) => (
                    <QuestBindCard key={node.id} quests={node} />
                  ))}
                </div>
              </div>
            </div>

            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[510px] flex-col justify-start items-center gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Link to Culture</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  {cultures.map(({ node }) => (
                    <CultureBindCard key={node.id} cultures={node} />
                  ))}
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[510px] flex-col justify-start items-center gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Link to History</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  {histories.map(({ node }) => (
                    <HistoryBindCard key={node.id} histories={node} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="self-stretch h-[396px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Token Balance</div>
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-5 inline-flex">
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">Tokens</div>
                <div className="text-black text-[28px] font-medium leading-9">325</div>
              </div>
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">NPCs to Generate</div>
                <div className="text-black text-[28px] font-medium leading-9">150</div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <Button className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
              <div className="text-white text-base font-medium leading-normal">Generate Dialog</div>
            </Button>
          </div>
        </div>
        <div className="self-stretch h-[780px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">Token Packs</div>
              <div className="self-stretch text-black text-base font-normal leading-normal">Purchase tokens to generate dialog</div>
            </div>
          </div>

          <div className="w-fit h-[420px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10 inline-flex">

              {tokenData.map(({ node }) => (
                <TokenPacks key={node.id} pack_name={node.pack_name} price={node.price} tokenAmount={node.token_amount} />
              ))}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
