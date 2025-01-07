import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FaTrash } from "react-icons/fa";

export default function DeleteLocationWarning({ id, handleDelete }: { id: string, handleDelete: (id: string) => void }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="deleteLocationWarning"><FaTrash /></div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Location</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-center justify-center items-center col-span-4">
              Are you sure you want to delete this location?
              <div className="text-lg">
                <strong>This will delete all NPCs associated with this location.</strong>
              </div>
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={() => handleDelete(id)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}