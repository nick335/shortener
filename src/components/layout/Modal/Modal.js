'use client'
// import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation";
import close from "@/assets/icons/close-circle.svg"
// import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"



export default function Modal({ children }){
    const router = useRouter();

    const closeModal = () =>{
        router.push("/")
    }
    return(
        <div className="fixed inset-0 flex justify-center items-center z-50 " scroll={false}>
        <div className="w-[300px] lg:w-[600px] p-8 bg-white rounded-[24px] shadow-lg h-[450px]  lg:h-[500px] relative">
        <div className="flex flex-col justify-end items-end" >
        <Image src={close} onClick={closeModal} alt="close-button"></Image>
        </div>
            {children}
        </div>
        </div>
    )
}