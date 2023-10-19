'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "@/components/common/Logo/Logo";
import { CloseCircle } from "iconsax-react";
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt";


export default function Modal({
  children,
  title = '',
  subtitle = ''
}) {
  const router = useRouter();

  const closeModal = () => {
    router.push("/")
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    
    return (() => {
      document.body.style.removeProperty("overflow")
    })
  })


  return (
    <div className="modal-bg fixed inset-0 flex justify-center items-center z-30 bg-ecx-grey/50">
      <div className="modal relative w-[90%] h-[48%] max-w-[390px] lg:max-w-[670px] max-h-[520px] lg:max-h-[670px] px-6 py-8 bg-white rounded-[24px] flex flex-col items-center gap-[36px] overflow-hidden">
        <LinkClipArt size={96} className="-top-4 -left-6 -rotate-[28deg]" variant="swift" />
        <LinkClipArt size={96} className="bottom-4 -right-6 -rotate-[28deg]" />

        <CloseCircle onClick={closeModal} size={32} className="cursor-pointer transform transition-all hover:scale-110 absolute top-3 right-4" />

        <Logo className="lg:scale-[1.25]" />

        <div className="mb-0.5 flex flex-col items-center gap-3">
          <h5>{ title }</h5>

          {
            !subtitle ? null : (
              <p className="text-small">{subtitle}</p>
              )
            }
        </div>

        <form className="grow overflow-scroll w-full max-w-[300px] lg:max-w-[440px] transition-all">
          { children }
        </form>
      </div>
    </div>
  )
}