"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useSound } from "@/lib/sounds"
import { useSoundContext } from "@/lib/sound-context"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { playSound } = useSound()
  const { soundEnabled, toggleSound } = useSoundContext()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    playSound("pop")
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-2" : "py-4"}`}>
        <div
          className={`mx-4 md:mx-auto max-w-5xl transition-all duration-500 ${
            isScrolled
              ? "bg-background/90 backdrop-blur-md border-3 border-foreground rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              onMouseEnter={() => playSound("hover")}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-playful-yellow border-3 border-foreground rounded-xl flex items-center justify-center font-bold text-lg transition-transform group-hover:rotate-12 group-hover:scale-110">
                D
              </div>
              <span
                className={`font-serif text-xl hidden sm:block transition-opacity ${isScrolled ? "opacity-100" : "opacity-0"}`}
              >
                David
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => playSound("hover")}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id ? "text-background" : "text-foreground hover:bg-foreground/10"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-playful-blue border-2 border-foreground rounded-full -z-10 animate-pop-in" />
                  )}
                  {item.label}
                </button>
              ))}
              
              {/* Sound Toggle Button */}
              <button
                onClick={toggleSound}
                className={`ml-2 w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  soundEnabled ? "bg-playful-green" : "bg-playful-red"
                }`}
                title={soundEnabled ? "Mute sounds" : "Enable sounds"}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                playSound("click")
              }}
              className="md:hidden w-10 h-10 bg-playful-blue border-3 border-foreground rounded-xl flex flex-col items-center justify-center gap-1 transition-transform hover:scale-110 active:scale-95"
            >
              <span
                className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-5 h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-background border-3 border-foreground rounded-3xl p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-2xl text-left font-medium border-2 transition-all ${
                  activeSection === item.id
                    ? "bg-playful-blue text-background border-foreground"
                    : "border-transparent hover:bg-foreground/5"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Sound Toggle - Mobile */}
          <button
            onClick={toggleSound}
            className={`mt-3 w-full p-3 rounded-2xl font-medium border-2 border-foreground flex items-center justify-center gap-2 transition-all ${
              soundEnabled ? "bg-playful-green" : "bg-playful-red"
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-5 h-5" />
                <span>Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-5 h-5" />
                <span>Sound Off</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
