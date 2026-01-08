"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CodeIcon, CoffeeIcon, HeartIcon, RocketIcon, GlobeIcon, BlockchainIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const aboutItems = [
  { Icon: CodeIcon, text: "2.5+ years building scalable web apps", color: "bg-playful-blue" },
  { Icon: BlockchainIcon, text: "Web3 & Smart Contract integration", color: "bg-playful-purple" },
  { Icon: HeartIcon, text: "Clean architecture & long-term maintainability", color: "bg-playful-red" },
  { Icon: RocketIcon, text: "API integrations & n8n automation", color: "bg-playful-green" },
  { Icon: GlobeIcon, text: "Spanish (Native) & English (B2+ Certified)", color: "bg-playful-orange" },
  { Icon: CoffeeIcon, text: "Remote-first from Colombia", color: "bg-playful-yellow" },
]

export function AboutSection() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [playSound])

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-secondary" id="about">
      {/* Notebook-style background */}
      <div className="absolute inset-0 notebook-lines opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-1 bg-playful-red rounded-full" />
          <h2 className="text-4xl md:text-5xl font-serif">About Me</h2>
          <div className="flex-1 h-1 bg-playful-red rounded-full" />
        </div>

        <div className="speech-bubble border-foreground bg-card mb-12">
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            {"Software Engineer with"} <span className="text-playful-blue font-bold">2.5+ years of experience</span>{" "}
            building scalable, high-performance web applications using{" "}
            <span className="text-playful-red font-bold">React, Next.js, and TypeScript</span>.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4 text-muted-foreground">
            {
              "I've been part of the core development team since the early stages, contributing to the initial architecture of a"
            }
            <span className="text-playful-green font-bold"> multi-tenant production platform</span> that processes
            millions of dollars in monthly transaction volume.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I also have hands-on experience with backend and platform work, including{" "}
            <span className="text-playful-purple font-bold">API integrations</span>, automation workflows using{" "}
            <span className="text-playful-orange font-bold">n8n</span>, and the development of{" "}
            <span className="text-playful-blue font-bold">AI-powered internal tools</span>.
          </p>
        </div>

        {/* Fun facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={isVisible ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onMouseEnter={() => playSound("plop")}
              className={`flex items-center gap-4 p-6 rounded-3xl ${item.color} border-3 border-foreground sticker cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-card border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <item.Icon className="w-8 h-8" />
              </div>
              <p className="text-lg md:text-xl text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
