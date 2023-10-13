import { Home2, Link1, Menu, User } from "iconsax-react";
import Link from "next/link";

export default function SidebarLink({ children }) {
  return (
    <Link href="" className="py-3 flex gap-x-5 hover:text-dart/75 transition-all duration-200">
      {
        children === "Home" ? (
          <Home2 size="20" />
        ) : children === "Dashboard" ? (
          <Menu size="20" />
        ) : children === "URLs" ? (
          <Link1 size="20" />
        ) : children === "Admins" ? (
          <User size="20" />
        ) : null
      }
      <span>{children}</span>
    </Link>
  )
}