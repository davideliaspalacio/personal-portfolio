"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TimelineIcon, RocketIcon, CodeIcon, BlockchainIcon, StarIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"
import { useTranslations } from "next-intl"

const journeyIcons = [CodeIcon, RocketIcon, StarIcon, BlockchainIcon]
const journeyColors = ["bg-playful-blue", "bg-playful-green", "bg-playful-yellow", "bg-playful-purple"]

export function JourneySection() {
  const t = useTranslations("journey")
  const journeyItems = t.raw("steps") as Array<{
    year: string
    title: string
    description: string
  }>
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  const journeySteps = journeyItems.map((item, index) => ({
    ...item,
    icon: journeyIcons[index],
    color: journeyColors[index],
  }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          playSound("swoosh")
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [playSound])

  const handleStepClick = (index: number) => {
    playSound("spring")
    setActiveStep(index)
  }

  return (
    <section ref={sectionRef} id="journey" className="relative py-20 px-4 bg-card">
      <div className="relative max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <TimelineIcon className="w-12 h-12 text-playful-purple" />
            <h2 className="text-4xl md:text-5xl font-serif">{t("title")}</h2>
          </div>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-foreground/20 transform md:-translate-x-1/2" />

          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStepClick(index)}
                className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full ${step.color} border-4 border-foreground flex items-center justify-center cursor-pointer sticker`}
              >
                <step.icon className="w-8 h-8" />
              </motion.div>

              {/* Content card */}
              <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  onClick={() => handleStepClick(index)}
                  className={`${step.color}/30 rounded-3xl p-6 border-3 border-foreground cursor-pointer transition-all ${activeStep === index ? "ring-4 ring-foreground" : ""}`}
                >
                  <span className="inline-block px-3 py-1 bg-foreground text-card rounded-full text-sm font-bold mb-2">
                    {step.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-foreground/80 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {activeStep !== index && <p className="text-sm text-muted-foreground">{t("clickToRead")}</p>}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
