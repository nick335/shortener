import { Link1 } from "iconsax-react";
import "./LinkClipArt.scss"

export default function LinkClipArt({
  variant = "dart", // dart || ruby || swift
  className = "",
  size = 20,
  ...props
}) {
  const variantClass = `link-clip-art--${variant}`

  return (
    <div className={`link-clip-art ${variantClass} absolute opacity-20 ${className}`}>
      <Link1 size={size} {...props} />
    </div>
  )
}