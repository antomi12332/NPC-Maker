'use client';
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { CURRENT_PROJECT } from "@/app/_apollo/gql/projectsgql";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { setProject } from "@/store/projectSlice";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ProjectSelector from "./projectSelector";
import { getLocalStorageItem } from "@/utils/cache";

export default function Header(props: { titleText: string }) {
  const dispatch = useDispatch();
  const currentPath = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const projectUUID = getLocalStorageItem('projectUUID');
  const currentProject = useQuery(CURRENT_PROJECT, { variables: { id: projectUUID } });
  const allProjects = useQuery(CURRENT_PROJECT);
  const [projectData, setProjectData] = useState(() => {
    const savedProjectData = localStorage.getItem('projectData');
    if (savedProjectData) {
      dispatch(setProject(JSON.parse(savedProjectData)));
      return savedProjectData ? JSON.parse(savedProjectData) : null;
    }
  });




  useEffect(() => {
    if (currentProject.data && currentProject.data.projectsCollection.edges.length > 0) {
      const project = currentProject.data.projectsCollection.edges[0].node;
      setProjectData(project);
      // Save projectData to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem('projectData', JSON.stringify(project));
      }
    }
  }, [currentProject]);

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