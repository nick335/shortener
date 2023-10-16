"use client"
import DashboardInfoCard from "@/components/common/cards/DashboardDataCard/DashboardDataCard";
import Select from "@/components/common/Select/Select";

import DashboardChart from "@/components/common/DashboardChart/DashboardChart";


export default function DashboardPage() {
  const cards = ["urls", "admins", "clicks", "shares"]


  return (
    <div className="dashboard-page flex flex-col gap-[30px]">
      <h6 className="lg:hidden">Dashboard</h6>

      <div className="space-y-5">
        <div className="flex gap-2.5">
          <Select variant="admins" />
          <Select variant="time" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-ecx-grey text-small">
          {
            cards.map((variant, index) => (
              <DashboardInfoCard key={index} variant={variant} />
            ))
          }
        </div>
      </div>

      <DashboardChart
        shadow
        select
        variant="line"
        labels={["1w", "2w", "3w", "1m", ""]}
      />

      <DashboardChart
        shadow
        select
        variant="bar"
        title="Link Performance"
        labels={["3m", "6m", "9m", "1y"]}
      />
    </div>
  )
}