'use client'
import { CloseCircle } from "iconsax-react";
import { useRouter } from "next/navigation";
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"



export default function Modal({ children }){
    const router = useRouter();

    const closeModal = () =>{
        router.push("/")
    }
    return(
        <div className="fixed inset-0 flex justify-center items-center z-1 bg-[#E1E1E180]">
        <div className="w-[300px] lg:w-[600px] px-6 py-8 bg-white rounded-[24px] shadow-lg h-[450px]  lg:h-[500px] relative">

      <LinkClipArt shrink className="-rotate-[28deg] -top-[55px] -left-[48px]  text-[140px] z-[2] " variant="swift" />
        <div className="flex flex-col justify-end items-end absolute top-3 right-4">
        <CloseCircle onClick={closeModal} size={32} className="cursor-pointer transform transition-all hover:scale-110" />
        </div>
            {children}
      <LinkClipArt shrink className="-rotate-[28deg] -bottom-[55px] -right-[48px]  text-[140px] z-[2] " variant="dart" />
        </div>
        
        </div>
    )
}