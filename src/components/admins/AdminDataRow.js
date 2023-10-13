import {User } from "iconsax-react";
import AdminToggleOptions from "./AdminToggleOptions";


export default function AdminDataRow({number}){
  return(
    <>
    <div className="grid grid-cols-4 bg-ecx-white mt-[10px] px-6 py-2">
        <div>
        <button className=" w-[30px] h-[30px] aspect-square rounded-full mt-1 flex items-center justify-center">
              <User size="18"/>
        </button>
        </div>
        <div>
            <p>Admin {number}</p>
        </div>
        <div>
            <p className="text-center lg:hidden">23-sept-23</p>
            <span className="text-center hidden lg:block"> 23 September, 2023</span> 
        </div>
        <div className="cursor-pointer relative ml-auto"> 
            <AdminToggleOptions/>
        </div>
    </div>
    </>
  )
}