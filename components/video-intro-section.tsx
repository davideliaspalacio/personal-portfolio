"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { PlayIcon } from "./svg-icons"
import { AvatarImage } from "./avatar-image"
import { useSound } from "@/lib/sounds"

export function VideoIntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
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

  const handlePlayClick = () => {
    playSound("bubble")
    setIsPlaying(true)
    // Play video after state update
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    playSound("woohoo")
  }

  return (
    <section ref={sectionRef} id="video-intro" className="relative py-20 px-4 bg-playful-purple/20">
      <div className="absolute inset-0 notebook-lines opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Meet David</h2>
          <p className="text-xl text-muted-foreground">Get to know me better through this quick introduction!</p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-playful-blue rounded-3xl transform rotate-2 border-4 border-foreground" />
          <div className="absolute inset-0 bg-playful-yellow rounded-3xl transform -rotate-1 border-4 border-foreground" />

          <div className="relative bg-card rounded-3xl border-4 border-foreground overflow-hidden sticker">
            {!isPlaying ? (
              // Placeholder with play button
              <div className="aspect-video bg-gradient-to-br from-playful-purple/30 to-playful-blue/30 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="mb-6"
                >
                  <AvatarImage className="w-32 h-32 md:w-48 md:h-48 rounded-full" size={192} />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayClick}
                  className="relative group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="absolute inset-0 bg-playful-red/50 rounded-full blur-xl"
                  />
                  <div className="relative bg-playful-red border-4 border-foreground rounded-full p-6">
                    <PlayIcon className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                </motion.button>

                <p className="mt-4 text-lg font-bold text-foreground/80">Click to play introduction</p>
              </div>
            ) : (
              // Video player
              <div className="aspect-video bg-foreground/90 relative">
                <video
                  ref={videoRef}
                  src="/davidIntroduction.mp4"
                  className="w-full h-full object-cover"
                  controls
                  onEnded={handleVideoEnd}
                  playsInline
                />
                {/* Close button */}
                <button
                  onClick={() => {
                    videoRef.current?.pause()
                    setIsPlaying(false)
                    playSound("swoosh")
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-playful-red border-3 border-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M6 6 L18 18" />
                    <path d="M18 6 L6 18" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Fun facts ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {[
              "2+ years of experience",
              "Frontend & Web3 Specialist",
              "Based in Colombia",
              "React Enthusiast",
              "Clean Code Advocate",
              "UI/UX Passionate",
              "TypeScript Expert",
              "Always Learning",
            ].map((fact, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-playful-yellow px-6 py-3 rounded-full border-3 border-foreground font-bold whitespace-nowrap"
              >
                {fact}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
