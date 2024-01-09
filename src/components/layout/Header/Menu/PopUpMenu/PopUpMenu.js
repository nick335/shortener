import Menu from "../Menu"
import MenuItem from "../MenuItem"
import { useSelector } from "react-redux";


export default function PopUpMenu({ ...props }) {
  const role = useSelector(state => state.user.userDetails.role)
  const menuLinks = [
    {name: 'Home', href: '/home'},
    {name: 'Dashboard', href: '/home/dashboard'},
    {name: 'URLs', href: '/home/urls'},
  ]
  
  return (
    <Menu  className="pop-up-menu gap-2.5">
      {
        menuLinks.map(({ name, href }) => (
          <MenuItem key={href} href={href} className="px-2.5" {...props}>{name}</MenuItem>
        ))
      }
      { role === 'SUPER_ADMIN' && <MenuItem key={'/home/admins'} href="/home/admins" className="px-2.5" {...props}>Admins</MenuItem>}
      <hr className="my-2.5" />

      <MenuItem logout className="px-2.5" {...props}>Log Out</MenuItem>
  </Menu>
  )
}
