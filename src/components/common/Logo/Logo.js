import Image from "next/image";
import logo from "@/icons/ecx-logo.svg";


export default function Logo() {
  return (
    <div className="logo-container relative !w-[134px] !h-[26px]">
      <Image src={logo} alt="logo" fill priority />
    </div>  
  )
}