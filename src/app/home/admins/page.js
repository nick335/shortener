"use client"
import Button from "@/components/common/Button/Button";
import { User, ArrowSwapVertical } from "iconsax-react";
import AdminsTable from "../../../components/admins/AdminsTable";


export default function AdminsPage(){
  return (
    <div className="space-y-4 text-small">
      <div className="flex lg:hidden items-center gap-x-4 mx-auto px-[10px] max-w-[400px] mb-[30px]">
        <Button variant="ruby" icon="people">Invite Admin</Button>
      </div>

      <h6>Admins</h6>

      <div className="border g:border-none rounded-[10px] py-3 px-[30px] flex justify-between lg:bg-[#E1E1E180] lg:rounded-b-none lg:grid grid-cols-2">
        <span>Admin</span>

        <span className="flex justify-between items-center gap-[5px] lg:justify-start">
          <span>Date Joined</span>
          <ArrowSwapVertical size={20} />
        </span>
      </div>

      <AdminsTable />
    </div>
  )
}