'use client';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header(props: { titleText: string }) {
  const currentPath = usePathname();
  const router = useRouter()
  const supabase = createClient();

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    router.push('/')
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
            <div className="text-black text-base font-normal leading-normal">project name placeholder</div>
            <Link className="text-black text-base font-normal leading-normal" href="/dashboard">Dashboard</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/projectdetail">Project</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/account">Account</Link>
            <button className="text-black text-base font-normal leading-normal" onClick={signOut}>Logout</button>
          </>
        )}
        {currentPath !== '/' && currentPath !== '/dashboard' && currentPath !== '/login' && (
          <>
            <div className="text-black text-base font-normal leading-normal">project name placeholder</div>
            <Link className="text-black text-base font-normal leading-normal" href="/dashboard">Dashboard</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/projectdetail">Project</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/locations">Locations</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/quests">Quests</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/npcs">NPCs</Link>
            <Link className="text-black text-base font-normal leading-normal" href="/account">Account</Link>
            <button className="text-black text-base font-normal leading-normal" onClick={signOut}>Logout</button>
          </>
        )}

      </div>
    </header>
  )
}