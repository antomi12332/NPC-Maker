'use client';
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { CURRENT_PROJECT } from "@/app/_apollo/gql/projectsgql";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/cache";
import { setProject } from "@/store/projectSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import ProjectSelector from "./projectSelector";
import { Projects, Query } from "@/gql/graphql";

export default function Header(props: { titleText: string }) {
  const dispatch = useDispatch();
  const currentPath = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const projectUUID = JSON.parse(getLocalStorageItem('projectData')!).id;
  const { data: currentProject } = useQuery<Query>(CURRENT_PROJECT, { variables: { id: projectUUID } });
  const { data: allProjects } = useQuery<Query>(CURRENT_PROJECT);
  const [projectData, setProjectData] = useState<Projects | null>(null);



  useEffect(() => {
    if (currentProject?.projectsCollection?.edges && currentProject.projectsCollection.edges.length > 0) {
      const project = currentProject.projectsCollection.edges[0].node;
      setProjectData(project);
      dispatch(setProject(project));
      // Save projectData to local storage
      setLocalStorageItem('projectData', JSON.stringify(project));
    }
  }, [currentProject, dispatch]);

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/');
  }



  return (
    <header className="w-full h-20 p-5 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] justify-center items-center gap-5 inline-flex">
      <Link className="w-10 h-10 bg-black/10 rounded-[100px]" href='/'> </Link>
      <div className="grow shrink basis-0 text-black text-[28px] font-medium leading-9">{props.titleText}</div>


      <div className="bg-white justify-center items-center gap-10 flex">
        {currentPath === '/' && (
          <>
            <Link className="text-black text-base font-normal leading-normal" href="/login">Login</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/login">Sign Up</Link>
          </>
        )}
        {currentPath === '/dashboard' && (
          <>
            <Link className="text-black text-base font-normal leading-normal" href="/dashboard">Dashboard</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/account">Account</Link>
            <button className="text-black text-base font-normal leading-normal" onClick={signOut}>Logout</button>
          </>
        )}
        {currentPath !== '/' && currentPath !== '/dashboard' && currentPath !== '/login' && (
          <>
            <div className="text-black text-base font-bold leading-normal">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="text-lg" variant="outline">{projectData?.project_name}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <ProjectSelector projectData={allProjects} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link className="text-black text-base font-normal leading-normal" href="/dashboard">Dashboard</Link>
            <Link className="text-black text-base font-normal leading-normal" href={`/projectdetail/${projectUUID}`}>Project</Link>
            <Link className="text-black text-base font-normal leading-normal" href={`/locations/${projectUUID}`}>Locations</Link>
            <Link className="text-black text-base font-normal leading-normal" href={`/quests/${projectUUID}`}>Quests</Link>
            <Link className="text-black text-base font-normal leading-normal" href={`/npcs/${projectUUID}`}>NPCs</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/account">Account</Link>
            <button className="text-black text-base font-normal leading-normal" onClick={signOut}>Logout</button>
          </>
        )}

      </div>
    </header>
  );
}