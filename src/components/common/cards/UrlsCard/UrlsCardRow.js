"use client"
import Link from "next/link"
import "./UrlsCard.scss"
import { Copy, Link1 } from "iconsax-react"


export default function UrlsCardRow({ title, shortLink, href }) {
  return (
    <div className="urls-card__row flex items-start gap-x-[10px]">
      <div className="pt-px aspect-square w-[21px]">
        <Link1 size="21" />
      </div>

      <div className="text-small text-start grow flex flex-col h-full truncate w-max">
        <p className="truncate w-full">{title}</p>
        <Link href={href} className="text-dart truncate">{shortLink}</Link>
      </div>


      <button className="bg-[#E1E1E180] hover:brightness-105 transition-all duration-200 w-[30px] h-[30px] aspect-square rounded-[5px] mt-1 flex items-center justify-center">
        <Copy size="15"/>
      </button>
    </div>
  )
}