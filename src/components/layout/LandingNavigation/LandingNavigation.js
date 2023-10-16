"use client"
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";


export default function LandingNavigation() {
  return (
    <header className="landing-navigation sticky top-0 bg-white px-6 pt-[25px] md:px-20 pb-[15px] lg:px-40 md:pt-10 md:pb-[30px] flex justify-center md:justify-between items-center z-20"
    >
      <Link href="/">
        <Logo />
      </Link>
      
      <Link href="/?auth=login" className="hidden md:flex w-[150px]">
        <Button >Login</Button>
      </Link>
    </header>
  )
}