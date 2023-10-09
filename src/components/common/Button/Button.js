import "./Button.scss"
import { Link1, People } from "iconsax-react";


export default function Button({
  variant = "dart", // dart || ruby || danger
  icon="", // people || link
  disabled = false,
  children, className="", ...props
}) {
  const variantClass = `btn--${variant}`

  return (
    <button
      disabled={disabled}
      className={`btn ${variantClass} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {
        icon ? (
          <>
            {icon ==="people" ? <People size="18" /> : null}
            {icon ==="link" ? <Link1 size="18" /> : null}
          </>
        ) : null
      }
    </button>
  )
}