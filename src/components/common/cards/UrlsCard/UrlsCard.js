import "./UrlsCard.scss"
import Link from "next/link"

import { Logout } from "iconsax-react"
import UrlsCardRow from "./UrlsCardRow"
import Button from "../../Button/Button"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"


export default function UrlsCard() {
  const data = [
    {
      title: "ECX Git", shortLink: "https://ecx.com/Bn4Olnxj", href: ""
    }, {
      title: "ECX Newsletter", shortLink: "https://ecx.com/Co5Pmoyk", href: ""
    }, {
      title: "ECX 30 Days of Code", shortLink: "https://ecx.com/Dp6Qnpzl", href: ""
    },
  ]

  return (
    <div className="urls-card w-full bg-ecx-white rounded-[10px] max-w-[450px] lg:max-w-none relative z-30">
      <LinkClipArt className="-rotate-[28deg] -top-[55px] -left-[48px]  text-[140px] !z-[-1] absolute" variant="dart" />

      <h6 className="pb-[15px]">URLs</h6>

      <div className="urls-card__content flex flex-col gap-y-5">
        {
          data.map(({...props}, index) => (
            <UrlsCardRow key={index} {...props} />
          ))
        }
      </div>

      <Button icon="link" className="w-full my-[25px] lg:!mt-[35px] lg:!mb-[25px]">Create new URL</Button>

      <Link href="" className="link-container">
        <span>Go to URLs</span>
        <Logout size="16" />
      </Link>
    </div>
  )
}