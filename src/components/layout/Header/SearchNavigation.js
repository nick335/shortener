import { ArrowLeft2, Clock, CloseCircle } from "iconsax-react";
import { useRef } from "react";

export default function SearchNavigation({
  toggleSearchState,
  clearSearchInput,
  searchField,
  handleSearchInput
}) {
  
  const input = useRef(null)

  const handleClear = () => {
    input.current.focus()
    clearSearchInput()
  }

  return (
    <div className="absolute left-0 z-0 flex items-center gap-[10px] px-[25px] w-full bg-white">
      <div className="bg-[#E1E1E180] px-[10px] py-2 rounded-[5px] grow flex gap-[5px] items-center">
        <ArrowLeft2 onClick={toggleSearchState} size={20} />

        <input
          ref={input}
          className="input grow bg-transparent outline-none text-small"
          placeholder="Search..."
          autoFocus
          value={searchField}
          onChange={handleSearchInput}
        />
        {
          searchField ? (
            <CloseCircle size={20} onClick={handleClear} />
          ) : null
        }
      </div>
      
      <Clock size={20} />
    </div>
  )
}