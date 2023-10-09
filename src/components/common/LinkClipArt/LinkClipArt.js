import "./LinkClipArt.scss"
import { Icon } from "@iconify/react";


export default function LinkClipArt({
  variant = "dart", // dart || ruby || swift
  className, ...props
}) {
  const variantClass = `link-clip-art--${variant}`

  return (
    <div className={`
      link-clip-art ${variantClass} absolute opacity-[0.2] !z-0 ${className}
    `}>
      <Icon icon="iconamoon:link-thin" className="w-full" {...props} />
    </div>
  )
}