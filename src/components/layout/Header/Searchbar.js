"use client"
import { SearchNormal1 } from "iconsax-react";

export default function Searchbar() {
  return (
    <div className="w-[300px] ps-5 pe-2 bg-[#E1E1E1]/50 text-[#424242] h-[45px] rounded-[10px] flex items-center gap-x-4">
      <SearchNormal1 size="18" />
      
      <input
        className="grow bg-transparent placeholder:font-light placeholder:text-[#919191] outline-none"
        placeholder="Search"
      />
    </div>
  )
}