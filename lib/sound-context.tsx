"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SoundContextType {
  soundEnabled: boolean
  toggleSound: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load preference from localStorage
    const saved = localStorage.getItem("soundEnabled")
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved))
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled))
    }
  }, [soundEnabled, mounted])

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev)
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSoundContext() {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error("useSoundContext must be used within a SoundProvider")
  }
  return context
}

