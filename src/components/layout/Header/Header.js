"use client"
import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";
import Searchbar from "./Searchbar";
import { HambergerMenu, SearchNormal1, User } from "iconsax-react";

export default function Header() {
  return (
    <header className={`
      header z-20 sticky top-0 bg-white font-inter
      px-6 pt-[25px] pb-[15px] lg:px-40 lg:pt-10 lg:pb-[30px]
      flex justify-between items-center lg:grid lg:grid-cols-4
      lg:shadow-[0_4px_15px_0_rgba(0,0,0,0.10)]
    `}>
      <Logo />

      <div className="hidden lg:flex col-span-3 justify-between items-center whitespace-nowrap gap-x-10">
        <Searchbar />

        <div className="flex gap-x-9">
          <div className="grid grid-rows-2 grid-flow-col text-ecx-black items-center gap-x-[15px] text-[14px]">
            <div className="row-span-2 bg-[#E1E1E180] w-[35px] aspect-square rounded-full flex items-center justify-center ">
              <User size="20"  />
            </div>
            <div className="">
              Name
            </div>
            <div className="text-ecx-grey">
              Super Admin
            </div>
          </div>

          <Button variant="ruby" icon="people">Invite Admin</Button>
        </div>
      </div>

      <div className="lg:hidden flex items-center space-x-[28px]">
        <SearchNormal1 size="18" />
        <User size="20"  />
        <HambergerMenu size="20"  />
      </div>
    </header>
  )
}