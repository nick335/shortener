"use client"
import Link from "next/link"
import "./AdminsCard.scss"
import { Copy, Link1, User } from "iconsax-react"


export default function AdminsCardRow({ name, shortLink, href }) {
  return (
    <div className="urls-card__row flex items-center gap-x-[15px] hover:bg-[#E1E1E120] py-[10px] cursor-pointer transition-all duration-200 px-[5px]">
      <button className="bg-[#E1E1E180] w-[30px] h-[30px] aspect-square rounded-full mt-1 flex items-center justify-center">
        <User size="18"/>
      </button>

      <div className="text-small text-start grow flex flex-col h-full truncate w-max">
        <p className="truncate w-full">{name}</p>
      </div>

      <button className="hover:brightness-105 transition-all duration-200 rotate-90 text-xs">
        •••
      </button>
    </div>
  )
}