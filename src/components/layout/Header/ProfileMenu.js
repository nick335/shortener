import { Clock, Profile2User, User } from "iconsax-react"
import { useEffect } from "react"

export default function ProfileMenu() {
  useEffect(() => {
    document.body.style.overflow='hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])
  
  return (
    <div className="profile text-normal">
      <div className="w-[70px] aspect-square flex-center-center bg-[#E1E1E180] rounded-[10px]">
        <User size={35} />
      </div>
      <p className="text-medium mt-[15px] mb-[5px]">Ifihanagbara Oluseye</p>
      <p className="text-dart text-small">Super Admin</p>

      <hr className="mt-[30px] mb-[20px]" />

      <div className="flex flex-col gap-[23px]">
        <div className="profile-link">
          <Clock size={20} />
          <span>Search history</span>
        </div>

        <div className="profile-link">
          <Profile2User size={20} />
          <span>Invite history</span>
        </div>
      </div>
    </div>
  )
}