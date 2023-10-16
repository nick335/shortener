import Link from "next/link"
import { useState } from "react";
import Copied from "@/components/common/pop-ups/Copied";
import { Copy, Link1 } from "iconsax-react"


export default function UrlRow({ name, shortLink, href }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleHideCopy = () => {
    setIsCopied(false)
    navigator.clipboard.writeText(shortLink)
  }

  const handleCopyClick = () => {
    setIsCopied(true)
  }

  return (
    <div className="flex items-start gap-2.5">
      <div className="pt-px aspect-square w-[21px]">
        <Link1 size="20" className="text-swift" />
      </div>

      <div className="text-small text-start grow flex flex-col h-full truncate w-max">
        <p className="truncate w-full">{name}</p>
        <Link href={href} className="link w-fit text-dart truncate">{shortLink}</Link>
      </div>

      <div className="relative">
        {
          isCopied ? (
            <Copied onUnmount={handleHideCopy} visible={isCopied} />
          ) : (
            <button
              className="bg-[#E1E1E150] hover:brightness-90 transition-all w-[30px] aspect-square rounded-[5px] mt-1 flex-center-center"
              onClick={handleCopyClick}
            >
              <Copy size="15"/>
            </button>
          )
        }
      </div>
    </div>
  )
}