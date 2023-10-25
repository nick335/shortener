import Link from "next/link";
import { useEffect, useRef } from "react";
import { ExportSquare, Link1, Profile2User } from "iconsax-react";
import { useTitleCase } from "@/hooks/useTitleCase";

export default function SearchMenuItem({ variant, name, searchField }) {
  const span = useRef(null)
  const titleCaseName = useTitleCase(name)

  useEffect(() => {
    if (searchField) {
      const match = new RegExp(searchField, "gi");
      const nameWithHighlight = titleCaseName.replace(match, text => `<mark>${text}</mark>`);
      span.current.innerHTML = nameWithHighlight
    }
  }, [titleCaseName, searchField])



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