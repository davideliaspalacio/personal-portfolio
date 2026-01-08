"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import {
  SparkleIcon,
  WaveHandIcon,
  ColombiaFlagIcon,
  FloatingReactIcon,
  FloatingNextIcon,
  FloatingTSIcon,
  FloatingJSIcon,
  FloatingNodeIcon,
  FloatingGitIcon,
} from "./svg-icons"
import { AvatarImage } from "./avatar-image"
import { useSound } from "@/lib/sounds"

const floatingTech = [
  { Icon: FloatingReactIcon, x: 8, y: 15, delay: 0, size: "w-12 h-12 md:w-16 md:h-16" },
  { Icon: FloatingNextIcon, x: 85, y: 20, delay: 0.5, size: "w-10 h-10 md:w-14 md:h-14" },
  { Icon: FloatingTSIcon, x: 5, y: 60, delay: 1, size: "w-10 h-10 md:w-12 md:h-12" },
  { Icon: FloatingJSIcon, x: 90, y: 55, delay: 1.5, size: "w-8 h-8 md:w-12 md:h-12" },
  { Icon: FloatingNodeIcon, x: 12, y: 85, delay: 2, size: "w-10 h-10 md:w-14 md:h-14" },
  { Icon: FloatingGitIcon, x: 82, y: 80, delay: 2.5, size: "w-8 h-8 md:w-10 md:h-10" },
]

export function HeroSection() {
  const [isWaving, setIsWaving] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { playSound } = useSound()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleWave = () => {
    setIsWaving(true)
    playSound("boing")
  }

  const handleCTAClick = () => {
    playSound("whoosh")
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {floatingTech.map((tech, i) => (
        <motion.div
          key={i}
          className={`absolute ${tech.size} opacity-60`}
          style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
          initial={{ scale: 0, rotate: -20 }}
          animate={{
            scale: 1,
            rotate: [0, 10, -10, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            scale: { duration: 0.5, delay: tech.delay },
            rotate: { repeat: Number.POSITIVE_INFINITY, duration: 6, delay: tech.delay },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 4, delay: tech.delay, ease: "easeInOut" },
          }}
          onMouseEnter={() => playSound("sparkle")}
        >
          <tech.Icon className="w-full h-full drop-shadow-lg" />
        </motion.div>
      ))}

      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-playful-yellow border-4 border-foreground overflow-hidden sticker flex items-center justify-center"
          onMouseEnter={() => playSound("hover")}
        >
          <AvatarImage className="w-40 h-40 md:w-52 md:h-52 rounded-full" size={208} />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-playful-blue border-3 border-foreground flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <SparkleIcon className="w-8 h-8 text-foreground" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-card border-3 border-foreground flex items-center justify-center"
        >
          <ColombiaFlagIcon className="w-8 h-6 rounded" />
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif text-center mb-4 text-balance"
      >
        {"Hey! I'm David Palacio"}{" "}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-center max-w-3xl mb-8 text-balance"
      >
        <span className="text-playful-blue font-bold">Frontend & Web3 Developer</span> with 2.5+ years building{" "}
        <span className="text-playful-green font-bold">scalable</span>,{" "}
        <span className="text-playful-purple font-bold">high-performance</span> web applications
      </motion.p>

      {/* Tech stack badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl"
      >
        {["React", "Next.js", "TypeScript", "Web3", "Node.js"].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0], transition: { rotate: { type: "tween", duration: 0.3 }, scale: { type: "spring" } } }}
            onMouseEnter={() => playSound("squish")}
            className="px-4 py-2 bg-secondary rounded-full border-2 border-foreground text-sm md:text-base font-medium cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
        <Button
          size="lg"
          className="group text-xl px-8 py-6 rounded-full bg-playful-blue hover:bg-playful-purple text-white border-3 border-foreground transition-all duration-300 hover:scale-110 hover:-rotate-2 sticker"
          onClick={handleCTAClick}
          onMouseEnter={() => playSound("hover")}
        >
          <span className="mr-2">See my work</span>
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-8 h-14 rounded-full border-3 border-foreground flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-2 h-3 rounded-full bg-foreground"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
