import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { useMutation } from "@apollo/client"
import { DELETE_CULTURE_MUTATION } from "@/app/_apollo/gql/culturegql"
import { toast } from "@/hooks/use-toast"
import { Culture } from "@/gql/graphql"



export default function CultureCard({ cultures, setCultures }) {
  const [deleteCulture] = useMutation(DELETE_CULTURE_MUTATION);

  const handleDelete = async (id: string) => {
    try {
      await deleteCulture({ variables: { id } });
      toast({
        title: "Culture Deleted",
        duration: 2000,
      });
      setCultures((prevCulture: Culture[]) => prevCulture.filter(p => p.id !== id));
    }
    catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };


  const { id, title, description } = cultures;
  return (
    <Dialog key={id}>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
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
            <Input id="name" defaultValue={title!} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea id="username" className="col-span-3" defaultValue={description!} />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-red-500" variant="outline" onClick={() => handleDelete(id)}>Delete</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}