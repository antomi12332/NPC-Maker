'use client'
import { useDispatch } from "react-redux";
import { DropdownMenuRadioItem } from "./ui/dropdown-menu";
import { setProject } from "@/store/projectSlice";
import { usePathname, useRouter } from "next/navigation";
import { OperationVariables } from "@apollo/client";

export default function ProjectSelector(props: { projectData: OperationVariables }) {
  const dispatch = useDispatch();
  const { data } = props.projectData;
  const currentPath = usePathname();
  const router = useRouter();



  const handleClick = (id: string, project_name: string) => {
    dispatch(setProject({
      id,
      project_name,
      project_id: ""
    }));
    const path = currentPath.split('/')
    path.pop();
    const newPath = `${path.join('/')}/${id}`
    router.push(newPath)
  };


  return data.projectsCollection.edges.map(({ node }: { node: { id: string; project_name: string } }) => {
    const { id, project_name } = node;
    return (
      <DropdownMenuRadioItem
        key={id} value={project_name}
        onClick={() => handleClick(id, project_name)}
      >
        {project_name}
      </DropdownMenuRadioItem>
    );
  })
}