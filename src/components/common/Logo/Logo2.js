import Image from "next/image";
import logo from "@/assets/icons/ecx-logo.svg";



export default function Logo2() {
    return (
    //   <div className="flex justify-center items-center">
        <div className="!w-[134px] !h-[26px]">
            <Image src={logo} alt="logo"  className="" />
        </div>
    //    </div>  
    )
  }