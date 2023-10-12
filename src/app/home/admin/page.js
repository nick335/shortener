"use client"
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import {User } from "iconsax-react";
import more from "@/assets/icons/more.svg"

export default function AdminPage(){
    const ArrayNumberOfUsers = [1,2,3,4,5,6,7,8,9,10,11]
    return(
        <div>
            <div className="flex lg:hidden items-center gap-x-4 mx-auto px-[10px] max-w-[400px] mb-[30px]">
            <Button variant="ruby" icon="people">Invite Admin</Button>
            </div>

            <table className="lg:w-[80%] lg:m-[auto] md:w-[80%] md:m-[auto] text-[10px] lg:text-[16px] md:text-[16px] divide-y-4 divide-slate-400/25  border-spacing-2">
                <thead className="mb-[20px] space-y-0 rounded-t-lg ">
                <tr className="bg-[#E1E1E180] rounded-t-lg ">
                    <td className="p-3">Admin</td>
                    <td className="p-3"></td>
                    <td className="p-3 whitespace-nowrap">Date Modified </td>
                    <td className="p-3"></td>
                </tr>
                </thead>

                <tbody className="gap-20 mt-4 rounded-tl-lg rounded-tr-lg">
                    <tr className="bg-ecx-white rounded-[4px] rounded-l-lg rounded-r-lg ">
                        <td className="p-3"> 
                            <button className=" w-[30px] h-[30px] aspect-square rounded-full mt-1 flex items-center justify-center">
                              <User size="18"/>
                            </button>
                        </td>
                        <td className="p-3 text-dart whitespace-nowrap">Super Admin(You)</td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                    </tr>
                </tbody>
            

        <tbody className="space-y-0 mt-4 rounded-lg">
            {ArrayNumberOfUsers.map((number, index) => (
              <tr key={index} className="bg-ecx-white mb-[10px] divide-y-4 divide-slate-400/25  rounded-l-lg rounded-r-lg">
                <td className="p-3">
                 <button className=" w-[30px] h-[30px] aspect-square rounded-full mt-1 flex items-center justify-center">
                  <User size="18"/>
                 </button>
                </td>
                <td className="p-3">Admin {number}</td>
                <td className="p-3">September 23, 2023</td>
                <td className="p-3">
                    <Image src={more} alt="three--dots"/>
                </td>
              </tr>
            ))}
        </tbody>
        </table>

        </div>
    )
}