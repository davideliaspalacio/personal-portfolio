"use client"

import { useEffect, useRef, useState } from "react"
import { X, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeIcon, RocketIcon, GlobeIcon, BriefcaseIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Scalable full-stack e-commerce solution for businesses with inventory management, online payments, and admin dashboard.",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL"],
    color: "bg-playful-blue",
    rotation: "-rotate-2",
    Icon: BriefcaseIcon,
    fullDescription:
      "A complete e-commerce platform built with a modern tech stack. Frontend built with Next.js and TypeScript for a fast, SEO-optimized shopping experience. Backend powered by NestJS with PostgreSQL for robust data management. Features include: real-time inventory tracking, multiple payment gateway integrations, order management, admin dashboard, and scalable architecture ready for enterprise use.",
  },
  {
    title: "License Plate Recognition API",
    description: "Real-time license plate detection and recognition system using computer vision and deep learning.",
    tags: ["Python", "OpenCV", "TensorFlow", "REST API"],
    color: "bg-playful-green",
    rotation: "rotate-1",
    Icon: CodeIcon,
    year: "2023",
    fullDescription:
      "An AI-powered API for real-time license plate recognition. Built with Python, OpenCV for image processing, and TensorFlow for deep learning models. The system can detect and read license plates from images and video streams with high accuracy. Deployed as a REST API for easy integration with existing systems like parking management, toll systems, and security applications.",
  },
  {
    title: "Face Recognition System",
    description: "AI-powered facial recognition system for identity verification and access control applications.",
    tags: ["Python", "Deep Learning", "OpenCV", "Flask"],
    color: "bg-playful-purple",
    rotation: "-rotate-1",
    Icon: RocketIcon,
    year: "2023",
    fullDescription:
      "A facial recognition system built with Python and deep learning technologies. Implements face detection, feature extraction, and identity matching for security and access control applications. Features include real-time face detection, face encoding database, and identity verification API. Built with OpenCV, dlib, and Flask for the web interface.",
  },
  {
    title: "Cross-Platform App",
    description: "Mobile and web application with shared codebase, REST API integration, and offline support.",
    tags: ["React Native", "FlutterFlow", "APIs"],
    color: "bg-playful-orange",
    rotation: "rotate-2",
    Icon: GlobeIcon,
    fullDescription:
      "A cross-platform application delivering pixel-perfect UI across mobile and web. Features offline-first architecture with local data persistence, seamless REST API integration, and real-time sync. Delivered as MVP and iterated based on user feedback to improve UX metrics by 35%.",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleProjectClick = (project: (typeof projects)[0]) => {
    // Use crypto sound for blockchain project
    if (project.title.includes("Crypto") || project.tags.includes("Web3")) {
      playSound("cashRegister")
    } else {
      playSound("pop")
    }
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    playSound("warp")
    setSelectedProject(null)
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            {"Things I've Built"}{" "}
            <span className="inline-block animate-bounce-soft">
              <RocketIcon className="w-10 h-10 inline-block" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Click on a sticker to learn more!</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${isVisible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => playSound("hover")}
                className={`${project.color} ${project.rotation} rounded-3xl p-6 border-3 border-foreground cursor-pointer sticker group`}
              >
                {/* Project SVG icon */}
                <div className="mb-4 group-hover:animate-wiggle transition-transform flex items-start justify-between">
                  <project.Icon className="w-14 h-14" />
                  {"year" in project && project.year && (
                    <span className="bg-card/90 text-foreground px-3 py-1 rounded-full text-sm border-2 border-foreground/50 font-bold">
                      📅 {project.year}
                    </span>
                  )}
                </div>

                {/* Project title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{project.title}</h3>

                {/* Description */}
                <p className="text-foreground/80 mb-4 text-lg">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-card/80 text-foreground px-3 py-1 rounded-full text-sm border-2 border-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className={`${selectedProject.color} rounded-3xl p-8 max-w-lg w-full border-4 border-foreground animate-pop-in relative`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border-2 border-foreground flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="mb-4 flex items-start justify-between">
              <selectedProject.Icon className="w-16 h-16" />
              {"year" in selectedProject && selectedProject.year && (
                <span className="bg-card/90 text-foreground px-4 py-2 rounded-full text-sm border-2 border-foreground/50 font-bold">
                  📅 {selectedProject.year}
                </span>
              )}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>
            <p className="text-foreground/90 text-lg mb-6 leading-relaxed">{selectedProject.fullDescription}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-card/80 text-foreground px-3 py-1 rounded-full text-sm border-2 border-foreground/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact to see project */}
            <div className="bg-card/90 rounded-2xl p-4 border-3 border-foreground/50 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-playful-yellow rounded-full flex items-center justify-center border-2 border-foreground">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Want to see this project?</p>
                  <p className="text-sm text-foreground/70">Contact me for a live demo or to discuss the code!</p>
                </div>
              </div>
            </div>

            {/* Contact button */}
            <Button
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full border-2 border-foreground py-6 text-lg font-bold"
              onClick={() => {
                playSound("success")
                handleCloseModal()
                // Scroll to contact section
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me to See This Project
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
