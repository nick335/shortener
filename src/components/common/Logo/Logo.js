import Image from "next/image";
import logo from "@/icons/ecx-logo.svg";


export default function Logo({ className="" }) {
  return (
    <div className={`logo-container relative !w-[134px] !h-[26px] ${className}`}>
      <Image src={logo} alt="logo" fill priority />
    </div>  
  )
}