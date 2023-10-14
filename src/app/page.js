"use client"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/common/Button/Button"
import LandingNavigation from "@/components/layout/LandingNavigation/LandingNavigation"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"
import windowImg from "@/assets/icons/landing-window.svg"


export default function LandingPage() {
  return (
    <main className="relative">
      <LandingNavigation />

      <section className="pt-[108px] px-10 flex flex-col items-center text-center">
        <div className="h4 lg:h4 text-dart relative">
          URL Shortener

          <LinkClipArt variant="ruby" className="-rotate-[28deg] -top-[56px] lg:-top-[140px] -left-[57px] lg:-left-[250px] text-[56px] aspect-square lg:text-[200px]" />
          <LinkClipArt variant="swift" className="!opacity-100 -rotate-[120deg] -top-[10px] lg:-top-[40px] -right-[28px] lg:-right-[55px] text-[25px] lg:text-[50px]" />
        </div>

        <p className="font-inter text-normal lg:text-large mt-[30px] mb-[40px] max-w-[40ch]">
          An efficient service to shorten and customize your lengthy links
        </p>

        <div className="w-[45vw] max-w-[320px] aspect-[1.72] relative">
          <Image fill src={windowImg} alt="window" />
          
          <LinkClipArt variant="dart" className="-rotate-[28deg] -top-[40px] lg:-top-[75px] -right-[80px] lg:-right-[350px] text-[56px] lg:text-[200px]" />
        </div>

        <Link href="login" className="w-full max-w-[300px] lg:max-w-[500px] mt-[60px] mb-[45px] flex transition-all">
          <Button>Sign Up</Button>
        </Link>

        <p className="text-small font-inter">
          <span>Already have an account?</span>&nbsp;
          <Link href="login" className="link link-dart" shallow>Log In</Link>
        </p>
      </section>
    </main>
  )
}