import "./UrlsCard.scss"
import Link from "next/link"

import { ExportSquare } from "iconsax-react"
import UrlsCardRow from "./UrlsCardRow"
import Button from "../../Button/Button"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"

import { URLS_CREATED } from "@/constants/tempData"

export default function UrlsCard() {
  return (
    <div className="urls-card w-full bg-ecx-white rounded-[10px] max-w-[450px] lg:max-w-none relative">
      {/* <LinkClipArt className="w-[15%] -rotate-[50deg] -top-[62px] -left-[28px]  text-[140px] !z-[-1]" variant="swift" /> */}

      <div className="urls-card__content">
        <h6 className="pb-[15px]">URLs</h6>

        <div className="flex flex-col gap-y-5">
          {
            URLS_CREATED
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .slice(0, 3)
            .map(({...props}, index) => (
              <UrlsCardRow key={index} {...props} />
            ))
          }
        </div>

        <Button icon="link" className="w-full my-[25px] lg:!mt-[35px] lg:!mb-[25px]">Create new URL</Button>

        <Link href="" className="flex items-center gap-x-[9px] text-third-blue text-[14px]">
          <span>Go to URLs</span>
          <ExportSquare size="15" />
        </Link>
      </div>
    </div>
  )
}