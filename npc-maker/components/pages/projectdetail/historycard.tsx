import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Textarea } from "../../ui/textarea"
import { useMutation } from "@apollo/client"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { DELETE_HISTORY_MUTATION, UPDATE_HISTORY_MUTATION } from "@/app/_apollo/gql/historygql"
import { FaTrash } from "react-icons/fa"



export default function HistoryCard({ histories, setHistories }) {
  const [deleteHistory] = useMutation(DELETE_HISTORY_MUTATION);
  const [updateHistory] = useMutation(UPDATE_HISTORY_MUTATION);
  const [historyTitle, sethistoryTitle] = useState(histories.title);
  const [historyDescription, sethistoryDescription] = useState(histories.description);
  const { id } = histories;

  const handleDelete = async (id: string) => {
    try {
      await deleteHistory({ variables: { id } });
      toast({
        title: "History Deleted",
        duration: 2000,
      });
      setHistories(prevHistory => prevHistory.filter(p => p.node.id !== id));
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
      await updateHistory({ variables: { id, historyTitle, historyDescription } });
      toast({
        title: "History Updated",
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
  }




  return (
    <Dialog key={id}>
      <DialogTrigger asChild>
        <Button variant="outline">{historyTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit History</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" defaultValue={historyTitle!} className="col-span-3" onChange={(e) => sethistoryTitle(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea id="username" className="col-span-3 h-40" defaultValue={historyDescription!} onChange={(e) => sethistoryDescription(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={() => handleDelete(id)}><FaTrash /></Button>
          <Button onClick={handleUpdate} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}