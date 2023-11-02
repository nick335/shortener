import { useSelector } from "react-redux"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import { User } from "iconsax-react"
import { useTitleCase } from "@/hooks/useTitleCase"

export default function ProfileMenu({ ...props }) {
  const menuLinks = [
    {name: 'Search History', href:''},
    {name: 'Invite History', href:''},
  ]
  
  const user = useSelector(state => state.user.userDetails)
  const { username, role } = user


  return (
    <Menu className="profile text-normal">
      <div className="w-[70px] aspect-square flex-center-center bg-[#E1E1E180] rounded-[10px]">
        <User size={35} />
      </div>

      <p className="text-medium mt-[15px] mb-[5px]">
        {useTitleCase(username)}
      </p>
      
      <p className="text-dart text-small">
        {useTitleCase(role)}
      </p>

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