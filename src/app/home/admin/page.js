"use client"
import Button from "@/components/common/Button/Button";
import { User, ArrowSwapVertical } from "iconsax-react";
import AdminDataRow from "@/components/admins/AdminDataRow";


export default function AdminPage(){
    
    return(
        <div>

            <div className="flex lg:hidden items-center gap-x-4 mx-auto px-[10px] max-w-[400px] mb-[30px]">
            <Button variant="ruby" icon="people">Invite Admin</Button>
            </div>

            {/* @Seun-A you can uncomment this line to test the sticky header out, it doesn't look so good */}
            {/* <div className="border border-[#E1E1E180] sticky top-0 rounded-tr-lg rounded tl-lg  px-6 py-2 lg:border-none lg:bg-[#E1E1E180] grid grid-cols-4"> */}
            <div className="border border-[#E1E1E180] rounded-tr-lg rounded tl-lg  px-6 py-2 lg:border-none lg:bg-[#E1E1E180] grid grid-cols-4">
              <div>Admin</div>
              <div></div>
              <div className="whitespace-nowrap flex gap-[5px] flex justify-center items-center">
                Date Modified 
              <span>
                <ArrowSwapVertical className="m-[2px] sm:w-[3px] md:w-[14px] lg:w-[18px]"/>
              </span>
              </div>
              <div></div>
             </div>

             <div className="bg-ecx-white grid grid-cols-4 mt-[10px] px-6 py-2">
                <div> 
                 <button className=" w-[30px] h-[30px] aspect-square rounded-full mt-1 flex items-center justify-center">
                     <User size="18"/>
                 </button>
                </div>
                <div className="text-dart whitespace-nowrap">Super Admin(You)</div>
                <div></div>
                <div></div>
             </div>
        
        <AdminDataRow number={1}/>
        <AdminDataRow number={2}/>
        <AdminDataRow number={3}/>
        <AdminDataRow number={4}/>
        <AdminDataRow number={5}/>
        <AdminDataRow number={6}/>
        <AdminDataRow number={7}/>
        <AdminDataRow number={8}/>
        <AdminDataRow number={9}/>
        <AdminDataRow number={10}/>
        <AdminDataRow number={11}/>

        </div>
    )
}