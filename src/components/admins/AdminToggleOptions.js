import { useState } from "react";
import { More } from "iconsax-react"
import AdminOptions from "@/components/admins/AdminOptions";


export default function AdminToggleOptions(){
  const [options, setOptions] = useState(false)

  function toggleOptions(){
    setOptions((prev) => !prev)
  }

  return(
    <div>
      <More size={20} onClick={toggleOptions} />
      <AdminOptions isOpen={options} toggleOptions={toggleOptions} />
    </div>
  )
}