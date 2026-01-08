"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { GlobeIcon, ColombiaFlagIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const languages = [
  {
    name: "Spanish",
    level: "Native",
    description: "Lengua materna",
    flag: "ES",
    color: "bg-playful-yellow",
  },
  {
    name: "English",
    level: "B2+ Certified",
    description: "Speaking & Writing certified",
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
                      {/* USA Flag */}
                      <rect width="48" height="32" fill="#B22234" />
                      {/* White stripes */}
                      <rect y="2.46" width="48" height="2.46" fill="#fff" />
                      <rect y="7.38" width="48" height="2.46" fill="#fff" />
                      <rect y="12.31" width="48" height="2.46" fill="#fff" />
                      <rect y="17.23" width="48" height="2.46" fill="#fff" />
                      <rect y="22.15" width="48" height="2.46" fill="#fff" />
                      <rect y="27.08" width="48" height="2.46" fill="#fff" />
                      {/* Blue canton */}
                      <rect width="19.2" height="17.23" fill="#3C3B6E" />
                      {/* Stars (simplified) */}
                      <g fill="#fff">
                        <circle cx="3" cy="2.5" r="1" />
                        <circle cx="7" cy="2.5" r="1" />
                        <circle cx="11" cy="2.5" r="1" />
                        <circle cx="15" cy="2.5" r="1" />
                        <circle cx="5" cy="5" r="1" />
                        <circle cx="9" cy="5" r="1" />
                        <circle cx="13" cy="5" r="1" />
                        <circle cx="3" cy="7.5" r="1" />
                        <circle cx="7" cy="7.5" r="1" />
                        <circle cx="11" cy="7.5" r="1" />
                        <circle cx="15" cy="7.5" r="1" />
                        <circle cx="5" cy="10" r="1" />
                        <circle cx="9" cy="10" r="1" />
                        <circle cx="13" cy="10" r="1" />
                        <circle cx="3" cy="12.5" r="1" />
                        <circle cx="7" cy="12.5" r="1" />
                        <circle cx="11" cy="12.5" r="1" />
                        <circle cx="15" cy="12.5" r="1" />
                      </g>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{lang.name}</h3>
                  <span className="inline-block bg-card/80 text-foreground px-3 py-1 rounded-full text-sm font-bold border-2 border-foreground/50">
                    {lang.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 text-center font-medium">{lang.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
