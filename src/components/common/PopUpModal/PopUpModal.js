"use client"
import { useEffect } from "react"
import "./PopUpModal.css"

export default function PopUpModal({ children, visibility, wide, className, close }) {
  useEffect(() => {
    if (visibility) {
      document.body.style.overflow='hidden'
    }

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [visibility])

  const onClickHandler = close ? close : () => {};

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  if (visibility) {
    return (
      <div className="pop-up-modal-bg" onClick={onClickHandler}>
        <div onClick={stopPropagation} className={`pop-up-modal  ${wide ? "modal--wide" : ""} ${className}`}>
          {children}
        </div>
      </div>
    )    
  } else {
    return null
  }
}