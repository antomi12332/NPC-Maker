'use client';
import { useDispatch } from "react-redux";
import { DropdownMenuRadioItem } from "./ui/dropdown-menu";
import { ProjectState, setProject } from "@/store/projectSlice";
import { usePathname, useRouter } from "next/navigation";
import { OperationVariables } from "@apollo/client";

export default function ProjectSelector(props: { projectData: OperationVariables }) {
  const dispatch = useDispatch();
  const { data } = props.projectData;
  const currentPath = usePathname();
  const router = useRouter();



  const handleClick = (node: ProjectState) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('projectData', JSON.stringify(node));
    }
    dispatch(setProject(node));
    const path = currentPath.split('/');
    path.pop();
    const newPath = `${path.join('/')}/${node.id}`;
    router.push(newPath);
  };


  return data.projectsCollection.edges.map(({ node }: { node: { id: string; project_id: string; project_name: string } }) => {
    const { id, project_id, project_name } = node;
    return (
      <DropdownMenuRadioItem
        key={id} value={project_name}
        onClick={() => handleClick({ id, project_id, project_name })}
      >
        {project_name}
      </DropdownMenuRadioItem>
    );
  });
}