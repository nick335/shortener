import { useSelector } from "react-redux";
import { Link1, MouseCircle, Profile2User, Send2 } from "iconsax-react";


export default function DashboardInfoCard({
  variant = '', // urls, admins, clicks, shares 
}) {
  const admins = useSelector(state => state.admins)
  const urlsCreated = useSelector(state => state.urlsDemo.urlsCreated)
  const urlClicks = useSelector(state => state.urlsDemo.urlClicks)
  const urlShares = useSelector(state => state.urlsDemo.urlShares)

  const textColor = 
    variant === "urls" ? "text-dart" : 
    variant === "admins" ? "text-ecx-black" : 
    variant === "clicks" ? "text-swift" : 
    variant === "shares" ? "text-ruby"
  : ""
  
  const cardTitle = 
    variant === "urls" ? "URLs Created" : 
    variant === "admins" ? "Admins Invited" : 
    variant === "clicks" ? "URL Clicks" : 
    variant === "shares" ? "URL Shares"
  : ""
  
  const cardData = 
    variant === "admins" ? admins : 
    variant === "urls" ? urlsCreated : 
    variant === "clicks" ? urlClicks : 
    variant === "shares" ? urlShares
  : null
  
  const cardIcon =
    variant === "urls" ? <Link1 size={30} className="-rotate-[50deg]" /> : 
    variant === "admins" ? <Profile2User size={30} /> : 
    variant === "clicks" ? <MouseCircle size={30} /> : 
    variant === "shares" ? <Send2 size={30} />
  : null


  return (
    <div className="rounded-[5px] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] flex items-center py-[10px] pe-3 ps-5 gap-3 bg-ecx-white">
      {cardIcon}

      <div className="flex-center-center flex-col gap-[10px] grow aspect-[2] text-center">
        <span>{cardTitle}</span>
        <h5 className={textColor}>{cardData.length}</h5>
      </div>
    </div>
  )
}