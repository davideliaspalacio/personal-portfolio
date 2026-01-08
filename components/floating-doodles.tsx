"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CodeBracket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M15 8 L5 20 L15 32" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 8 L35 20 L25 32" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 10 Q15 0 25 10 Q35 20 45 10 Q55 0 55 10" strokeLinecap="round" />
    </svg>
  )
}

function DotCluster({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <circle cx="10" cy="10" r="4" />
      <circle cx="30" cy="10" r="4" />
      <circle cx="20" cy="25" r="4" />
      <circle cx="10" cy="35" r="3" opacity="0.5" />
      <circle cx="30" cy="35" r="3" opacity="0.5" />
    </svg>
  )
}

function CrossPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M15 5 L15 25" strokeLinecap="round" />
      <path d="M5 15 L25 15" strokeLinecap="round" />
    </svg>
  )
}

function Triangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 5 L35 35 L5 35 Z" strokeLinejoin="round" />
    </svg>
  )
}

function CircleRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="20" cy="20" r="15" />
      <circle cx="20" cy="20" r="8" strokeDasharray="4 4" />
    </svg>
  )
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M10 30 Q20 10 30 15" strokeLinecap="round" />
      <path d="M25 10 L30 15 L25 22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Hashtag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 5 L8 35" strokeLinecap="round" />
      <path d="M28 5 L24 35" strokeLinecap="round" />
      <path d="M5 14 L35 14" strokeLinecap="round" />
      <path d="M5 26 L35 26" strokeLinecap="round" />
    </svg>
  )
}

const doodles = [
  { Component: CodeBracket, color: "text-playful-blue", x: 5, y: 10, rotate: -15, size: "w-12 h-12" },
  { Component: Squiggle, color: "text-playful-yellow", x: 85, y: 5, rotate: 10, size: "w-16 h-8" },
  { Component: DotCluster, color: "text-playful-purple", x: 90, y: 25, rotate: 0, size: "w-10 h-10" },
  { Component: CrossPattern, color: "text-playful-red", x: 3, y: 35, rotate: 45, size: "w-8 h-8" },
  { Component: Triangle, color: "text-playful-green", x: 92, y: 45, rotate: 20, size: "w-10 h-10" },
  { Component: CircleRing, color: "text-playful-orange", x: 8, y: 55, rotate: 0, size: "w-12 h-12" },
  { Component: Arrow, color: "text-playful-blue", x: 88, y: 65, rotate: -30, size: "w-10 h-10" },
  { Component: Hashtag, color: "text-playful-purple", x: 5, y: 75, rotate: 15, size: "w-10 h-10" },
  { Component: Squiggle, color: "text-playful-green", x: 85, y: 85, rotate: -5, size: "w-14 h-6" },
  { Component: DotCluster, color: "text-playful-yellow", x: 10, y: 90, rotate: 0, size: "w-8 h-8" },
  { Component: CodeBracket, color: "text-playful-red", x: 50, y: 3, rotate: 10, size: "w-10 h-10" },
  { Component: CrossPattern, color: "text-playful-orange", x: 45, y: 95, rotate: 30, size: "w-8 h-8" },
]

export function FloatingDoodles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-15 ${doodle.color} ${doodle.size}`}
          style={{
            left: `${doodle.x}%`,
            top: `${doodle.y}%`,
          }}
          initial={{ rotate: doodle.rotate, scale: 0 }}
          animate={{
            rotate: [doodle.rotate, doodle.rotate + 5, doodle.rotate - 5, doodle.rotate],
            scale: 1,
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            rotate: { repeat: Number.POSITIVE_INFINITY, duration: 8 + i * 0.5, ease: "easeInOut" },
            scale: { duration: 0.5, delay: i * 0.1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 6 + i * 0.3, ease: "easeInOut" },
          }}
        >
          <doodle.Component className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  )
}
