"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useSound } from "@/lib/sounds"

const education = [
  {
    institution: "Universidad Simón Bolívar",
    status: "📚 Currently Studying",
    field: "Data Science",
    period: "2025 - Present",
    location: "Barranquilla, Colombia",
    color: "bg-playful-blue",
    highlights: [
      "Learning Python, R, and SQL for data analysis and manipulation",
      "Studying algorithms, data structures, and programming fundamentals",
      "Applying statistical methods and machine learning concepts",
      "Building data-driven projects with real-world datasets",
    ],
  },
]

const certifications = [
  {
    name: "React - The Complete Guide",
    issuer: "Udemy - Maximilian Schwarzmüller",
    year: "2023",
    color: "bg-playful-blue",
  },
  {
    name: "Next.js & React - Complete Guide",
    issuer: "Udemy - Maximilian Schwarzmüller",
    year: "2023",
    color: "bg-playful-purple",
  },
  {
    name: "TypeScript: The Complete Developer's Guide",
    issuer: "Udemy - Stephen Grider",
    year: "2023",
    color: "bg-playful-green",
  },
  {
    name: "Advanced CSS and Sass",
    issuer: "Udemy - Jonas Schmedtmann",
    year: "2023",
    color: "bg-playful-yellow",
  },
  {
    name: "JavaScript: The Advanced Concepts",
    issuer: "Udemy - Andrei Neagoie",
    year: "2022",
    color: "bg-playful-orange",
  },
  {
    name: "Testing React with Jest and Testing Library",
    issuer: "Udemy - Bonnie Schulkin",
    year: "2024",
    color: "bg-playful-red",
  },
  {
    name: "Web3 & Blockchain Development",
    issuer: "Alchemy University",
    year: "2024",
    color: "bg-playful-purple",
  },
  {
    name: "NestJS: The Complete Developer's Guide",
    issuer: "Udemy - Stephen Grider",
    year: "2024",
    color: "bg-playful-green",
  },
]

export function EducationSection() {
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
    <section ref={sectionRef} id="education" className="relative py-20 px-4 bg-playful-orange/20">
      <div className="absolute inset-0 notebook-lines opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">My academic background and continuous learning</p>
        </motion.div>

        {/* Education */}
        <div className="mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`${edu.color} rounded-3xl p-6 md:p-8 border-4 border-foreground sticker`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{edu.institution}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="bg-card/90 text-foreground px-3 py-1 rounded-full text-sm border-2 border-foreground/50 font-medium">
                      {edu.status}
                    </span>
                    <p className="text-lg text-foreground/90 font-semibold">{edu.field}</p>
                  </div>
                  <p className="text-foreground/70 mt-1">{edu.location}</p>
                </div>
                <span className="bg-card/80 text-foreground px-4 py-2 rounded-full text-sm border-2 border-foreground/50 self-start font-medium">
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          <h3 className="text-2xl font-serif text-center mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                animate={isVisible ? { opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className={`${cert.color} rounded-2xl p-4 border-3 border-foreground sticker`}
              >
                <p className="font-bold text-lg">{cert.name}</p>
                <p className="text-sm text-foreground/70">
                  {cert.issuer} - {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
