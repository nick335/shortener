"use client"
import { useState } from "react";
import { More, User } from "iconsax-react"
import AdminOptions from "@/components/common/pop-ups/AdminOptions";

export default function AdminsCardRow({ name }) {
  const [isShowOptions, setIsShowOptions] = useState(false)

  const handleShowOptions = () => {
    setIsShowOptions(true)
  }

  const handleHideOptions = () => {
    setIsShowOptions(false)
  }

  return (
    <div className="flex items-center gap-5 ps-[18px] py-[10px] relative">
      <User size="20"/>

      <div className="text-small text-start grow flex flex-col h-full truncate w-max">
        <p className="truncate w-full">{name}</p>
      </div>

      <div>
        {
          isShowOptions ? (
            <AdminOptions hide={handleHideOptions} />
          ) : (
            <button
              onClick={handleShowOptions}
              className="absolute right-0 top-1 hover:bg-[#E1E1E150] transition-all duration-200 rotate-90 text-xs p-1 rounded"
            >
              <More className="rotate-90" size={20} />
            </button>
          )
        }
      </div>
    </div>
  )
}