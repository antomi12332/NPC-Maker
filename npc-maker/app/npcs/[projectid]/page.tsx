'use client';
import { Culture, History, Quests, Location, Token_Packs, User_Account } from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { GET_ACCOUNT } from "@/app/_apollo/gql/account";
import { GET_ALL } from "@/app/_apollo/gql/npcgql";
import { GET_TOKEN_PACKS } from "@/app/_apollo/gql/tokenpackgql";
import { getLocalStorageItem } from "@/utils/cache";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Banner from "@/components/banner";
import Header from "@/components/header";
import LocationSelector from "@/components/pages/npcs/locationSelector";
import NpcDialogTable from "@/components/pages/npcs/npcDialogTable";
import TokenPacks from "@/components/pages/npcs/tokenPacks";
import { ToggleGroup } from "@/components/ui/toggle-group";



export default function NpcDialog() {
  const projectUUID = JSON.parse(getLocalStorageItem('projectData') || '{}').id || null;
  const { data: allData } = useQuery(GET_ALL, { variables: { id: projectUUID } });
  const { data: account } = useQuery(GET_ACCOUNT);
  const { data: tokenPacks } = useQuery(GET_TOKEN_PACKS);
  const [locationAndNPCs, setLocationAndNPCs] = useState<{ node: Location }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{ node: Location }[]>([]);
  const [accountData, setAccountData] = useState<{ node: User_Account }[]>([]);
  const [tokenData, setTokenData] = useState<{ node: Token_Packs }[]>([]);
  const [questData, setquestData] = useState<{ node: Quests }[]>([]);
  const [cultures, setCultures] = useState<{ node: Culture }[]>([]);
  const [histories, setHistories] = useState<{ node: History }[]>([]);



  useEffect(() => {
    if (allData && allData.projectsCollection.edges.length > 0) {
      setquestData(allData.projectsCollection.edges[0].node.questsCollection.edges);
      setCultures(allData.projectsCollection.edges[0].node.cultureCollection.edges);
      setHistories(allData.projectsCollection.edges[0].node.historyCollection.edges);
      setLocationAndNPCs(allData.projectsCollection.edges[0].node.locationCollection.edges);
    }
  }, [allData]);
  useEffect(() => {
    if (tokenPacks && tokenPacks.token_packsCollection.edges.length > 0) {
      setTokenData(tokenPacks.token_packsCollection.edges);
    }
  }, [tokenPacks]);
  useEffect(() => {
    if (account && account.user_accountCollection.edges.length > 0) {
      setAccountData(account.user_accountCollection.edges[0].node);
    }
  }, [account]);






  return (
    <div>
      <Header titleText="NPC Dialog" />
      <Banner bannerText="NPC Dialog" bannerDescription="Generate dialog for NPCs in your game" />

      <div className={"bodyFitment"}>

        <div className="self-stretch h-[400px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Select Location</div>
          </div>
          <div className="self-stretch h-[172px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10">

              <ToggleGroup className="w-auto" type="single">
                {locationAndNPCs.map(({ node }) => (
                  // <ToggleGroupItem key={node.id} value={node.id}>
                  <LocationSelector key={node.id} locationNode={node} setSelectedLocation={setSelectedLocation} />
                  // </ToggleGroupItem>
                ))}
              </ToggleGroup>

            </div>
          </div>
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-center gap-6 flex">
          <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Generate NPC Dialog</div>
          <div className="w-[520px] text-center text-black text-base font-normal leading-normal">Specify NPCs and dialog</div>
        </div>
        <div className="self-stretch h-auto px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">



          <NpcDialogTable
            locationNode={selectedLocation}
            questData={questData}
            cultures={cultures}
            histories={histories}
          />
          <div className="self-stretch flex-row justify-between items-center p-4 flex">
            <div>{selectedLocation.npcsCollection?.edges.length === undefined ? 0
              : selectedLocation.npcsCollection?.edges.length} NPCs
            </div>
            <Button>Delete</Button>
          </div>


          {/* <div className="self-stretch h-[248px] flex-col justify-center items-center gap-10 flex">
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
                    <HistoryBindCard key={node.id} histories={{ title: node.title! }} />
                  ))}
                </div>
              </div>
            </div>
          </div> */}



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
                <div className="text-black text-[28px] font-medium leading-9">{accountData.tokens}</div>
              </div>
              <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch text-black/50 text-base font-normal leading-normal">NPCs to Generate</div>
                <div className="text-black text-[28px] font-medium leading-9">placeholder</div>
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
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Token Packs</div>
              <div className="self-stretch text-black text-center text-base font-normal leading-normal">Purchase tokens to generate dialog</div>
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
