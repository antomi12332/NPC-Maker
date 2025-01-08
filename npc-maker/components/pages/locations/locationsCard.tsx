import { Button } from "@/components/ui/button";
import { DELETE_LOCATION_MUTATION, UPDATE_LOCATION_MUTATION } from "@/app/_apollo/gql/locationsgql";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { LocationsCardProps } from "@/typings";
import DeleteLocationWarning from "./deleteLocationWarning";
import { CREATE_NPC_MUTATION } from "@/app/_apollo/gql/npcgql";


export default function LocationsCard({ locations, setLocations, }: LocationsCardProps) {
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION);
  const [updateLocation] = useMutation(UPDATE_LOCATION_MUTATION);
  const [npcToLocation] = useMutation(CREATE_NPC_MUTATION);
  const [locationName, setLocationName] = useState(locations.location_name);
  const [locationDescription, setLocationDescription] = useState(locations.description);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [minimumWarning, setMinimumWarning] = useState<string | null>(null);
  const [npcs, setNumberNPC] = useState<number>(0);
  const [npcSave, setNpcSave] = useState<number>(npcs);
  const { id } = locations;



  useEffect(() => {
    if (locations.npcsCollection && locations.npcsCollection.edges.length) {
      setNumberNPC(locations.npcsCollection.edges.length);
    }
  }, [locations]);


  const handleDelete = async (id: string) => {
    try {
      await deleteLocation({ variables: { id } });
      toast({
        title: "Location Deleted",
        duration: 2000,
      });
      setLocations(prevLocation => prevLocation.filter(p => p.node.id !== id));
    }
    catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };

  const handleUpdate = async () => {
    try {
      await updateLocation({
        variables: {
          id,
          location_name: locationName,
          description: locationDescription,
        }
      });
      const addNPCDifference = npcSave - npcs;
      for (let i = 0; i < addNPCDifference; i++) {
        await npcToLocation({
          variables: {
            location_id: id,
            npc_name: null,
            description: null,
          },
        });
      }
      setNumberNPC(npcSave);
      setIsDialogOpen(false);
      toast({
        title: "Location Updated",
        duration: 2000,
      });
    } catch (error) {
      console.error('Error updating location:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };
  return (
    <>

      <Dialog>
        <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
          <DialogTrigger onClick={() => setIsDialogOpen(true)}>
            <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
              <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🏰</div>
            </div>
          </DialogTrigger>
          <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-center text-black text-xl font-normal leading-7">{locationName}</div>
            <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">{locationDescription}</div>
          </div>
          <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">{npcs} NPCs</div>
        </div>
        {isDialogOpen && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Location</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Location Name
                </Label>
                <Input id="name" defaultValue={locationName!} className="col-span-3" onChange={(e) => setLocationName(e.target.value)} />
                <Label htmlFor="name" className="text-right">
                  NPC Count
                </Label>
                <Input id="npcCount" type="number" defaultValue={npcs!} className="col-span-3" min={npcs} onChange={(e) => {
                  setNpcSave(Number(e.target.value));
                  if (Number(e.target.value) < npcs) {
                    setMinimumWarning('Cannot have less NPCs than already assigned');
                  } else {
                    setMinimumWarning(null);
                  }
                }} />
                {minimumWarning && <div className="col-span-4 text-red-500">{minimumWarning}</div>}
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Textarea id="username" className="col-span-3 h-40" defaultValue={locationDescription!} onChange={(e) => setLocationDescription(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <DeleteLocationWarning id={id} handleDelete={handleDelete} />
              <Button onClick={handleUpdate} type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

    </>
  );
}