import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
import { LogOut } from '@/redux/features/user/userSlice';
import { Category2, Clock, Home, Link1, Profile2User, User } from 'iconsax-react'


export default function MenuItem({
  children,
  clearModals,
  logout = false,
  href = '/',
  className=''
}) {
  const navigate = usePathname()
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    clearModals()
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
  ) : children == 'Search History' ? (
    <Clock size={20} />
  ) : children == 'Invite History' ? (
    <Profile2User size={20} />
  ) : null

  const logoutClass = `menu-item--${logout ? "logout" : "default"}`
  const activeClass = `menu-item--${navigate === href ? "active" : "inactive"}`


  return (
    <Link
      href={href}
      onClick={logout ? handleLogout : clearModals}
      className={`menu-item ${activeClass} ${logoutClass} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}