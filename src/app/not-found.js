"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "@/components/common/Button/Button"
import LandingNavigation from "@/components/layout/LandingNavigation/LandingNavigation"
import notFoundSvg from "@/icons/not-found.svg"


export default function NotFoundPage() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }
  return (
    <main className="relative">
      <LandingNavigation />

      <div className="pt-20 flex flex-col items-center gap-10">
        <Image alt="404" src={notFoundSvg} className="w-[300px]" priority />

        <h4>Page Not Found</h4>

        <Button onClick={handleClick}>
          Go back
        </Button>
      </div>
    </main>
  )
}
