import "./HomeCard.css"
import Link from "next/link"
import LinkClipArt from "../../LinkClipArt/LinkClipArt"
import { ExportSquare } from "iconsax-react"

export default function HomeCard({
  goTo = '',
  clipArtVariant = 'dart',
  className='',
  children
}) {

  return (
    <div className={`home-card-container ${className}`}>
      <div className="home-card z-[2] relative flex flex-col">
        <h6>{goTo}</h6>

        {children}

        <Link href={`/home/${goTo.toLowerCase()}`} className="link flex items-center gap-x-[9px] text-third-blue text-[14px]">
          <span>Go to {goTo}</span>
          <ExportSquare size="15" />
        </Link>
      </div>

      <LinkClipArt
        size={60}
        variant={clipArtVariant}
        className="!opacity-50 -rotate-[50deg] -top-[23px] -left-[24px] lg:-top-[15px] lg:-left-[18px]  z-[-1] lg:z-[1] lg:scale-150"
      />
    </div>

  )
}