import './Menu.css'
import { useEffect } from 'react'

export default function Menu({ children, className }) {
  useEffect(() => {
    document.body.style.overflow='hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])


  return (
    <div className={`menu ${className}`} style={{ height: window.innerHeight - 67}}>
      {/* the height style is for the Safari address bar */}
      {children}
    </div>
  )
}