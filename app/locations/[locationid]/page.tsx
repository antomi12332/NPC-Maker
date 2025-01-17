'use client';
import { Button } from "@/components/ui/button";
import { CREATE_LOCATION_MUTATION, GET_LOCATION } from "@/app/_apollo/gql/locationsgql";
import { CREATE_NPC_MUTATION } from "@/app/_apollo/gql/npcgql";
import { getLocalStorageItem } from "@/utils/cache";
import { Input } from "@/components/ui/input";
import { Query, Location, Mutation } from "@/gql/graphql";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Banner from "@/components/banner";
import Header from "@/components/header";
import LocationsCard from "@/components/pages/locations/locationsCard";



export default function Locations() {
  const projectUUID = JSON.parse(getLocalStorageItem('projectData') || '{}').id || null;
  const { data } = useQuery<Query>(GET_LOCATION, { variables: { id: projectUUID }, });
  const [locationName, setLocationName] = useState<string>("");
  const [locationDescription, setLocationDescription] = useState<string>("");
  const [npcCount, setNpcCount] = useState<number>(0);
  const [createLocation] = useMutation<Mutation>(CREATE_LOCATION_MUTATION);
  const [npcToLocation] = useMutation<Mutation>(CREATE_NPC_MUTATION);
  const [locations, setLocations] = useState<Location[]>([]);


  useEffect(() => {
    if (data && data.projectsCollection && data.projectsCollection.edges.length > 0 && data.projectsCollection.edges[0].node.locationCollection) {
      setLocations(data.projectsCollection.edges[0].node.locationCollection.edges.map(edge => edge.node));
    }
  }, [data]);



  const handleCreateLocation = async () => {
    if (!locationName.trim() || !locationDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Enter a name and description to your location.",
        duration: 2000,
      });
      return;
    }
    try {
      const { data } = await createLocation({
        variables: {
          project_id: projectUUID,
          location_name: locationName,
          description: locationDescription,
        },
      });
      // Create NPCs for the location
      const newLocationID = data?.insertIntolocationCollection?.records[0].id;
      for (let i = 0; i < npcCount; i++) {
        await npcToLocation({
          variables: {
            location_id: newLocationID,
            npc_name: null,
            description: null,
          },
        });
      }

      const newLocations = data?.insertIntolocationCollection?.records[0];
      toast({
        title: "Location Created",
        description: locationName,
        duration: 2000,
      });
      setLocations([...locations, { ...newLocations, nodeId: newLocationID, npcsCollection: { edges: Array(npcCount).fill({}) } } as Location]);
      setLocationName("");
      setLocationDescription("");
      setNpcCount(0);
    } catch (error) {
      console.error('Error creating location:', error);
    }
  };

  return (
    <div>
      <Header titleText="Locations" />
      <Banner bannerText="Manage Locations" bannerDescription="Create and edit locations to place your NPCs" />

      <div className={"bodyFitment"}>

        <div className="self-stretch h-[488px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Locations</div>
          </div>
          <div className="self-stretch h-[260px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-10 inline-flex">

              {locations.map((node) => (
                <LocationsCard key={node.id} locations={node} setLocations={setLocations} />
              ))}

            </div>
          </div>
        </div>
        <div className="self-stretch h-[396px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold leading-[48px]">Add Location</div>
          </div>
          <div className="self-stretch h-[168px] flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Location Name</div>

                <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  placeholder={"Enter location name"}
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                />

              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Description</div>

                <Textarea className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  placeholder={"Enter location description"}
                  value={locationDescription}
                  onChange={(e) => setLocationDescription(e.target.value)}
                />


              </div>
              <div className="w-[313.33px] flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-medium leading-tight">Number of NPCs</div>

                <Input className="self-stretch px-3 py-2 bg-white rounded-md border border-black/10 justify-start items-center gap-1 inline-flex"
                  type="number"
                  min={0}
                  value={npcCount}
                  onChange={(e) => setNpcCount(Number(e.target.value))}
                />

                <div className="self-stretch text-black/50 text-xs font-normal leading-none">Specify the number of NPCs</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-12 p-3 bg-black rounded-lg flex-col justify-center items-center flex">
                <Button className="text-white text-base font-medium leading-normal" onClick={handleCreateLocation}>Add Location</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 h-[300px] py-1 justify-start items-start flex">
            <div className="px-4 pt-[138px] pb-2 bg-[#d8d8d8]/50 rounded-md flex-col justify-end items-center gap-[126px] inline-flex">
              <div className="w-[1068px] h-4 text-center text-black text-xs font-normal leading-none">Explore the different locations in your game world and bring your NPCs to life!</div>
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
