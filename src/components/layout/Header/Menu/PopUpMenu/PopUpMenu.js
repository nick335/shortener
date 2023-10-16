import Menu from "../Menu"
import MenuItem from "../MenuItem"


export default function PopUpMenu({ ...props }) {
  const menuLinks = [
    {name: 'Home', href: '/home'},
    {name: 'Dashboard', href: '/home/dashboard'},
    {name: 'URLs', href: '/urls'},
    {name: 'Admins', href: '/admins'},
  ]
  
  return (
    <Menu  className="pop-up-menu gap-2.5">
      {
        menuLinks.map(({ name, href }) => (
          <MenuItem key={href} href={href} className="px-2.5" {...props}>{name}</MenuItem>
        ))
      }

      <hr className="my-2.5" />

      <MenuItem logout className="px-2.5" {...props}>Log Out</MenuItem>
  </Menu>
  )
}
