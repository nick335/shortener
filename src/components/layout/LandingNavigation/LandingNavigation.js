"use client"
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";
import { useDispatch } from "react-redux";
import { Login } from "@/app/redux/features/user/userSlice";


export default function LandingNavigation() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(Login())
  }

  return (
    <header className="landing-navigation sticky top-0 bg-white px-6 pt-[25px] md:px-20 pb-[15px] lg:px-40 md:pt-10 md:pb-[30px] flex justify-center md:justify-between items-center z-20"
    >
      <Link href="/">
        <Logo />
      </Link>
      
      <div href="" className="hidden md:flex w-[150px]">
        <Button onClick={handleClick}>Login</Button>
      </div>
    </header>
  )
}