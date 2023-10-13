import { ExportSquare, Link1, Profile2User } from "iconsax-react";
import { useEffect, useRef } from "react";

export default function SearchMenuItem({ variant, name, searchField }) {
  const span = useRef(null)

  useEffect(() => {
    if (searchField) {
      let re = new RegExp(searchField, "g");
      let newText = name.replace(re, `<mark>${searchField}</mark>`);
      span.current.innerHTML = newText
    }
  }, [name, searchField])


  return (
    <div className="flex items-center gap-[9px]">
      {
        variant === 'link' ? (
          <Link1 size={20} className="-rotate-[50deg] text-swift"/>
        ) : (
          <Profile2User size={20} className="text-dart"/>
        )
      }
      <div ref={span} className="grow">
       {name}
      </div>
      <ExportSquare size={15} className="text-third-blue" />
    </div>
  )
}
