"use client"

import { Link1, MouseCircle, Profile2User, Send2 } from "iconsax-react"
import { URLS_CREATED, ADMINS, URL_CLICKS, URL_SHARES } from "@/constants/tempData";
import { BarChart__Variable, LineChart__Variable } from "@/components/common/charts/charts";
import Select from "@/components/common/Select/Select";


export default function DashboardPage() {
  return (
    <div className="dashboard-page flex flex-col gap-[30px]">
      <h6 className="font-varela-round">Dashboard</h6>

      <div className="space-y-[20px]">
        <div className="flex gap-[10px]">
          <Select current="Everyone" options={["Everyone"]} />
          <Select current="This Month" options={["This Month", "All Time"]} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-ecx-grey text-small">
          <div className="rounded-[5px] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] flex items-center py-[10px] pe-3 ps-5 gap-3">
            <Link1 size={30} className="-rotate-[50deg]" />

            <div className="flex-center-center flex-col gap-[10px] grow aspect-[2]">
              <span>URLs created</span>
              <h5 className="text-dart">{URLS_CREATED.length}</h5>
            </div>
          </div>

          <div className="rounded-[5px] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] flex items-center py-[10px] pe-3 ps-5 gap-3">
            <Profile2User size={30} />

            <div className="flex-center-center flex-col gap-[10px] grow aspect-[2]">
              <span>Admins invited</span>
              <h5 className="text-ecx-black">{ADMINS.length}</h5>
            </div>
          </div>

          <div className="rounded-[5px] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] flex items-center py-[10px] pe-3 ps-5 gap-3">
            <MouseCircle size={30} />

            <div className="flex-center-center flex-col gap-[10px] grow aspect-[2]">
              <span>URL Clicks</span>
              <h5 className="text-swift">{URL_CLICKS.length}</h5>
            </div>
          </div>

          <div className="rounded-[5px] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] flex items-center py-[10px] pe-3 ps-5 gap-3">
            <Send2 size={30} />

            <div className="flex-center-center flex-col gap-[10px] grow aspect-[2]">
              <span>URL Shares</span>
              <h5 className="text-ruby">{URL_SHARES.length}</h5>
            </div>
          </div>
        </div>
      </div>



      <LineChart__Variable />

      <BarChart__Variable />
    </div>
  )
}