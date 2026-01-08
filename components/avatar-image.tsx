"use client"

import Image from "next/image"

interface AvatarImageProps {
  className?: string
  size?: number
}

export function AvatarImage({ className = "w-40 h-40", size = 200 }: AvatarImageProps) {
  return (
    <Image
      src="/davidcartoon.jpg"
      alt="David Elias Palacio"
      width={size}
      height={size}
      className={`${className} object-cover`}
      priority
    />
  )
}

