import Menu from "../Menu"
import MenuItem from "../MenuItem"
import { User } from "iconsax-react"

export default function ProfileMenu({ ...props }) {
  const menuLinks = [
    {name: 'Search History', href:''},
    {name: 'Invite History', href:''},
  ]
  return (
    <Menu className="profile text-normal">
      <div className="w-[70px] aspect-square flex-center-center bg-[#E1E1E180] rounded-[10px]">
        <User size={35} />
      </div>

      <p className="text-medium mt-[15px] mb-[5px]">Ifihanagbara Oluseye</p>
      
      <p className="text-dart text-small">Super Admin</p>

      <hr className="mt-[30px] mb-[20px]" />

      <div className="flex flex-col gap-1">
        {
          menuLinks.map(({ name, href}, index) => (
            <MenuItem key={index} href={href} {...props}>{name}</MenuItem>
          ))
        }
      </div>

      <hr className="mt-auto mb-2.5"/>

      <MenuItem logout className="px-2.5" {...props}>Log Out</MenuItem>
    </Menu>
  )
}