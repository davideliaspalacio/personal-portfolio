"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Users } from "lucide-react"
import { useSound } from "@/lib/sounds"

interface AnalyticsData {
  visitors: number
  pageViews: number
  configured: boolean
  error?: boolean
}

export function VisitorCounter() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const hasRecorded = useRef(false)
  const { playSound } = useSound()

  useEffect(() => {
    async function recordAndFetch() {
      try {
        // Registrar la visita (solo una vez por sesión)
        if (!hasRecorded.current) {
          hasRecorded.current = true
          await fetch("/api/analytics", { method: "POST" })
        }
        
        // Obtener estadísticas
        const response = await fetch("/api/analytics")
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Failed to fetch analytics:", error)
        setData({ visitors: 0, pageViews: 0, configured: false })
      }
    }

    recordAndFetch()
  }, [])

  // Don't show if not configured or error
  if (!data || !data.configured || data.error) {
    return null
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", bounce: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => {
          setIsHovered(true)
          playSound("pop")
        }}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
      >
        {/* Main badge */}
        <div className="bg-playful-purple border-3 border-foreground rounded-2xl px-4 py-3 sticker cursor-pointer shadow-lg">
          <div className="flex items-center gap-3">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <Eye className="w-5 h-5 text-white" />
            </motion.div>
            <div className="text-white">
              <motion.p 
                className="text-xl font-bold leading-none"
                animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              >
                {formatNumber(data.pageViews)}
              </motion.p>
              <p className="text-xs opacity-80">views</p>
            </div>
          </div>
        </div>

        {/* Expanded info on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-2 bg-card border-3 border-foreground rounded-xl px-4 py-3 sticker min-w-[140px] shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-playful-blue" />
                <span className="text-sm font-bold">{formatNumber(data.visitors)} visitors</span>
              </div>
              <p className="text-xs text-muted-foreground">Total</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative sparkle */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-playful-yellow rounded-full border-2 border-foreground"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </motion.div>
  )
}

