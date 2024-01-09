"use client"
import SidebarLink from "./SidebarLink/SidebarLink";
import { useSelector } from "react-redux";


export default function Sidebar() {
  const role = useSelector(state => state.user.userDetails.role)
  const sidebarLinks = [
    {name: 'Home', href: '/home'},
    {name: 'Dashboard', href: '/home/dashboard'},
    {name: 'URLs', href: '/home/urls'},
  ]


  return (
    <nav className="sidebar bg-ecx-white hidden lg:block ps-28 pe-5 py-[50px]">
      <div className="flex flex-col gap-2.5">
        {
          sidebarLinks.map(({name, href}) => (
            <SidebarLink
              key={href}
              href={href}
            >{name}</SidebarLink>
          ))
        }
        { role === 'SUPER_ADMIN' && <SidebarLink key={'/home/admins'} href="/home/admins" >Admins</SidebarLink>}
      </div>

      <hr className="border-[#E1E1E1] mt-2.5 mb-2" />

      <SidebarLink logout>Logout</SidebarLink>
    </nav>
  )
}