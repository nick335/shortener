import { Category2, Home, Link1, User } from "iconsax-react"
import { useEffect } from "react"

export default function PopUpMenu() {
  useEffect(() => {
    document.body.style.overflow='hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])
  
  return (
    <div className="pop-up-menu">
      <div className="pop-up-link">
        <Home size={20} />
        <span>Home</span>
      </div>
      <div className="pop-up-link">
        <Category2 size={20} />
        <span>Dashboard</span>
      </div>
      <div className="pop-up-link">
        <Link1 size={20} />
        <span>URLs</span>
      </div>
      <div className="pop-up-link">
        <User size={20} />
        <span>Admins</span>
      </div>

      <hr />
      
      <div className="pop-up-link pop-up-link-logout">Log Out</div>
  </div>
  )
}
