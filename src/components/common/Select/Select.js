import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

export default function Select({ current='', options }) {
  const [isShowDropdown, setShowDropdown] = useState(false)
  const toggleDropdown = () => setShowDropdown(!isShowDropdown)
  const [currentSelection, setCurrentSelection] = useState(current)

  const handleSelect = event => {
    setCurrentSelection(event.target.textContent)
  }

  const filteredOptions = options.filter(option => option !== currentSelection)
  return (
    <div
      onClick={toggleDropdown}
      className="relative select-none min-w-[100px] bg-ecx-white"
    >
      <div className={`border border-[#E1E1E1] rounded-[5px] flex items-center justify-between gap-[6px] px-[10px] py-0.5 text-small cursor-pointer hover:bg-[#E1E1E1] transition-all ${isShowDropdown ? 'rounded-b-none' : ''} `}>
        <span className="">{currentSelection}</span>
        {
          isShowDropdown ? (
            <ArrowUp2 size={15} />
          ) : (
            <ArrowDown2 size={15} />
          )
        }
      </div>


      {
        isShowDropdown && filteredOptions.length ? (
          <div className="absolute left-0 top-full shadow w-full py-1 bg-white gap-1 flex flex-col text-small">
            {
              filteredOptions
              .map((content, index) => (
                <span
                  key={index}
                  onClick={handleSelect}
                  className="hover:bg-[#E1E1E180] cursor-pointer transition-all px-[10px]"
                >{content}</span>
              ))
            }
          </div>
        ) : null
      }
    </div>
  )
}