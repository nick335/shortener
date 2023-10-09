"use client"
import AdminsCard from "@/components/common/cards/AdminsCard/AdminsCard";
import Button from "@/components/common/Button/Button";
import DashboardCard from "@/components/common/cards/DashboardCard/DashboardCard";
import UrlsCard from "@/components/common/cards/UrlsCard/UrlsCard";


export default function HomePage() {
  return (
    <div className="homepage flex flex-wrap flex-col lg:block lg:columns-2 space-y-[30px] gap-x-[54px] items-center relative">
      <div className="flex lg:hidden items-center gap-x-4 mx-auto px-[10px] max-w-[400px]">
        <Button icon="link">Create new URL</Button>
        <Button variant="ruby" icon="people">Invite Admin</Button>
      </div>

      <DashboardCard />

      <UrlsCard />

      <AdminsCard />
    </div>
  )
}