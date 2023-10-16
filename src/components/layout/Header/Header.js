"use client"
import "./Header.css"
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showInviteAdminPopUp } from "@/app/redux/features/inviteAdmin/inviteAdminSlice";
import { ArrowLeft2, HambergerMenu, SearchNormal1, User } from "iconsax-react";

import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";

import SearchNavigation from "./Menu/SearchMenu/SearchNavigation";
import SearchMenu from "./Menu/SearchMenu/SearchMenu";
import PopUpMenu from "./Menu/PopUpMenu/PopUpMenu";
import ProfileMenu from "./Menu/ProfileMenu/ProfileMenu";
import Searchbar from "./Menu/SearchMenu/Searchbar";



export default function Header() {
  const dispatch = useDispatch()

  const handleDisplayInviteAdmin = () => {
    dispatch(showInviteAdminPopUp())
  }

  // Bug when I tried to do: const [headerState setHeaderState] = useState({isDisplayPopUp:false, ..., searchField:''})
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

  // Check if popup or profile is displaying, to handle the Logo
  const isModalDisplaying = isDisplayPopUp || isDisplayProfile

  return (
    <header className={`header ${isModalDisplaying ? '!ps-[30px]' : ''}`}>
      <Link href='/home'>
        <span className="hidden lg:block">
          <Logo />
        </span>
        
        <span className="lg:hidden">
          {
            isDisplayPopUp || isDisplayProfile || isSearchState ? (
              <button onClick={clearAllModals}><ArrowLeft2 size={20} /></button>
            ) : <Logo />
          }
        </span>
      </Link>
      

      {/* Larger screen display */}
      <div className="hidden lg:flex col-span-3 justify-between items-center whitespace-nowrap gap-x-16">
        <Searchbar
          value={searchField}
          onChange={handleSearchInput}
          clear={clearSearchInput}
        />

        <div className="flex gap-x-9">
          <div className="row-span-2 bg-[#E1E1E180] w-[40px] aspect-square rounded-[10px] flex items-center justify-center ">
            <User size="20" />
          </div>

          <Link href="">
            <Button
              variant="ruby"
              icon="people"
              className="w-[170px]"
              onClick={handleDisplayInviteAdmin}
            >
              Invite Admin
            </Button>
          </Link>
        </div>
      </div>


      {/* Smaller screen display */}
      <div className="lg:hidden flex items-center space-x-[28px] [&>*]:cursor-pointer">
        {
          !isSearchState ? (
            <>
              <User size="20" onClick={toggleDisplayProfile} className={`${isDisplayProfile ? "hidden" : ""}`} />
              <SearchNormal1 size="18" onClick={toggleSearchState} />
              <HambergerMenu size="20" onClick={toggleDisplayPopUp}  />
            </>
          ) : (
            <SearchNavigation
              value={searchField} 
              onChange={handleSearchInput}
              clear={clearSearchInput} 
              hideSearchbar={toggleSearchState} 
            />
          )
        }
      </div>

      {/* Menu Displays */}
      {!isSearchState ? null :
        <SearchMenu
          value={searchField}
          searchField={searchField}
          clearModals={clearAllModals}
        />
      }

      {!isDisplayPopUp ? null :
        <PopUpMenu clearModals={clearAllModals} />
      }

      {!isDisplayProfile ? null :
        <ProfileMenu clearModals={clearAllModals} />
      }
    </header>
  )
}