"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { RocketIcon, HeartIcon, CoffeeIcon } from "./svg-icons"
import { useSound } from "@/lib/sounds"

const socials = [
  {
    icon: Github,
    href: "https://github.com/davidepalacio",
    label: "GitHub",
    color: "hover:bg-foreground hover:text-background",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/davidepalacio",
    label: "LinkedIn",
    color: "hover:bg-playful-blue hover:text-white",
  },
  {
    icon: Mail,
    href: "mailto:davideliaspalacioo@gmail.com",
    label: "Email",
    color: "hover:bg-playful-red hover:text-white",
  },
]

export function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { playSound } = useSound()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    playSound("whoosh")
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    playSound("woohoo")
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
    playSound("pop")
  }

  return (
    <section className="relative py-20 px-4 bg-secondary" id="contact">
      <div className="absolute inset-0 notebook-lines opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            {"Let's build something fun together"}{" "}
            <span className="inline-block animate-bounce-soft">
              <RocketIcon className="w-10 h-10 inline-block" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {"Got an idea? Want to collaborate? Just want to say hi? Drop me a message!"}
          </p>
        </div>

        {submitted ? (
          <div className="bg-playful-green rounded-3xl p-12 border-3 border-foreground text-center animate-pop-in">
            <div className="mb-4 flex justify-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <circle cx="50" cy="50" r="45" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="4" />
                <path
                  d="M30 50 L45 65 L70 35"
                  stroke="#1a1a2e"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">Message Sent!</h3>
            <p className="text-xl text-foreground/80">{"Thanks for reaching out! I'll get back to you super soon."}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div className={`transition-all duration-300 ${focusedField === "name" ? "scale-[1.02]" : ""}`}>
              <label className="block text-lg mb-2 font-medium flex items-center gap-2">
                Your Name
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-playful-yellow" fill="currentColor">
                  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                </svg>
              </label>
              <Input
                type="text"
                placeholder="What should I call you?"
                className={`w-full text-lg py-6 px-6 rounded-2xl border-3 transition-all duration-300 ${
                  focusedField === "name" ? "border-playful-blue bg-playful-blue/10" : "border-foreground/30 bg-card"
                }`}
                onFocus={() => handleFocus("name")}
                onBlur={() => setFocusedField(null)}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email field */}
            <div className={`transition-all duration-300 ${focusedField === "email" ? "scale-[1.02]" : ""}`}>
              <label className="block text-lg mb-2 font-medium flex items-center gap-2">
                Your Email
                <Mail className="w-5 h-5 text-playful-red" />
              </label>
              <Input
                type="email"
                placeholder="Where can I reach you?"
                className={`w-full text-lg py-6 px-6 rounded-2xl border-3 transition-all duration-300 ${
                  focusedField === "email" ? "border-playful-red bg-playful-red/10" : "border-foreground/30 bg-card"
                }`}
                onFocus={() => handleFocus("email")}
                onBlur={() => setFocusedField(null)}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Message field */}
            <div className={`transition-all duration-300 ${focusedField === "message" ? "scale-[1.02]" : ""}`}>
              <label className="block text-lg mb-2 font-medium flex items-center gap-2">
                Your Message
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-playful-green" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </label>
              <Textarea
                placeholder="Tell me about your awesome idea..."
                rows={5}
                className={`w-full text-lg py-4 px-6 rounded-2xl border-3 transition-all duration-300 resize-none ${
                  focusedField === "message"
                    ? "border-playful-green bg-playful-green/10"
                    : "border-foreground/30 bg-card"
                }`}
                onFocus={() => handleFocus("message")}
                onBlur={() => setFocusedField(null)}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              onClick={() => playSound("click")}
              className="w-full text-xl py-7 rounded-full bg-playful-purple hover:bg-playful-blue text-white border-3 border-foreground transition-all duration-300 hover:scale-[1.02] sticker disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
        )}

        {/* Social links */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">Or find me on the interwebs:</p>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() => playSound("click")}
                className={`w-14 h-14 rounded-full bg-card border-3 border-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground">
          <p className="text-lg flex items-center justify-center gap-2">
            Made with <HeartIcon className="w-6 h-6" /> and lots of <CoffeeIcon className="w-6 h-6" /> by David Elias
            Palacio
          </p>
          <p className="text-sm mt-2 flex items-center justify-center gap-2">
            2026 All rights reserved. Have a great day!
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-playful-yellow" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}
