"use client"

import { motion } from "framer-motion"
import { HeartIcon, ColombiaFlagIcon } from "./svg-icons"
import { SocialLinks } from "./social-links"
import { AvatarImage } from "./avatar-image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 bg-foreground text-card">
      <div className="max-w-4xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, rotate: { type: "tween" } }}>
            <AvatarImage className="w-20 h-20 rounded-full" size={80} />
          </motion.div>

          <SocialLinks />
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-card/20 rounded-full mb-8" />

        {/* Bottom section */}
        <div className="text-center space-y-3">
          <p className="text-lg flex items-center justify-center gap-2 flex-wrap">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            >
              <HeartIcon className="w-6 h-6 inline" />
            </motion.span>
            in Colombia
            <ColombiaFlagIcon className="w-6 h-4 inline" />
          </p>

          <p className="text-card/70">{currentYear} David Elias Palacio. All rights reserved.</p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-card/50">
            Built with Next.js, Tailwind CSS & Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
