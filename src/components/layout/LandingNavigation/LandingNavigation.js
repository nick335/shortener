"use client"
import Link from "next/link";
import { User, HambergerMenu } from "iconsax-react";
import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";


export default function LandingNavigation() {
  return (
    <header className="landing-navigation sticky top-0 bg-white px-6 pt-[25px] pb-[15px] lg:px-40 lg:pt-10 lg:pb-[30px] flex justify-between items-center"
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex lg:hidden items-center gap-7">
        <Link href="" className="link">
          <User size="18" />
        </Link>          
        <Link href="" className="link">
          <HambergerMenu size="22" />
        </Link>          
      </div>
      
      <div className="hidden lg:flex gap-[35px] [&>*]:w-[150px]">
        <Link href="login">
          <Button>Sign Up</Button>
        </Link>
        <Link href="/?auth=login">
          <Button variant="ruby">Login</Button>
        </Link>
      </div>
    </header>
  )
}