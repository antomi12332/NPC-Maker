import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function NpcDialogTable(props: { locationNode }) {
  console.log(props.locationNode);
  if (!props.locationNode.npcsCollection || props.locationNode.npcsCollection.edges.length === 0) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-auto">NPC Name</TableHead>
            <TableHead className="w-auto">Description</TableHead>
            <TableHead className="w-auto">Dialog</TableHead>
            <TableHead className="w-auto">Quest</TableHead>
            <TableHead className="w-auto">Culture</TableHead>
            <TableHead className="w-auto">History</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><input type="text" /></TableCell>
            <TableCell><input type="text" /></TableCell>
            <TableCell><input type="text" /></TableCell>
            <TableCell><input type="text" /></TableCell>
            <TableCell><input type="text" /></TableCell>
            <TableCell><input type="text" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-auto">NPC Name</TableHead>
            <TableHead className="w-auto">Description</TableHead>
            <TableHead className="w-auto">Dialog</TableHead>
            <TableHead className="w-auto">Quest</TableHead>
            <TableHead className="w-auto">Culture</TableHead>
            <TableHead className="w-auto">History</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.locationNode.npcsCollection.edges.map(({ node }) => (
            <TableRow key={node.id}>
              <TableCell>{node.npc_name}</TableCell>
              <TableCell><input type="text" /></TableCell>
              <TableCell>{node.dialog}</TableCell>
              <TableCell><input type="text" /></TableCell>
              <TableCell><input type="text" /></TableCell>
              <TableCell><input type="text" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}