'use client';
import { useDispatch } from "react-redux";
import { DropdownMenuRadioItem } from "./ui/dropdown-menu";
import { ProjectState, setProject } from "@/store/projectSlice";
import { usePathname, useRouter } from "next/navigation";
import { setLocalStorageItem } from "@/utils/cache";
import { Projects } from "@/gql/graphql";

export default function ProjectSelector(props: { projectData: Projects[] }) {
  const dispatch = useDispatch();
  const currentPath = usePathname();
  const router = useRouter();



  const handleClick = (node: ProjectState) => {
    setLocalStorageItem('projectData', JSON.stringify(node));
    dispatch(setProject(node));
    const path = currentPath.split('/');
    path.pop();
    const newPath = `${path.join('/')}/${node.id}`;
    router.push(newPath);
  };


  return props.projectData.map((node: { id: string; project_id: string; project_name: string }) => {
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