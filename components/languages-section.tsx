"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { GlobeIcon, ColombiaFlagIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const languages = [
  {
    name: "Spanish",
    level: "Native",
    proficiency: 100,
    flag: "ES",
    color: "bg-playful-yellow",
  },
  {
    name: "English",
    level: "Professional (B2+)",
    proficiency: 85,
    flag: "EN",
    color: "bg-playful-blue",
  },
]

export function LanguagesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          playSound("whoosh")
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [playSound])

  return (
    <section ref={sectionRef} className="relative py-16 px-4 bg-playful-green/20" id="languages">
      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <GlobeIcon className="w-10 h-10" />
          <h2 className="text-3xl md:text-4xl font-serif">Languages</h2>
        </motion.div>

        {/* Language cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 } : {}}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`${lang.color} rounded-3xl p-6 border-4 border-foreground sticker w-full max-w-xs`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-card border-3 border-foreground flex items-center justify-center text-2xl font-bold overflow-hidden">
                  {lang.flag === "ES" ? (
                    <ColombiaFlagIcon className="w-full h-full" />
                  ) : (
                    <svg viewBox="0 0 48 32" className="w-full h-full">
                      <rect width="48" height="32" fill="#012169" />
                      <path d="M0,0 L48,32 M48,0 L0,32" stroke="#fff" strokeWidth="6" />
                      <path d="M0,0 L48,32 M48,0 L0,32" stroke="#C8102E" strokeWidth="4" />
                      <path d="M24,0 L24,32 M0,16 L48,16" stroke="#fff" strokeWidth="10" />
                      <path d="M24,0 L24,32 M0,16 L48,16" stroke="#C8102E" strokeWidth="6" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{lang.name}</h3>
                  <p className="text-foreground/80">{lang.level}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative h-6 bg-card/50 rounded-full border-2 border-foreground overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${lang.proficiency}%` } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-foreground/80 rounded-full"
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground mix-blend-difference">
                  {lang.proficiency}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
