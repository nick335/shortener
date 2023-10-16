import Link from "next/link";
import { useEffect, useRef } from "react";
import { ExportSquare, Link1, Profile2User } from "iconsax-react";

export default function SearchMenuItem({ variant, name, searchField }) {
  const span = useRef(null)

  useEffect(() => {
    if (searchField) {
      const match = new RegExp(searchField, "gi");
      const nameWithHighlight = name.replace(match, text => `<mark>${text}</mark>`);
      span.current.innerHTML = nameWithHighlight
    }
  }, [name, searchField])


  return (
    <Link href='' className="flex items-center gap-[9px]">
      {
        variant === 'link' ? (
          <Link1 size={20} className="-rotate-[50deg] text-swift"/>
        ) : (
          <Profile2User size={20} className="text-dart"/>
        )
      }
      <div ref={span} className="grow">
       {/* This content is handled in useEffect */}
      </div>
      <ExportSquare size={15} className="text-third-blue" />
    </Link>
  )
}