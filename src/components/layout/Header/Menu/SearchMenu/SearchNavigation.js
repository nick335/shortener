import Searchbar from "./Searchbar";
import { Clock } from "iconsax-react";

export default function SearchNavigation({ ...props }) {
  return (
    <div className="absolute left-0 z-0 flex items-center gap-[10px] px-[25px] w-full bg-white">
      <Searchbar {...props} autoFocus />

      <Clock onClick={props.hideSearchbar} size={20} />
    </div>
  )
}