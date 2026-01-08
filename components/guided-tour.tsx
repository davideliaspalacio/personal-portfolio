"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PointerIcon, ArrowRightIcon, CloseIcon } from "./svg-icons"
import { AvatarImage } from "./avatar-image"
import { useSound } from "@/lib/sounds"

interface TourStep {
  target: string
  title: string
  description: string
  position: "top" | "bottom" | "left" | "right"
}

const tourSteps: TourStep[] = [
  {
    target: "hero",
    title: "Welcome to my Portfolio!",
    description: "Hey! I'm David  Elias Palacio, a Frontend & Web3 Developer from Colombia. Let me show you around!",
    position: "bottom",
  },
  {
    target: "about",
    title: "About Me",
    description: "Here you can learn more about my background, interests, and what drives me as a developer.",
    position: "top",
  },
  {
    target: "video-intro",
    title: "Video Introduction",
    description: "Watch a quick video where I introduce myself and talk about my passion for development!",
    position: "top",
  },
  {
    target: "journey",
    title: "My Journey",
    description: "Follow my career path from curious beginner to professional Frontend & Web3 developer.",
    position: "bottom",
  },
  {
    target: "skills",
    title: "My Tech Stack",
    description: "These are the technologies I work with daily. Hover over them to see my proficiency level!",
    position: "top",
  },
  {
    target: "experience",
    title: "Work Experience",
    description:
      "I've worked at amazing companies like Cryptomex, Virtual Tec, and Somos Blumer. Click to expand and see details!",
    position: "top",
  },
  {
    target: "projects",
    title: "Featured Projects",
    description: "Check out some of the cool projects I've built. Click on any card to see more details!",
    position: "top",
  },
  {
    target: "testimonials",
    title: "What People Say",
    description: "Read testimonials from colleagues and clients I've had the pleasure of working with.",
    position: "top",
  },
  {
    target: "contact",
    title: "Let's Connect!",
    description: "Want to work together? Drop me a message here or connect with me on LinkedIn!",
    position: "top",
  },
]

export function GuidedTour() {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showWelcome, setShowWelcome] = useState(true)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const { playSound } = useSound()

  const updateTargetPosition = useCallback(() => {
    if (!isActive) return
    const step = tourSteps[currentStep]
    const element = document.getElementById(step.target)
    if (element) {
      const rect = element.getBoundingClientRect()
      setTargetRect(rect)
    }
  }, [currentStep, isActive])

  useEffect(() => {
    if (!isActive) return

    let animationFrameId: number

    const handleScrollAndResize = () => {
      animationFrameId = requestAnimationFrame(() => {
        updateTargetPosition()
      })
    }

    handleScrollAndResize()
    window.addEventListener("scroll", handleScrollAndResize, { passive: true })
    window.addEventListener("resize", handleScrollAndResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize)
      window.removeEventListener("resize", handleScrollAndResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isActive, updateTargetPosition])

  const startTour = () => {
    playSound("woohoo")
    setShowWelcome(false)
    setIsActive(true)
    setCurrentStep(0)
    setTimeout(() => scrollToStep(0), 300)
  }

  const scrollToStep = (stepIndex: number) => {
    const step = tourSteps[stepIndex]
    const element = document.getElementById(step.target)
    if (!element) return
    
    const isMobile = window.innerWidth < 768
    const navbarOffset = isMobile ? 60 : 80
    
    // For different sections, use different scroll strategies
    const elementRect = element.getBoundingClientRect()
    const elementTop = elementRect.top + window.scrollY
    
    // Sections that need to show from the top (tall sections)
    const topAlignedSections = ["journey", "skills", "experience", "projects", "testimonials"]
    
    if (topAlignedSections.includes(step.target)) {
      window.scrollTo({ top: elementTop - navbarOffset, behavior: "smooth" })
    } else if (step.target === "hero") {
      // Scroll to top for hero
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // For shorter sections, try to center them but with offset for tooltip
      const viewportHeight = window.innerHeight
      const elementHeight = elementRect.height
      const targetScrollTop = elementTop - (viewportHeight - elementHeight) / 2
      window.scrollTo({ top: Math.max(0, targetScrollTop - navbarOffset), behavior: "smooth" })
    }
  }

  const nextStep = () => {
    playSound("slide")
    if (currentStep < tourSteps.length - 1) {
      const nextStepIndex = currentStep + 1
      setCurrentStep(nextStepIndex)
      setTimeout(() => scrollToStep(nextStepIndex), 100)
    } else {
      endTour()
    }
  }

  const prevStep = () => {
    playSound("slide")
    if (currentStep > 0) {
      const prevStepIndex = currentStep - 1
      setCurrentStep(prevStepIndex)
      setTimeout(() => scrollToStep(prevStepIndex), 100)
    }
  }

  const endTour = () => {
    playSound("woohoo")
    setIsActive(false)
    setShowWelcome(false)
  }

  const skipTour = () => {
    playSound("click")
    setShowWelcome(false)
  }

  // Welcome modal
  if (showWelcome) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-3 md:p-4"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-card border-3 md:border-4 border-foreground rounded-2xl md:rounded-3xl p-5 md:p-8 max-w-md w-full text-center sticker"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <AvatarImage className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full" size={128} />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-serif mb-1 md:mb-2">Hey there! 👋</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              Welcome to my portfolio! Would you like a quick tour?
            </p>

            <div className="flex flex-col gap-2 md:gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startTour}
                className="bg-playful-blue text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 md:border-3 border-foreground font-bold text-base md:text-lg w-full"
              >
                ✨ Yes, show me around!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={skipTour}
                className="bg-secondary text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 md:border-3 border-foreground font-bold text-sm md:text-base w-full"
              >
                {"I'll explore myself"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  if (!isActive) return null

  const step = tourSteps[currentStep]

  const getTooltipPosition = () => {
    if (!targetRect) return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }

    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    const isMobile = viewportWidth < 768
    
    // Responsive tooltip dimensions
    const tooltipWidth = isMobile ? Math.min(viewportWidth - 32, 320) : 350
    const tooltipHeight = isMobile ? 200 : 220
    const margin = isMobile ? 12 : 20
    const gap = isMobile ? 16 : 30

    let top: number
    let left: number

    // For mobile, always center horizontally
    if (isMobile) {
      left = (viewportWidth - tooltipWidth) / 2
    } else {
      // For desktop, position near the element
      left = Math.min(Math.max(targetRect.left, margin), viewportWidth - tooltipWidth - margin)
    }

    // Determine vertical position based on available space
    const spaceAbove = targetRect.top
    const spaceBelow = viewportHeight - targetRect.bottom

    if (step.position === "bottom" || spaceBelow > tooltipHeight + gap) {
      // Position below
      top = Math.min(targetRect.bottom + gap, viewportHeight - tooltipHeight - margin)
    } else if (spaceAbove > tooltipHeight + gap) {
      // Position above
      top = Math.max(targetRect.top - tooltipHeight - gap, margin)
    } else {
      // Not enough space, position in the visible area
      // On mobile, prefer bottom of screen
      if (isMobile) {
        top = viewportHeight - tooltipHeight - margin - 60 // Extra space for navigation
      } else {
        top = Math.max(margin, Math.min(viewportHeight - tooltipHeight - margin, targetRect.top))
      }
    }

    // Final bounds check
    top = Math.max(margin, Math.min(top, viewportHeight - tooltipHeight - margin))

    return { top: `${top}px`, left: `${left}px`, transform: "none" }
  }

  const tooltipStyle = getTooltipPosition()

  return (
    <>
      {/* Overlay with cutout */}
      <div className="fixed inset-0 z-[90] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <mask id="tour-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {targetRect && (
                <rect
                  x={Math.max(0, targetRect.left - 12)}
                  y={Math.max(0, targetRect.top - 12)}
                  width={Math.min(targetRect.width + 24, window.innerWidth)}
                  height={targetRect.height + 24}
                  rx="16"
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.75)" mask="url(#tour-mask)" />
        </svg>
      </div>

      {/* Highlight border */}
      {targetRect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed z-[91] pointer-events-none border-2 md:border-4 border-playful-yellow border-dashed rounded-2xl md:rounded-3xl"
          style={{
            left: Math.max(4, targetRect.left - 12),
            top: Math.max(4, targetRect.top - 12),
            width: Math.min(targetRect.width + 24, window.innerWidth - 8),
            height: targetRect.height + 24,
          }}
        />
      )}

      {/* Tour tooltip - Fixed positioning that always follows */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="fixed z-[92] w-[calc(100%-24px)] max-w-[320px] md:max-w-sm pointer-events-auto"
          style={tooltipStyle}
        >
          <div className="bg-playful-yellow border-3 md:border-4 border-foreground rounded-2xl md:rounded-3xl p-4 md:p-6 sticker relative shadow-lg">
            {/* Close button */}
            <button
              onClick={endTour}
              className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-playful-red rounded-full border-2 md:border-3 border-foreground flex items-center justify-center hover:scale-110 transition-transform"
            >
              <CloseIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Pointer animation - hidden on mobile */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
              className="absolute -left-8 top-1/2 -translate-y-1/2 hidden md:block"
            >
              <PointerIcon className="w-10 h-10 text-foreground" />
            </motion.div>

            {/* Step counter and progress bar for mobile */}
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-foreground text-card px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-bold">
                {currentStep + 1}/{tourSteps.length}
              </span>
              {/* Progress bar for mobile */}
              <div className="flex-1 h-1.5 bg-foreground/20 rounded-full md:hidden">
                <motion.div 
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{step.title}</h3>
            <p className="text-foreground/80 mb-3 md:mb-4 text-sm md:text-base leading-snug">{step.description}</p>

            <div className="flex justify-between items-center gap-2">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 border-foreground font-bold text-sm md:text-base ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-foreground/10 active:bg-foreground/20"
                }`}
              >
                Back
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="bg-foreground text-card px-4 md:px-6 py-1.5 md:py-2 rounded-full font-bold flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
