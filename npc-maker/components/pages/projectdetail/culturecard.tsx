import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { useMutation } from "@apollo/client";
import { DELETE_CULTURE_MUTATION, UPDATE_CULTURE_MUTATION } from "@/app/_apollo/gql/culturegql";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CultureCardProps } from "@/typings";



export default function CultureCard({ cultures, setCultures }: CultureCardProps) {
  const [deleteCulture] = useMutation(DELETE_CULTURE_MUTATION);
  const [updateCulture] = useMutation(UPDATE_CULTURE_MUTATION);
  const [cultureTitle, setCultureTitle] = useState(cultures.title);
  const [cultureDescription, setCultureDescription] = useState(cultures.description);
  const { id } = cultures;

  const handleDelete = async (id: string) => {
    try {
      await deleteCulture({ variables: { id } });
      toast({
        title: "Culture Deleted",
        duration: 2000,
      });
      setCultures(prevCulture => prevCulture.filter(p => p.node.id !== id));
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
      await updateCulture({ variables: { id, cultureTitle, cultureDescription } });
      toast({
        title: "Culture Updated",
        duration: 2000,
      });
    }
    catch (error) {
      console.error('Error updating project:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };




  return (
    <Dialog key={id}>
      <DialogTrigger asChild>
        <Button variant="outline">{cultureTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Culture</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" defaultValue={cultureTitle!} className="col-span-3" onChange={(e) => setCultureTitle(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea id="description" className="col-span-3 h-40" defaultValue={cultureDescription!} onChange={(e) => setCultureDescription(e.target.value)} />
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