"use client"
import "./Header.css"
import { useState } from "react";
import { ArrowLeft2, HambergerMenu, SearchNormal1, User } from "iconsax-react";

import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";

import PopUpMenu from "./PopUpMenu";
import ProfileMenu from "./ProfileMenu";
import Searchbar from "./Searchbar";
import SearchMenu from "./SearchMenu";
import SearchNavigation from "./SearchNavigation";
import Link from "next/link";



export default function Header() {
  // Bug when I tried to do: const [[state setState], [state, setState], ...] = Array(3).fill(useState(false))
  const [isDisplayPopUp, setDisplayPopUp] = useState(false)
  const [isDisplayProfile, setDisplayProfile] = useState(false)
  const [isSearchState, setSearchState] = useState(false)
  const [searchField, setSearchField] = useState('')

  const handleSearchInput = ({ target }) => setSearchField(target.value)
  const clearSearchInput = () => setSearchField('')
  
  const clearAllModals = () => {
    setDisplayPopUp(false)
    setDisplayProfile(false)
    setSearchState(false)
  }
  
  const toggleDisplayPopUp = () => {
    clearAllModals()
    setDisplayPopUp(!isDisplayPopUp)
  }
  
  const toggleDisplayProfile = () => {
    clearAllModals()
    setDisplayProfile(!isDisplayProfile)
  }
  
  const toggleSearchState = () => {
    clearAllModals()
    setSearchState(!isSearchState)
  }

  // Check if any modal is displaying, to handle the Logo
  const isModalDisplaying = isDisplayPopUp || isDisplayProfile


  return (
    <header className={`header ${isModalDisplaying ? '!px-[30px]' : ''}`}>
      {
        isDisplayPopUp || isDisplayProfile || isSearchState ? (
          <button onClick={clearAllModals}><ArrowLeft2 size={20} /></button>
        ) : <Logo />
      }
      
      <div className="hidden lg:flex col-span-3 justify-between items-center whitespace-nowrap gap-x-10">
        <Searchbar />

        <div className="flex gap-x-9">
          <div className="row-span-2 bg-[#E1E1E180] w-[40px] aspect-square rounded-[10px] flex items-center justify-center ">
            <User size="20"  />
          </div>

          <Link href="">
            <Button variant="ruby" icon="people" className="w-[170px]">Invite Admin</Button>
          </Link>

        </div>
      </div>

      <div className="lg:hidden flex items-center space-x-[28px]">
        {
          !isSearchState ? (
            <>
              <User size="20" onClick={toggleDisplayProfile} className={`${isDisplayProfile ? "hidden" : ""}`} />
              <SearchNormal1 onClick={toggleSearchState} size="18" />
              <HambergerMenu onClick={toggleDisplayPopUp} size="20"  />
            </>
          ) : (
            <SearchNavigation
              toggleSearchState={toggleSearchState} 
              clearSearchInput={clearSearchInput} 
              searchField={searchField} 
              handleSearchInput={handleSearchInput}
            />
          )
        }
      </div>

      {!isSearchState ? null :
        <SearchMenu value={searchField} searchField={searchField} />
      }
      {!isDisplayPopUp ? null :
        <PopUpMenu />
      }
      {!isDisplayProfile ? null :
        <ProfileMenu />
      }
    </header>
  )
}