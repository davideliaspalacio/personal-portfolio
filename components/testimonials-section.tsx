"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { QuoteIcon, StarIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    role: "Tech Lead @ Cryptomex",
    content:
      "David is an exceptional frontend developer. His attention to detail and ability to create pixel-perfect interfaces is impressive. He quickly became a key player in our Web3 platform development.",
    rating: 5,
    color: "bg-playful-yellow",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Product Manager @ Virtual Tec",
    content:
      "Working with David was a pleasure. He has a great ability to translate business requirements into technical solutions and always delivers high-quality work on time.",
    rating: 5,
    color: "bg-playful-blue",
  },
  {
    id: 3,
    name: "Juan Martinez",
    role: "Senior Developer @ Somos Blumer",
    content:
      "David showed incredible growth during his time with us. His eagerness to learn and adapt to new technologies made him stand out. A true team player!",
    rating: 5,
    color: "bg-playful-green",
  },
  {
    id: 4,
    name: "Ana Garcia",
    role: "UX Designer @ Cryptomex",
    content:
      "David has an excellent eye for UI/UX. He not only implements designs flawlessly but also provides valuable feedback that improves the final product.",
    rating: 5,
    color: "bg-playful-purple",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()
  const hasPlayedEntrySound = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          if (!hasPlayedEntrySound.current) {
            playSound("whoosh")
            hasPlayedEntrySound.current = true
          }
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [playSound, isVisible])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const newIndex = (prev + 1) % testimonials.length
        // Only play sound if section is in viewport
        if (isInViewport) {
          playSound("slide")
        }
        return newIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isInViewport, playSound])

  const handleDotClick = (index: number) => {
    playSound("pop")
    setActiveIndex(index)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-20 px-4 bg-secondary">
      <div className="absolute inset-0 notebook-lines opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <QuoteIcon className="w-10 h-10 text-playful-yellow" />
            <h2 className="text-4xl md:text-5xl font-serif">What People Say</h2>
            <QuoteIcon className="w-10 h-10 text-playful-yellow transform scale-x-[-1]" />
          </div>
          <p className="text-xl text-muted-foreground">Feedback from colleagues and clients</p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: -5 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className={`${testimonials[activeIndex].color} rounded-3xl p-8 md:p-10 border-4 border-foreground sticker relative`}
            >
              {/* Quote icon */}
              <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-foreground/20" />

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <StarIcon className="w-6 h-6 text-foreground" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                {`"${testimonials[activeIndex].content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-card border-3 border-foreground flex items-center justify-center">
                  <span className="text-2xl font-bold">{testimonials[activeIndex].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-lg font-bold">{testimonials[activeIndex].name}</p>
                  <p className="text-foreground/70">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full border-2 border-foreground transition-colors ${
                  index === activeIndex ? "bg-foreground" : "bg-card"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Side testimonials preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex justify-between mt-12 gap-4"
        >
          {testimonials
            .filter((_, i) => i !== activeIndex)
            .slice(0, 3)
            .map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                onClick={() => handleDotClick(testimonials.indexOf(testimonial))}
                className={`${testimonial.color}/50 rounded-2xl p-4 border-3 border-foreground/50 cursor-pointer flex-1 max-w-xs`}
              >
                <p className="text-sm line-clamp-2 mb-2">{`"${testimonial.content}"`}</p>
                <p className="text-xs font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
