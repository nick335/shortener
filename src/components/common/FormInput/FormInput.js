import "./FormInput.css"
import { Eye, EyeSlash } from "iconsax-react";
import { useEffect, useState } from "react";


export default function FormInput({
  variant = "text", // text || email || password || number
  disabled = false,
  placeholder = "",
  name="",
  message = "",
  error=false,
  ...props
}) {
  const [inputState, setInputState] = useState("normal") // normal || active || error
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisible = () => setPasswordVisible(!isPasswordVisible)

  const handleClick = () => {
    if (!error) {
      setInputState("active")
    }
  }
  
  const handleBlur = () => {
    if (!error) {
      setInputState("normal")
    }
  }

  useEffect(() => {
    if (error) {
      setInputState("error")
    } else {
      setInputState("normal")
    }
  }, [error])

  
  const variantClass = `input--${variant}`
  const stateClass = `input--${inputState}`
  const messageClass = `input-message--${inputState}`
  const inputType = variant === "password" && !isPasswordVisible ? 
    "password" : variant === "password" && isPasswordVisible ? 
    "text" : variant


  return (
    <div
      disabled={disabled}
      className={`input ${variantClass} ${stateClass} ${message ? "mb-8" : ""}`}
      >
      <input
        name={name}
        type={inputType}
        placeholder={placeholder || ""}
        className="placeholder:text-ecx-grey grow outline-none cursor-text"
        autoComplete={`current-${variant}`}
        onClick={handleClick}
        onBlur={handleBlur}
        {...props}
      />

      {
        variant === "password" ? (
          <button type="button" onClick={togglePasswordVisible}>
            {isPasswordVisible ? <EyeSlash size="18" /> : <Eye size="18" />}
          </button>
        ) : null
      }

      {
        !message ? null : (
          <div className={`input-message ${messageClass} absolute top-full left-0 mt-2`}>
            {message}
          </div>
        )
      }
    </div>
  )
}