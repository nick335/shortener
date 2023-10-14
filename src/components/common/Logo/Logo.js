import Image from "next/image";
import logo from "@/assets/icons/ecx-logo.svg";


export default function Logo({ className="" }) {
  return (
    <div className={`logo-container relative !w-[134px] !h-[26px] ${className}`}>
      <Image src={logo} alt="logo" fill className="" />
    </div>  
  )
}