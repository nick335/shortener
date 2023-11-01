import "./SidebarLink.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Category2, Home, Link1, User } from "iconsax-react";
import { useDispatch } from "react-redux";
import { LogOut } from "@/redux/features/user/userSlice";


export default function SidebarLink({
  children,
  logout = false,
  href = '/',
}) {
  const navigate = usePathname()

  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(LogOut())
  }

  const icon = children == 'Home' ? (
    <Home size={20} />
  ) : children == 'Dashboard' ? (
    <Category2 size={20} />
  ) : children == 'URLs' ? (
    <Link1 size={20} />
  ) : children == 'Admins' ? (
    <User size={20} />
  ) : null

  const logoutClass = `sidebar-link--${logout ? "logout" : "default"}`
  const activeClass = `sidebar-link--${navigate === href ? "active" : "inactive"}`
  
  return (
    <Link
      href={href}
      className={`sidebar-link ${activeClass} ${logoutClass}`} 
      onClick={logout ? handleLogout : null}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}