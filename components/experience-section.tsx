"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CryptomexIcon, BlumerIcon, VirtualTecIcon, ExternalLinkIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"
import { useTranslations } from "next-intl"

const experienceConfig = [
  {
    color: "bg-playful-yellow",
    Icon: CryptomexIcon,
    website: "https://cryptomex.com",
  },
  {
    color: "bg-playful-blue",
    Icon: VirtualTecIcon,
  },
  {
    color: "bg-playful-green",
    Icon: BlumerIcon,
  },
]

export function ExperienceSection() {
  const t = useTranslations("experience")
  const companies = t.raw("companies") as Array<{
    name: string
    role: string
    period: string
    duration: string
    location: string
    type: string
    highlights: string[]
    visitCompany?: string
  }>
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  const experiences = companies.map((company, index) => ({
    ...company,
    ...experienceConfig[index],
  }))

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

  const toggleExpand = (index: number) => {
    // Use crypto sound for Cryptomex (first company - index 0)
    if (index === 0) {
      playSound("transaction")
    } else {
      playSound("pop")
    }
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-card" id="experience">
      <div className="absolute inset-0 notebook-lines opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-foreground/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, type: "spring" }}
                className={`relative ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 md:left-1/2 w-5 h-5 bg-foreground rounded-full transform md:-translate-x-1/2 border-4 border-card z-10"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ rotate: index % 2 === 0 ? -1 : 1 }}
                  onClick={() => toggleExpand(index)}
                  className={`${exp.color} rounded-3xl p-6 md:p-8 border-4 border-foreground cursor-pointer sticker ml-16 md:ml-0 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={expandedIndex === index ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-card border-3 border-foreground flex items-center justify-center flex-shrink-0"
                    >
                      <exp.Icon className="w-12 h-12" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{exp.company}</h3>
                          <p className="text-lg text-foreground/90">{exp.role}</p>
                        </div>
                        <div className="text-right">
                          <span className="bg-card/80 text-foreground px-3 py-1 rounded-full text-sm border-2 border-foreground/50 inline-block">
                            {exp.period}
                          </span>
                          <p className="text-sm text-foreground/70 mt-1">{exp.duration}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-foreground/10 px-3 py-1 rounded-full text-sm">{exp.type}</span>
                        <span className="bg-foreground/10 px-3 py-1 rounded-full text-sm">{exp.location}</span>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t-2 border-foreground/30">
                              <ul className="space-y-3">
                                {exp.highlights.map((highlight, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-foreground/90"
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      className="w-5 h-5 mt-1 flex-shrink-0 text-foreground"
                                      fill="currentColor"
                                    >
                                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    <span className="text-sm md:text-base">{highlight}</span>
                                  </motion.li>
                                ))}
                              </ul>

                              {exp.website && (
                                <motion.a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 mt-4 bg-foreground text-card px-4 py-2 rounded-full font-bold"
                                >
                                  <ExternalLinkIcon className="w-4 h-4" />
                                  {exp.visitCompany || t("companies.0.visitCompany")}
                                </motion.a>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <p className="text-sm text-foreground/60 mt-3">
                        {expandedIndex === index ? t("clickToCollapse") : t("clickToExpand")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
