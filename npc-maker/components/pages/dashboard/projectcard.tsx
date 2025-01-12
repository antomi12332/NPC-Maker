'use client';
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../ui/alert-dialog";
import { DELETE_PROJECT_MUTATION } from "@/app/_apollo/gql/projectsgql";
import { FaTrash } from "react-icons/fa";
import { ProjectCardProps } from "@/typings";
import { setLocalStorageItem } from "@/utils/cache";
import { setProject } from '@/store/projectSlice';
import { toast } from "@/hooks/use-toast";
import { useDispatch } from 'react-redux';
import { useMutation } from "@apollo/client";
import Link from "next/link";



export default function ProjectCard({ project, setProjects }: ProjectCardProps) {
  const dispatch = useDispatch();
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION);

  const handleDelete = async (id: string) => {
    try {
      await deleteProject({ variables: { id } });
      toast({
        title: "Project Deleted",
        duration: 2000,
      });
      setProjects(prevProjects => prevProjects.filter(p => p.node.id !== id));
    }
    catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: error as string,
        duration: 2000,
      });
    }
  };

  const projectLink = () => {
    dispatch(setProject({
      id: project.id,
      project_name: project.project_name,
      project_id: ""
    }));
    setLocalStorageItem('projectData', JSON.stringify({
      id: project.id,
      project_name: project.project_name,
      project_id: ""
    }));
  };

  const { id, project_name } = project;
  return (
    <div key={id} className="flex flex-row justify-between">
      <Link
        href={`/projectdetail/${id}`}
        className="self-stretch justify-start items-start gap-10 inline-flex"
        onClick={() => projectLink()}
      >
        <div className="grow shrink basis-0 self-stretch py-5 justify-center items-center gap-4 flex">
          <div className="w-[60px] h-[60px] bg-black/5 rounded-[30px] justify-center items-center flex">
            <div className="w-[60px] self-stretch text-center text-black text-[37.50px] font-normal leading-[60px]">🌌</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <p className="w-auto self-stretch text-black text-xl font-normal leading-7">{project_name}</p>
          </div>
        </div>
      </Link>

      <div className="flex justify-end items-center px-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button><FaTrash /></button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete all associated Locations/Quests/NPCs and dialogs under this project.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(id)}>Yup, I&apos;m sure</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}