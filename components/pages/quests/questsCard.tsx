import { DELETE_QUESTS_MUTATION, UPDATE_QUESTS_MUTATION } from "@/app/_apollo/gql/questsgql";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { QuestCardProps } from "@/typings";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";



export default function QuestCard({ questData, setquestData }: QuestCardProps) {
  const [deleteQuest] = useMutation(DELETE_QUESTS_MUTATION);
  const [updateQuest] = useMutation(UPDATE_QUESTS_MUTATION);
  const [questName, setQuestName] = useState(questData.title);
  const [questObjective, setQuestObjective] = useState(questData.objective);
  const [questReward, setQuestReward] = useState(questData.reward);
  const { id } = questData;




  const handleDelete = async (id: string) => {
    try {
      await deleteQuest({ variables: { id } });
      toast({
        title: "Quest Deleted",
        duration: 2000,
      });
      setquestData(prevQuest => (prevQuest || []).filter(p => p.id !== id));
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
      await updateQuest({
        variables: {
          id,
          title: questName,
          objective: questObjective,
          reward: questReward
        }
      });
      toast({
        title: "Quest Updated",
        duration: 2000,
      });
    } catch (error) {
      console.error('Error updating quest:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };


  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">{questName}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue={questData.title}
                onChange={(e) => setQuestName(e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="objective">Objective</Label>
              <Input
                id="framework"
                defaultValue={questData.objective}
                onChange={(e) => setQuestObjective(e.target.value)}
                maxLength={100}
              />
            </div>
            <div>
              <Label htmlFor="reward">Reward</Label>
              <Input
                id="framework"
                defaultValue={questData.reward}
                onChange={(e) => setQuestReward(e.target.value)}
                maxLength={100}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" onClick={() => handleDelete(id)}><FaTrash /></Button>
        <Button onClick={handleUpdate}>Save</Button>
      </CardFooter>
    </Card>
  );
}