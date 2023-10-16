import { User } from "iconsax-react";
import AdminToggleOptions from "./AdminToggleOptions";


export default function AdminDataRow({ number }){
  return (
    <div className="flex justify-between lg:grid grid-cols-2 px-[10px] py-2 lg:py-5 lg:ps-[25px] lg:pe-5 bg-ecx-white transition-all">
      <div className="flex gap-[15px] lg:gap-[30px] items-center">
        <User size={20} />
        <span>Admin {number}</span>
      </div>

      <div className="flex gap-7 items-center lg:justify-between">
        <span className="hidden lg:block">September 23, 2023</span>
        <span className="lg:hidden">23-Sept-23</span>

        <button className="cursor-pointer outline-none relative"> 
          <AdminToggleOptions/>
        </button>
      </div>
    </div>
  )
}