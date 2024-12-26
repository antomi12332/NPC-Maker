'use client'
export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="h-[120px] p-[60px] justify-center items-center gap-[60px] inline-flex absolute inset-x-0 bottom-0 w-full">
      <div className="justify-center items-center gap-[60px] flex">
        <div className="w-1/3 self-stretch text-center text-black text-xl font-normal leading-7">©{year} NPC Maker All Rights Reserved</div>
        <div className="w-1/3 self-stretch text-center text-black text-xl font-normal leading-7">Privacy Policy</div>
        <div className="w-1/3 self-stretch text-center text-black text-xl font-normal leading-7">Terms of Service</div>
      </div>
    </footer>
  )
}