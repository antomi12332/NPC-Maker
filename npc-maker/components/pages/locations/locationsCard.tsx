import { Button } from "@/components/ui/button";
import { DELETE_LOCATION_MUTATION, UPDATE_LOCATION_MUTATION } from "@/app/_apollo/gql/locationsgql";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaTrash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LocationsCardProps } from "@/typings";



export default function LocationsCard({ locations, setLocations }: LocationsCardProps) {
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION);
  const [updateLocation] = useMutation(UPDATE_LOCATION_MUTATION);
  const [locationName, setLocationName] = useState(locations.location_name);
  const [locationDescription, setLocationDescription] = useState(locations.description);
  // const [npcs, setNumberNPC] = useState(locations.npcs);
  const { id } = locations;



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
    <Dialog>
      <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
        <DialogTrigger>
          <div className="w-[100px] h-[100px] bg-black/5 rounded-[50px] justify-center items-center inline-flex">
            <div className="w-[100px] self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]">🏰</div>
          </div>
        </DialogTrigger>
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-center text-black text-xl font-normal leading-7">{locationName}</div>
          <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">{locationDescription}</div>
        </div>
        <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">20 NPCs</div>
      </div>

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
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea id="username" className="col-span-3 h-40" defaultValue={locationDescription!} onChange={(e) => setLocationDescription(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={() => handleDelete(id)}><FaTrash /></Button>
          <Button onClick={handleUpdate} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  );
}