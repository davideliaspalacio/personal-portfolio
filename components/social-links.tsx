"use client"

import { motion } from "framer-motion"
import { LinkedInIcon, GitIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/david-elias-palacio",
    Icon: LinkedInIcon,
    color: "bg-playful-blue",
    hoverColor: "hover:bg-[#0077B5]",
  },
  {
    name: "GitHub",
    url: "https://github.com/davideliaspalacio",
    Icon: GitIcon,
    color: "bg-foreground",
    hoverColor: "hover:bg-foreground/80",
  },
]

export function SocialLinks() {
  const { playSound } = useSound()

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => playSound("hover")}
          onClick={() => playSound("click")}
          className={`${link.color} ${link.hoverColor} w-14 h-14 rounded-full border-3 border-foreground flex items-center justify-center transition-colors`}
        >
          <link.Icon className="w-7 h-7 text-card" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  )
}
