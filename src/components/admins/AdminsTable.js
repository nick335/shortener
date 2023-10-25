import { User } from "iconsax-react";
import AdminDataRow from "./AdminDataRow";

export default function AdminsTable() {
  return (
    <div className="font-inter space-y-[10px]">
      <div className="flex items-center gap-[15px] lg:gap-[30px] py-[10px] lg:py-5 px-[10px] lg:ps-[25px] lg:pe-5 bg-ecx-white">
        <User size={20} />
        <span className="text-dart">Super Admin (You)</span>
      </div>

      {
        Array(12).fill('').map((e, i) => (
          <AdminDataRow key={i} number={i+1} />
        ))
      }
    </div>
  )
}