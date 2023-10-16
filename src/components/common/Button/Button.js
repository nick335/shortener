import "./Button.scss"
import { Link1, Profile2User } from "iconsax-react";


export default function Button({
  variant = "dart", // dart || ruby || danger
  icon="", // people || link
  disabled = false,
  children, className="", ...props
}) {
  const variantClass = `btn--${variant}`
  const disabledClass = disabled ? `btn--disabled` : ""

  return (
    <button
      disabled={disabled}
      className={`btn ${variantClass} ${disabledClass} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {
        icon ? (
          <>
            {icon ==="people" ? <Profile2User size="18" /> : null}
            {icon ==="link" ? <Link1 size="18" className="-rotate-[50deg]" /> : null}
          </>
        ) : null
      }
    </button>
  )
}