"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux";

import ForgotPassword from "@/app/auth/login/forgotPassword/page"
import Login from "@/app/auth/login/page"
import ResetPassword from "@/app/auth/login/forgotPassword/resetPassword/page"

import Button from "@/components/common/Button/Button"
import LandingNavigation from "@/components/layout/LandingNavigation/LandingNavigation"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"
import windowImg from "@/icons/landing-window.svg"


export default function LandingPage() {
  const searchParams = useSearchParams();

  const auth = searchParams.get('auth')
  const showLoginModal = auth === "login" ? true : false;
  const showForgotPasswordModal = auth === "forgotpassword" ? true : false;
  const showResetPasswordModal = auth === "resetpassword" ? true : false
  const router = useRouter()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/home')
    }
  })


  return (
    <main className="relative">
      <LandingNavigation />

      <section className="py-[108px] px-10 flex flex-col items-center text-center">
        <div className="h4 lg:h4 text-dart relative font-varela-round">
          URL Shortener

          <LinkClipArt size={56} variant="ruby" className="-rotate-[28deg] -top-[56px] lg:-top-[70px] -left-[57px] lg:-left-[180px] lg:scale-[2.5] aspect-square lg:text-[200px]" />
          <LinkClipArt variant="swift" size={25} className="!opacity-100 -rotate-[120deg] -top-[10px] lg:-top-[20px] -right-[28px] lg:-right-[40px] lg:scale-[2]" />
        </div>

        <p className="font-inter text-normal lg:text-large mt-[30px] mb-[40px] max-w-[40ch]">
          An efficient service to shorten and customize your lengthy links
        </p>

        <div className="w-[45vw] max-w-[320px] aspect-[1.72] relative">
          <Image fill priority src={windowImg} alt="window" />
          
          <LinkClipArt variant="dart" size={56} className="-rotate-[28deg] -top-[40px] lg:top-[10px] -right-[80px] lg:-right-[250px] lg:scale-[3.5]" />
        </div>

        <Link href="/?auth=login" className="w-full max-w-[300px] md:max-w-[500px] mt-[60px] mb-[45px] flex transition-all">
          <Button>Log In</Button>
        </Link>

        {showLoginModal && <Login />}
        {showForgotPasswordModal && <ForgotPassword />}
        {showResetPasswordModal && <ResetPassword />}
      </section>
    </main>
  )
}