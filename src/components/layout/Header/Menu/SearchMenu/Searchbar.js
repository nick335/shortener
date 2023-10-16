"use client"
import './Searchbar.css'
import { ArrowLeft2, CloseCircle, SearchNormal1 } from "iconsax-react";
import { useRef } from "react";

export default function Searchbar({
  value,
  onChange,
  clear,
  hideSearchbar,
  ...props
}) {
  const input = useRef(null)

  const handleClear = () => {
    input.current.focus()
    clear()
  }


  return (
    <div className="searchbar-container">
      <SearchNormal1 size="18" className="hidden lg:block" />
      <ArrowLeft2 onClick={hideSearchbar} size={20} className="lg:hidden text-ecx-black" />

      <input
        ref={input}
        className="search-input"
        placeholder="Search"
        value={value}
        onChange={onChange}
        {...props}
      />
      
      {
        value ? (
          <CloseCircle size={20} onClick={handleClear} />
        ) : null
      }
    </div>
  )
}