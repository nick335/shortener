import "./DashboardCard.scss"
import Link from "next/link"

import { Logout } from "iconsax-react"
import LinkClipArt from "@/components/common/LinkClipArt/LinkClipArt"


export default function DashboardCard() {
  const urlsCreated = 54
  const adminsInvited = 8
  const clicks = 403
  const shares = 89

  return (
    <div className="dahsboard-card w-full max-w-[450px] relative z-30">
      <LinkClipArt shrink className="-rotate-[28deg] -top-[55px] -left-[48px]  text-[140px] !z-[-1] absolute" variant="ruby" />

      <div className="dahsboard-card__content">
        <div className="charts-holder space-y-[10px] lg:space-y-[30px]">
          {/* <div className="chart-holder">
            <Image alt="pie-chart" src={pieChart} fill className="scale-150" />
          </div>
          <div className="chart-holder">
            <Image alt="pie-chart" src={barChart} fill className="scale-150" />
          </div> */}
        </div>

        <div className="dahsboard-card-figures">
          <div>
            <h6 className="urls">{urlsCreated}</h6>
            <div>URLs created</div>
          </div>
          <div>
            <h6 className="admins">{adminsInvited}</h6>
            <div>Admins invited</div>
          </div>
          <div>
            <h6 className="clicks">{clicks}</h6>
            <div>Clicks</div>
          </div>
          <div>
            <h6 className="shares">{shares}</h6>
            <div>Shares</div>
          </div>
        </div>
      </div>

      <Link href="" className="link-container">
        <span>Go to Dashboard</span>
        <Logout size="16" />
      </Link>
    </div>
  )
}