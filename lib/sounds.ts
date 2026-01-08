"use client"

import { useSoundContext } from "./sound-context"

class SoundManager {
  private audioContext: AudioContext | null = null
  private sounds: Map<string, AudioBuffer> = new Map()
  private initialized = false

  async init() {
    if (this.initialized || typeof window === "undefined") return

    try {
      this.audioContext = new (
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      )()
      this.initialized = true
      await this.createSounds()
    } catch {
      console.log("[v0] Audio context not available")
    }
  }

  private async createSounds() {
    if (!this.audioContext) return

    // Pop sound - short high-pitched click
    this.sounds.set("pop", this.createToneBuffer(800, 0.08, "sine", true))

    // Boing sound - springy bounce
    this.sounds.set("boing", this.createBoingBuffer())

    // Whoosh sound - movement sound
    this.sounds.set("whoosh", this.createWhooshBuffer())

    // Click sound - button press
    this.sounds.set("click", this.createToneBuffer(600, 0.05, "square", true))

    // Success sound - happy ding
    this.sounds.set("success", this.createSuccessBuffer())

    // Hover sound - subtle blip
    this.sounds.set("hover", this.createToneBuffer(1200, 0.03, "sine", true))

    // Slide sound - for transitions
    this.sounds.set("slide", this.createSlideBuffer())

    // Ding sound - for notifications
    this.sounds.set("ding", this.createDingBuffer())

    // Bounce sound - cartoon bounce
    this.sounds.set("bounce", this.createBounceBuffer())

    // Typing sound - keyboard click
    this.sounds.set("typing", this.createTypingBuffer())

    // Page turn sound
    this.sounds.set("pageTurn", this.createPageTurnBuffer())

    // Spring sound - cartoon spring
    this.sounds.set("spring", this.createSpringBuffer())

    // Sparkle sound - magical effect
    this.sounds.set("sparkle", this.createSparkleBuffer())

    // Blop sound - bubble pop
    this.sounds.set("blop", this.createBlopBuffer())

    // New cartoon sounds
    // Squeak - rubber toy sound
    this.sounds.set("squeak", this.createSqueakBuffer())

    // Bonk - classic cartoon hit
    this.sounds.set("bonk", this.createBonkBuffer())

    // Woohoo - celebration ascending
    this.sounds.set("woohoo", this.createWoohooBuffer())

    // Zip - fast movement
    this.sounds.set("zip", this.createZipBuffer())

    // Plop - water drop
    this.sounds.set("plop", this.createPlopBuffer())

    // Twinkle - magical sparkle
    this.sounds.set("twinkle", this.createTwinkleBuffer())

    // Squish - squishy cartoon
    this.sounds.set("squish", this.createSquishBuffer())

    // Honk - funny horn
    this.sounds.set("honk", this.createHonkBuffer())

    // Swoosh - fast pass by
    this.sounds.set("swoosh", this.createSwooshBuffer())

    // Bubble - underwater bubble
    this.sounds.set("bubble", this.createBubbleBuffer())

    // Ping - notification ping
    this.sounds.set("ping", this.createPingBuffer())

    // Warp - teleport/transition
    this.sounds.set("warp", this.createWarpBuffer())

    // Crypto/Coin sounds
    // Coin - single coin drop
    this.sounds.set("coin", this.createCoinBuffer())

    // Coins - multiple coins jingling
    this.sounds.set("coins", this.createCoinsBuffer())

    // CashRegister - cha-ching!
    this.sounds.set("cashRegister", this.createCashRegisterBuffer())

    // Crypto - digital blockchain sound
    this.sounds.set("crypto", this.createCryptoBuffer())

    // Transaction - digital transaction beep
    this.sounds.set("transaction", this.createTransactionBuffer())

    // Jackpot - winning coins cascade
    this.sounds.set("jackpot", this.createJackpotBuffer())
  }

  private createToneBuffer(frequency: number, duration: number, type: OscillatorType, decay: boolean): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      let sample = 0

      switch (type) {
        case "sine":
          sample = Math.sin(2 * Math.PI * frequency * t)
          break
        case "square":
          sample = Math.sin(2 * Math.PI * frequency * t) > 0 ? 0.5 : -0.5
          break
        case "triangle":
          sample = Math.abs(((t * frequency * 4) % 4) - 2) - 1
          break
      }

      if (decay) {
        sample *= Math.exp(-t * 20)
      }

      data[i] = sample * 0.3
    }

    return buffer
  }

  private createBoingBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.2
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const frequency = 400 * Math.exp(-t * 8) + 200
      const sample = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 10)
      data[i] = sample * 0.4
    }

    return buffer
  }

  private createWhooshBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.15
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const noise = Math.random() * 2 - 1
      const envelope = Math.sin((Math.PI * t) / duration)
      data[i] = noise * envelope * 0.15
    }

    return buffer
  }

  private createSuccessBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const freq1 = 523.25 // C5
      const freq2 = 659.25 // E5
      const freq3 = 783.99 // G5

      let sample = 0
      if (t < 0.1) {
        sample = Math.sin(2 * Math.PI * freq1 * t)
      } else if (t < 0.2) {
        sample = Math.sin(2 * Math.PI * freq2 * t)
      } else {
        sample = Math.sin(2 * Math.PI * freq3 * t)
      }

      data[i] = sample * Math.exp(-t * 5) * 0.3
    }

    return buffer
  }

  private createSlideBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.25
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const frequency = 300 + (t / duration) * 400
      const sample = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 8)
      data[i] = sample * 0.25
    }

    return buffer
  }

  private createDingBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.4
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const frequency = 880 // A5
      const sample = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 6)
      data[i] = sample * 0.35
    }

    return buffer
  }

  private createBounceBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const bounce1 = Math.sin(2 * Math.PI * 500 * Math.exp(-t * 15) * t) * Math.exp(-t * 12)
      const bounce2 = Math.sin(2 * Math.PI * 300 * Math.exp(-t * 10) * t) * Math.exp(-t * 8) * 0.5
      data[i] = (bounce1 + bounce2) * 0.3
    }

    return buffer
  }

  private createTypingBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.05
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const noise = Math.random() * 2 - 1
      const click = Math.sin(2 * Math.PI * 2000 * t) * Math.exp(-t * 100)
      data[i] = (noise * 0.3 + click * 0.7) * Math.exp(-t * 50) * 0.2
    }

    return buffer
  }

  private createPageTurnBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const noise = Math.random() * 2 - 1
      const envelope = Math.sin((Math.PI * t) / duration) * Math.exp(-t * 3)
      const swoosh = Math.sin(2 * Math.PI * (200 + t * 500) * t) * 0.3
      data[i] = (noise * 0.5 + swoosh) * envelope * 0.15
    }

    return buffer
  }

  private createSpringBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.4
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Oscillating frequency for spring effect
      const frequency = 600 * Math.exp(-t * 5) * (1 + 0.5 * Math.sin(40 * t))
      const sample = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 8)
      data[i] = sample * 0.35
    }

    return buffer
  }

  private createSparkleBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.5
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Multiple high frequencies for sparkle
      const f1 = Math.sin(2 * Math.PI * 2000 * t) * Math.exp(-t * 10)
      const f2 = Math.sin(2 * Math.PI * 3000 * t) * Math.exp(-t * 12) * 0.5
      const f3 = Math.sin(2 * Math.PI * 4000 * t) * Math.exp(-t * 15) * 0.3
      data[i] = (f1 + f2 + f3) * 0.2
    }

    return buffer
  }

  private createBlopBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.15
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Descending frequency for bubble pop
      const frequency = 800 * Math.exp(-t * 20)
      const sample = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 15)
      data[i] = sample * 0.4
    }

    return buffer
  }

  // Squeak - rubber toy sound (ascending pitch)
  private createSqueakBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.2
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Ascending then descending frequency for squeak
      const freq = 800 + 600 * Math.sin(Math.PI * t / duration)
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 8)
      data[i] = sample * 0.3
    }

    return buffer
  }

  // Bonk - classic cartoon bonk sound
  private createBonkBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.15
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Low thud with quick decay
      const freq = 150 + 100 * Math.exp(-t * 30)
      const noise = (Math.random() * 2 - 1) * 0.3
      const tone = Math.sin(2 * Math.PI * freq * t)
      data[i] = (tone * 0.7 + noise) * Math.exp(-t * 25) * 0.5
    }

    return buffer
  }

  // Woohoo - celebration ascending sound
  private createWoohooBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.4
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Ascending arpeggio C-E-G-C
      const notes = [523.25, 659.25, 783.99, 1046.5]
      const noteIndex = Math.min(Math.floor(t / 0.1), 3)
      const freq = notes[noteIndex]
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-((t % 0.1)) * 15)
      data[i] = sample * 0.25
    }

    return buffer
  }

  // Zip - fast movement sound
  private createZipBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.1
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Quick ascending pitch
      const freq = 200 + 2000 * (t / duration)
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 15)
      data[i] = sample * 0.25
    }

    return buffer
  }

  // Plop - water drop cartoon sound
  private createPlopBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.2
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Descending with wobble
      const freq = 500 * Math.exp(-t * 10) * (1 + 0.3 * Math.sin(30 * t))
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 12)
      data[i] = sample * 0.4
    }

    return buffer
  }

  // Twinkle - magical sparkle cascade
  private createTwinkleBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.6
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Multiple descending sparkles
      const f1 = Math.sin(2 * Math.PI * 2500 * t) * Math.exp(-t * 8)
      const f2 = Math.sin(2 * Math.PI * 3500 * (t - 0.1)) * Math.exp(-(t - 0.1) * 10) * (t > 0.1 ? 1 : 0)
      const f3 = Math.sin(2 * Math.PI * 4500 * (t - 0.2)) * Math.exp(-(t - 0.2) * 12) * (t > 0.2 ? 1 : 0)
      const f4 = Math.sin(2 * Math.PI * 5000 * (t - 0.3)) * Math.exp(-(t - 0.3) * 15) * (t > 0.3 ? 1 : 0)
      data[i] = (f1 + f2 * 0.7 + f3 * 0.5 + f4 * 0.3) * 0.15
    }

    return buffer
  }

  // Squish - squishy cartoon sound
  private createSquishBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.2
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const noise = Math.random() * 2 - 1
      const freq = 200 + 100 * Math.sin(50 * t)
      const tone = Math.sin(2 * Math.PI * freq * t)
      data[i] = (noise * 0.4 + tone * 0.6) * Math.exp(-t * 12) * 0.3
    }

    return buffer
  }

  // Honk - funny cartoon horn
  private createHonkBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.25
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Honk with vibrato
      const vibrato = 1 + 0.02 * Math.sin(30 * t)
      const freq = 350 * vibrato
      const sample = Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(4 * Math.PI * freq * t)
      const envelope = t < 0.05 ? t / 0.05 : Math.exp(-(t - 0.05) * 8)
      data[i] = sample * envelope * 0.25
    }

    return buffer
  }

  // Swoosh - fast pass by
  private createSwooshBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.25
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      const noise = Math.random() * 2 - 1
      // Doppler-like effect
      const freq = 300 + 500 * Math.sin(Math.PI * t / duration)
      const tone = Math.sin(2 * Math.PI * freq * t) * 0.3
      const envelope = Math.sin(Math.PI * t / duration)
      data[i] = (noise * 0.7 + tone) * envelope * 0.2
    }

    return buffer
  }

  // Bubble - underwater bubble
  private createBubbleBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Ascending bubble with wobble
      const freq = 300 + 400 * (t / duration) + 50 * Math.sin(40 * t)
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 5)
      data[i] = sample * 0.3
    }

    return buffer
  }

  // Ping - notification ping
  private createPingBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Clear ping with harmonics
      const f1 = Math.sin(2 * Math.PI * 1200 * t)
      const f2 = Math.sin(2 * Math.PI * 1800 * t) * 0.5
      data[i] = (f1 + f2) * Math.exp(-t * 10) * 0.25
    }

    return buffer
  }

  // Warp - teleport/transition sound
  private createWarpBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.35
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Descending warp with vibrato
      const freq = 1500 * Math.exp(-t * 8) * (1 + 0.2 * Math.sin(60 * t))
      const sample = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 4)
      data[i] = sample * 0.3
    }

    return buffer
  }

  // Coin - single metallic coin drop
  private createCoinBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.3
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Metallic ring with harmonics
      const f1 = Math.sin(2 * Math.PI * 2200 * t)
      const f2 = Math.sin(2 * Math.PI * 3300 * t) * 0.6
      const f3 = Math.sin(2 * Math.PI * 4400 * t) * 0.3
      const ring = (f1 + f2 + f3) * Math.exp(-t * 12)
      // Add initial click
      const click = Math.exp(-t * 100) * 0.5
      data[i] = (ring + click) * 0.25
    }

    return buffer
  }

  // Coins - multiple coins jingling
  private createCoinsBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.5
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Multiple coins at different times
      const coin1 = Math.sin(2 * Math.PI * 2000 * t) * Math.exp(-t * 15)
      const coin2 = Math.sin(2 * Math.PI * 2500 * (t - 0.08)) * Math.exp(-(t - 0.08) * 12) * (t > 0.08 ? 1 : 0)
      const coin3 = Math.sin(2 * Math.PI * 2200 * (t - 0.15)) * Math.exp(-(t - 0.15) * 14) * (t > 0.15 ? 1 : 0)
      const coin4 = Math.sin(2 * Math.PI * 2800 * (t - 0.22)) * Math.exp(-(t - 0.22) * 16) * (t > 0.22 ? 1 : 0)
      const coin5 = Math.sin(2 * Math.PI * 2100 * (t - 0.28)) * Math.exp(-(t - 0.28) * 18) * (t > 0.28 ? 1 : 0)
      data[i] = (coin1 + coin2 * 0.8 + coin3 * 0.7 + coin4 * 0.6 + coin5 * 0.5) * 0.2
    }

    return buffer
  }

  // CashRegister - cha-ching!
  private createCashRegisterBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.4
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // "Cha" - mechanical click
      const cha = (Math.random() * 2 - 1) * Math.exp(-t * 50) * (t < 0.1 ? 1 : 0)
      // "Ching" - bell ring
      const ching = (
        Math.sin(2 * Math.PI * 2500 * (t - 0.1)) +
        Math.sin(2 * Math.PI * 3750 * (t - 0.1)) * 0.5 +
        Math.sin(2 * Math.PI * 5000 * (t - 0.1)) * 0.25
      ) * Math.exp(-(t - 0.1) * 8) * (t > 0.1 ? 1 : 0)
      data[i] = (cha * 0.4 + ching) * 0.3
    }

    return buffer
  }

  // Crypto - digital blockchain/crypto sound
  private createCryptoBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.4
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Digital beeps in sequence
      const beep1 = Math.sin(2 * Math.PI * 1000 * t) * Math.exp(-t * 20) * (t < 0.1 ? 1 : 0)
      const beep2 = Math.sin(2 * Math.PI * 1500 * (t - 0.1)) * Math.exp(-(t - 0.1) * 20) * (t > 0.1 && t < 0.2 ? 1 : 0)
      const beep3 = Math.sin(2 * Math.PI * 2000 * (t - 0.2)) * Math.exp(-(t - 0.2) * 15) * (t > 0.2 ? 1 : 0)
      // Add subtle glitch
      const glitch = Math.sin(2 * Math.PI * 800 * t * (1 + 0.5 * Math.sin(100 * t))) * 0.2 * Math.exp(-t * 10)
      data[i] = (beep1 + beep2 + beep3 + glitch) * 0.25
    }

    return buffer
  }

  // Transaction - digital transaction confirmation
  private createTransactionBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.35
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Two-tone confirmation beep (like bitcoin received)
      const tone1 = Math.sin(2 * Math.PI * 880 * t) * (t < 0.15 ? 1 : 0)
      const tone2 = Math.sin(2 * Math.PI * 1320 * (t - 0.15)) * (t > 0.15 ? 1 : 0)
      const envelope = t < 0.15 ? Math.exp(-t * 5) : Math.exp(-(t - 0.15) * 8)
      data[i] = (tone1 + tone2) * envelope * 0.3
    }

    return buffer
  }

  // Jackpot - winning coins cascade
  private createJackpotBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context")

    const sampleRate = this.audioContext.sampleRate
    const duration = 0.8
    const length = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate
      // Ascending arpeggio with coin sounds
      const notes = [523, 659, 784, 1047, 1319, 1568, 2093]
      let sample = 0
      for (let n = 0; n < notes.length; n++) {
        const noteStart = n * 0.1
        if (t > noteStart) {
          const noteT = t - noteStart
          const freq = notes[n]
          // Coin ring + note
          const ring = Math.sin(2 * Math.PI * freq * 2 * noteT) * 0.3
          const tone = Math.sin(2 * Math.PI * freq * noteT)
          sample += (tone + ring) * Math.exp(-noteT * 8) * (1 - n * 0.1)
        }
      }
      data[i] = sample * 0.15
    }

    return buffer
  }

  play(soundName: string) {
    if (!this.audioContext || !this.sounds.has(soundName)) return

    try {
      const source = this.audioContext.createBufferSource()
      source.buffer = this.sounds.get(soundName)!
      source.connect(this.audioContext.destination)
      source.start()
    } catch {
      // Ignore errors if sound can't play
    }
  }

  async resume() {
    if (this.audioContext?.state === "suspended") {
      await this.audioContext.resume()
    }
  }
}

export const soundManager = new SoundManager()

export type SoundName =
  | "pop"
  | "boing"
  | "whoosh"
  | "click"
  | "success"
  | "hover"
  | "slide"
  | "ding"
  | "bounce"
  | "typing"
  | "pageTurn"
  | "spring"
  | "sparkle"
  | "blop"
  // New cartoon sounds
  | "squeak"
  | "bonk"
  | "woohoo"
  | "zip"
  | "plop"
  | "twinkle"
  | "squish"
  | "honk"
  | "swoosh"
  | "bubble"
  | "ping"
  | "warp"
  // Crypto/Coin sounds
  | "coin"
  | "coins"
  | "cashRegister"
  | "crypto"
  | "transaction"
  | "jackpot"

export function useSound() {
  let soundEnabled = true
  
  // Try to get context, but don't fail if not available
  try {
    const context = useSoundContext()
    soundEnabled = context.soundEnabled
  } catch {
    // Context not available, default to enabled
  }

  const playSound = async (name: SoundName) => {
    if (!soundEnabled) return
    
    await soundManager.init()
    await soundManager.resume()
    soundManager.play(name)
  }

  return { playSound }
}
