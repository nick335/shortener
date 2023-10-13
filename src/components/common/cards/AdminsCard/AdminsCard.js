import "./AdminsCard.css"
import Link from "next/link"

import { ExportSquare } from "iconsax-react"
import AdminsCardRow from "./AdminsCardRow"
import Button from "../../Button/Button"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"

import { ADMINS } from "@/constants/tempData"


export default function AdminsCard() {
  return (
    <div className="admins-card w-full lg:break-before-column bg-ecx-white rounded-[10px] max-w-[450px] lg:max-w-[350px] grow basis-full relative">
      {/* <LinkClipArt className="-rotate-[50deg] -top-[55px] -left-[48px]  text-[140px] !z-[-1] absolute" variant="ruby" /> */}

      <h6 className="pb-[15px] !font-varela-round">Admins</h6>

      <div className="flex flex-col justify-between text-center gap-[15px]">
        {
          ADMINS
          .sort((a, b) => {
            return b.dateJoined - a.dateJoined;
          })
          .slice(0, 3)
          .map(({ ...props }, i) => (
            <AdminsCardRow key={i} {...props} />
          ))
        }
      </div>

      <Button variant="ruby" icon="people" className="w-full my-[25px] lg:!mt-[35px] lg:!mb-[25px]">Invite Admin</Button>

      <Link href="" className="flex items-center gap-x-[9px] text-third-blue text-[14px]">
        <span>Go to Admins</span>
        <ExportSquare size="16" />
      </Link>
    </div>
  )
}