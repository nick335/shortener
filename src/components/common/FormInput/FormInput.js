import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";


export default function FormInput({
  variant = "text", // text || email || password || number
  disabled = false,
  placeholder = "", ...props
}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const variantClass = `input-${variant}`
  const inputType = variant === "password" && !isPasswordVisible ? 
    "password" : variant === "password" && isPasswordVisible ? 
    "text" : variant

  return (
    <div disabled={disabled} {...props} className={`
      input ${variantClass} border border-ecx-grey font-inter
      py-2.5 px-3 rounded-[5px]
      lg:text-[18px] text-ecx-grey font-normal leading-[22.4px] lg:leading-[25.2px]
      grow flex items-center gap-[9px]
      transition-all outline-none hover:brightness-105 
    `}>
      <input
        type={inputType}
        placeholder={placeholder || "Username"}
        className="placeholder:text-ecx-grey grow outline-none cursor-text"
      />
      {
        variant === "password" ? (
          <button onClick={() => setPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? <EyeSlash size="18" /> : <Eye size="18" />}
          </button>
        ) : null
      }
    </div>
  )
}