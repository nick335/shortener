import "./AdminsCard.scss"
import Link from "next/link"

import { Logout } from "iconsax-react"
import AdminsCardRow from "./AdminsCardRow"
import Button from "../../Button/Button"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"



export default function AdminsCard() {
  return (
    <div className="admins-card w-full lg:break-before-column bg-ecx-white rounded-[10px] max-w-[450px] lg:max-w-[350px] grow basis-full relative z-30">
      <LinkClipArt className="-rotate-[28deg] -top-[95px] -left-[48px]  text-[140px] !z-[-1] absolute" variant="swift" />

      <h6 className="pb-[15px]">Admins</h6>

      <div className="admins-card__content flex flex-col">
        {
          Array(3).fill("").map((e, i) => (
            <AdminsCardRow key={i} name="Admin 1" />
          ))
        }
      </div>

      <Button variant="ruby" icon="people" className="w-full my-[25px] lg:!mt-[35px] lg:!mb-[25px]">Invite Admin</Button>

      <Link href="r" className="link-container">
        <span>Go to Admins</span>
        <Logout size="16" />
      </Link>
    </div>
  )
}