"use client"
import { More, User } from "iconsax-react"


export default function AdminsCardRow({ name }) {
  return (
    <div className="urls-card__row flex items-center gap-x-[15px] hover:bg-[#E1E1E120] py-[10px] cursor-pointer transition-all duration-200 ps-[18px]">
      <User size="20"/>

      <div className="text-small text-start grow flex flex-col h-full truncate w-max">
        <p className="truncate w-full">{name}</p>
      </div>

      <button className="hover:brightness-105 transition-all duration-200 rotate-90 text-xs">
        <More className="rotate-90" size={20} />
      </button>
    </div>
  )
}