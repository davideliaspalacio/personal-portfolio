"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { useSound } from "@/lib/sounds"

interface LanguageSwitcherProps {
  variant?: "compact" | "default"
}

export function LanguageSwitcher({ variant = "default" }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { playSound } = useSound()

  const switchLanguage = (newLocale: "en" | "es") => {
    if (newLocale !== locale) {
      playSound("pop")
      router.replace(pathname, { locale: newLocale })
    }
  }

  if (variant === "compact") {
    return (
      <div className="flex gap-2 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage("en")}
          className={`${
            locale === "en" ? "bg-playful-blue" : "bg-secondary"
          } text-foreground px-4 py-2 rounded-full border-3 border-foreground font-bold text-sm md:text-base transition-colors`}
        >
          🇺🇸 English
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage("es")}
          className={`${
            locale === "es" ? "bg-playful-green" : "bg-secondary"
          } text-foreground px-4 py-2 rounded-full border-3 border-foreground font-bold text-sm md:text-base transition-colors`}
        >
          🇪🇸 Español
        </motion.button>
      </div>
    )
  }

  // Default variant - single toggle button
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => switchLanguage(locale === "en" ? "es" : "en")}
      className="w-9 h-9 rounded-full bg-playful-yellow border-3 border-foreground flex items-center justify-center text-lg transition-all hover:rotate-12"
      title={locale === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      {locale === "en" ? "🇪🇸" : "🇺🇸"}
    </motion.button>
  )
}
