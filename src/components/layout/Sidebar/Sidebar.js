"use client"
import SidebarLink from "@/components/common/SidebarLink/SidebarLink";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className={`
      sidebar w-[calc(((100vw-320px)/4)+160px)] bg-ecx-white 
      hidden lg:flex flex-col gap-y-[30px]
      ps-40 pe-10 py-[51px] font-inter
    `}>
      <div className="flex flex-col gap-y-[26px]">
        <SidebarLink>Home</SidebarLink>
        <SidebarLink>Dashboard</SidebarLink>
        <SidebarLink>URLs</SidebarLink>
        <SidebarLink>Admins</SidebarLink>
      </div>

      <hr className="border-[#E1E1E1]" />
      
      <Link href='' className="text-ruby transition-all duration-200 hover:brightness-125">
        Log Out
      </Link>
    </nav>
  )
}