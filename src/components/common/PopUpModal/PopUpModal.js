"use client"
import { useEffect } from "react"
import "./PopUpModal.css"

export default function PopUpModal({ children, visibility, wide, className }) {
  useEffect(() => {
    if (visibility) {
      document.body.style.overflow='hidden'
    }

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [visibility])

  if (visibility) {
    return (
      <div className="pop-up-modal-bg">
        <div className={`pop-up-modal ${wide ? "modal--wide" : ""} ${className}`}>
          {children}
        </div>
      </div>
    )    
  } else {
    return null
  }
}