"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CoffeeIcon, CodeIcon, HeartIcon, RocketIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const funFacts = [
  {
    icon: CoffeeIcon,
    stat: "500+",
    label: "Cups of coffee",
    description: "Fueling late-night coding sessions",
    color: "bg-playful-yellow",
  },
  {
    icon: CodeIcon,
    stat: "50k+",
    label: "Lines of code",
    description: "Written with love and TypeScript",
    color: "bg-playful-blue",
  },
  {
    icon: RocketIcon,
    stat: "20+",
    label: "Projects shipped",
    description: "From idea to production",
    color: "bg-playful-green",
  },
  {
    icon: HeartIcon,
    stat: "100%",
    label: "Passion",
    description: "For building great products",
    color: "bg-playful-red",
  },
]

export function FunFactsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          playSound("ping")
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
    <section ref={sectionRef} className="relative py-16 px-4 bg-card" id="fun-facts">
      <div className="relative max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-2">Fun Facts</h2>
          <p className="text-muted-foreground">Some numbers that tell my story</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={isVisible ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: index * 0.15, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              onHoverStart={() => {
                setHoveredIndex(index)
                playSound("pop")
              }}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`${fact.color} rounded-3xl p-6 border-4 border-foreground sticker text-center`}
            >
              <motion.div
                animate={hoveredIndex === index ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-3"
              >
                <fact.icon className="w-12 h-12" />
              </motion.div>

              <motion.p
                className="text-4xl md:text-5xl font-bold mb-1"
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
              >
                {fact.stat}
              </motion.p>
              <p className="text-lg font-bold mb-1">{fact.label}</p>
              <p className="text-sm text-foreground/70">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
