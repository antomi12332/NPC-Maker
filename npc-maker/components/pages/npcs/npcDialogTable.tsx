import { DELETE_NPC_MUTATION } from "@/app/_apollo/gql/npcgql";
// import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Quests } from "@/gql/graphql";
import { toast } from "@/hooks/use-toast";
import { NpcDialogTableProps } from "@/typings";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";



export default function NpcDialogTable(props: NpcDialogTableProps) {
  const [deleteNPC] = useMutation(DELETE_NPC_MUTATION);
  const [quest, setQuest] = useState<Quests>();



  const handleDeleteNpc = async (id: string) => {
    await deleteNPC({ variables: { id } });
    toast({
      title: "NPC Deleted",
      duration: 2000,
    });
  };

  useEffect(() => {
    const matchedQuest = props.questData.filter((quest) => quest.id === props.locationNode?.npcsCollection?.edges[0].node.quest_id);
    setQuest(matchedQuest[0]);
    console.log(quest); // temp lint fix
  }, [props.locationNode, props.questData, quest]);



  return (
    <div className="rounded-md border border-spacing-2 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead aria-label="name" className="w-auto">NPC Name</TableHead>
            <TableHead aria-label="description" className="w-auto">Description</TableHead>
            <TableHead aria-label="dialog" className="w-auto">Dialog</TableHead>
            <TableHead aria-label="quest" className="w-auto">Quest</TableHead>
            <TableHead aria-label="culrure" className="w-auto">Culture</TableHead>
            <TableHead aria-label="history" className="w-auto">History</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.locationNode.npcsCollection?.edges.map(({ node: npcNode }) => (
            <TableRow key={npcNode.id}>
              <TableCell aria-label="name"><Input defaultValue={npcNode.npc_name ?? ''} /></TableCell>
              <TableCell aria-label="description"><Textarea defaultValue={npcNode.description ?? ''} /></TableCell>
              <TableCell aria-label="dialog"><Textarea defaultValue={npcNode.dialog ?? ''} /></TableCell>


              <TableCell aria-label="quest">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div>
                      {props.questData.filter((quest) => quest.id === npcNode.quest_id).length > 0
                        ? (props.questData.filter((quest) => quest.id === npcNode.quest_id)
                          .map((quest) => (
                            <div key={quest.id}>{quest.title}</div>
                          ))
                        ) : (
                          <button />
                        )}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {props.questData?.map((questNode) => (
                      <DropdownMenuRadioItem key={questNode.id} value={questNode.title}>
                        {questNode.title}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>



              <TableCell aria-label="culture">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div>
                      {props.cultures.filter((culture) => culture.id === npcNode.culture_id).length > 0 ? (
                        props.cultures.filter((culture) => culture.id === npcNode.culture_id)
                          .map((culture) => (
                            <div key={culture.id}>{culture.title}</div>
                          ))
                      ) : (
                        <button />
                      )}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {props.cultures?.map((culture) => (
                      <DropdownMenuRadioItem key={culture.id} value={culture.title}>
                        {culture.title}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>



              <TableCell aria-label="history">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div >
                      {props.histories.filter((history) => history.id === npcNode.history_id).length > 0 ? (
                        props.histories.filter((history) => history.id === npcNode.history_id)
                          .map((history) => (
                            <div key={history.id}>{history.title}</div>
                          ))
                      ) : (
                        <button />
                      )}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {props.histories?.map((historyNode) => (
                      <DropdownMenuRadioItem key={historyNode.id} value={historyNode.title}>
                        {historyNode.title}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>

              <TableCell aria-label="delete">
                <button onClick={() => handleDeleteNpc(npcNode.id)}><FaTrash /></button>
                {/* <Checkbox
                checked={field.value?.includes(item.id)}
                onCheckedChange={(checked) => {
                  return checked
                    ? field.onChange([...field.value, item.id])
                    : field.onChange(
                      field.value?.filter(
                        (value) => value !== item.id
                      )
                    )
                }}
                /> */}
              </TableCell>

            </TableRow>
          ))}



        </TableBody>

      </Table>
    </div>
  );
}