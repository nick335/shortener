import "./Select.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowDown2, ArrowUp2, Candle } from "iconsax-react";


export default function Select({
  variant='admins', // admins || time
}) {
  const admins = useSelector(state => state.admins)
  
  const options = variant === 'admins' ? (
   ["Everyone"].concat(admins.map(admin => admin.name))
  ) : (
    ["All Time", "This Week", "This Month", "This Year"]
  )
  
  const [currentSelection, setCurrentSelection] = useState(options[0])
  const [isShowDropdown, setShowDropdown] = useState(false)
  
  const filteredOptions = options.filter(option => option !== currentSelection)
  
  const toggleDropdown = () => setShowDropdown(!isShowDropdown)

  const handleSelect = event => {
    setCurrentSelection(event.target.textContent)
  }


  return (
    <div
      onClick={toggleDropdown}
      onMouseLeave={() => setShowDropdown(false)}
      className="select-container relative select-none min-w-[100px] bg-ecx-white"
    >
      <div className={`select ${isShowDropdown ? 'rounded-b-none' : ''}`}>
        <span>{currentSelection}</span>

        {
          isShowDropdown ? (
            <ArrowUp2 size={15} />
          ) : (
            <ArrowDown2 size={15} />
          )
        }
      </div>

      {
        isShowDropdown ? (
          <div className="select-dropdown">
            <span className="select-item text-dart">
              {currentSelection}
            </span>

            {filteredOptions.map((content, index) => (
              <span
                key={index}
                onClick={handleSelect}
                className="select-item"
              >{content}</span>
            ))}

            <span className="select-item">
              <span>Custom</span>
              <Candle size={15} />
            </span>
          </div>
        ) : null
      }
    </div>
  )
}