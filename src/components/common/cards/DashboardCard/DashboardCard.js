import "./DashboardCard.css"
import Link from "next/link"

import { ExportSquare } from "iconsax-react"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"
import { BarChart } from "@/components/common/charts/charts"
import { useRouter } from "next/navigation"


export default function DashboardCard() {
  const router = useRouter()
  const handleNavigate = () => router.push('/home/dashboard')
  return (
    <Link href="home/dashboard" onClick={handleNavigate} className="dahsboard-card w-full max-w-[450px] relative">
      {/* <LinkClipArt className="-rotate-[28deg] -top-[55px] -left-[48px]  text-[140px] !z-[-1] absolute" variant="ruby" /> */}

      <BarChart />

      <div className="link flex items-center gap-x-[9px] text-third-blue text-[14px]">
        <span>Go to Dashboard</span>
        <ExportSquare size="15" />
      </div>
    </Link>
  )
}