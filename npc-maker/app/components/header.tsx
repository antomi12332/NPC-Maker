'use client';
import { usePathname } from "next/navigation";

export default function Header(props: { titleText: string }) {
  const currentPath = usePathname();
  return (
    <header className="w-full h-20 p-5 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] justify-center items-center gap-5 inline-flex overflow-hidden">
      <div className="w-10 h-10 bg-black/10 rounded-[100px]" />
      <div className="grow shrink basis-0 text-black text-[28px] font-medium font-['Roboto'] leading-9">{props.titleText}</div>
      <div className="bg-white justify-center items-center gap-10 flex">
        {currentPath === '/' && (
          <>
            <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Login</button>
            <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</button>
          </>
        )}
        {currentPath === '/dashboard' && (
          <>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Dashboard</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Projects</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Account</button>
          </>
        )}
        {currentPath !== '/' && currentPath !== '/dashboard' && (
          <>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Dashboard</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Projects</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Account</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Locations</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">NPCs</button>
          <button className="text-black text-base font-normal font-['Roboto'] leading-normal">Quests</button>
          </>
        )}
        
        </div>
    </header>
  )
}