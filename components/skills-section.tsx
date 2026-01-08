"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeJsIcon,
  NestJsIcon,
  ReduxIcon,
  ZustandIcon,
  TailwindIcon,
  GraphQLIcon,
  RestApiIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  N8nIcon,
  BitcoinIcon,
  EthereumIcon,
  SolidityIcon,
  MetaMaskIcon,
  EthersIcon,
  WagmiIcon,
  HardhatIcon,
  WalletConnectIcon,
  RainbowIcon,
  // Frontend libraries
  ShadcnIcon,
  // Backend
  PythonIcon,
  ExpressIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  PrismaIcon,
  SupabaseIcon,
  FirebaseIcon,
  // Tools & AI
  CursorIcon,
  ClaudeIcon,
  ChatGPTIcon,
  VSCodeIcon,
  VercelIcon,
  NotionIcon,
  PostmanIcon,
  DockerIcon,
  SlackIcon,
  AzureDevOpsIcon,
  V0Icon,
} from "./svg-icons"
import { useSound } from "@/lib/sounds"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    color: "bg-playful-blue",
    lightColor: "bg-playful-blue/20",
    borderColor: "border-playful-blue",
    textColor: "text-playful-blue",
    skills: [
      { name: "React", Icon: ReactIcon, years: "2.5+" },
      { name: "Next.js", Icon: NextJsIcon, years: "2+" },
      { name: "TypeScript", Icon: TypeScriptIcon, years: "2.5+" },
      { name: "JavaScript", Icon: JavaScriptIcon, years: "3+" },
      { name: "Tailwind", Icon: TailwindIcon, years: "2+" },
      { name: "Redux", Icon: ReduxIcon, years: "1+" },
      { name: "Zustand", Icon: ZustandIcon, years: "1+" },
      { name: "shadcn/ui", Icon: ShadcnIcon, years: "1+" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    color: "bg-playful-green",
    lightColor: "bg-playful-green/20",
    borderColor: "border-playful-green",
    textColor: "text-playful-green",
    skills: [
      { name: "Node.js", Icon: NodeJsIcon, years: "2+" },
      { name: "NestJS", Icon: NestJsIcon, years: "1+" },
      { name: "REST APIs", Icon: RestApiIcon, years: "2.5+" },
      { name: "GraphQL", Icon: GraphQLIcon, years: "1.5+" },
      { name: "MongoDB", Icon: MongoDBIcon, years: "1.5+" },
      { name: "PostgreSQL", Icon: PostgreSQLIcon, years: "1+" },
      { name: "Prisma", Icon: PrismaIcon, years: "1+" },
      { name: "Supabase", Icon: SupabaseIcon, years: "1+" },
      { name: "Firebase", Icon: FirebaseIcon, years: "1+" },
      { name: "n8n", Icon: N8nIcon, years: "1+" },
      { name: "Python", Icon: PythonIcon, years: "1+" },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain / Web3",
    color: "bg-playful-purple",
    lightColor: "bg-playful-purple/20",
    borderColor: "border-playful-purple",
    textColor: "text-playful-purple",
    hideYears: true,
    skills: [
      { name: "MetaMask", Icon: MetaMaskIcon, years: "" },
      { name: "ethers.js", Icon: EthersIcon, years: "" },
      { name: "wagmi", Icon: WagmiIcon, years: "" },
      { name: "WalletConnect", Icon: WalletConnectIcon, years: "" },
      { name: "RainbowKit", Icon: RainbowIcon, years: "" },
      { name: "Ethereum", Icon: EthereumIcon, years: "", learning: true, realExperience: true },
      { name: "Solidity", Icon: SolidityIcon, years: "", learning: true },
      { name: "Hardhat", Icon: HardhatIcon, years: "", learning: true },
      { name: "Bitcoin", Icon: BitcoinIcon, years: "", learning: true },
    ],
  },
  {
    id: "tools",
    name: "Tools & AI",
    color: "bg-playful-orange",
    lightColor: "bg-playful-orange/20",
    borderColor: "border-playful-orange",
    textColor: "text-playful-orange",
    hideYears: true,
    skills: [
      { name: "Cursor", Icon: CursorIcon, years: "" },
      { name: "Claude AI", Icon: ClaudeIcon, years: "" },
      { name: "ChatGPT", Icon: ChatGPTIcon, years: "" },
      { name: "VS Code", Icon: VSCodeIcon, years: "" },
      { name: "Git", Icon: GitIcon, years: "" },
      { name: "GitHub", Icon: GitHubIcon, years: "" },
      { name: "Vercel", Icon: VercelIcon, years: "" },
      { name: "Azure DevOps", Icon: AzureDevOpsIcon, years: "" },
      { name: "Figma", Icon: FigmaIcon, years: "" },
      { name: "Postman", Icon: PostmanIcon, years: "" },
      { name: "Docker", Icon: DockerIcon, years: "" },
      { name: "Notion", Icon: NotionIcon, years: "" },
      { name: "Slack", Icon: SlackIcon, years: "" },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend") // Default to frontend
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { playSound } = useSound()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          playSound("twinkle")
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [playSound])

  const handleCategoryHover = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId)
      // Use coin sounds for blockchain category
      if (categoryId === "blockchain") {
        playSound("coins")
      } else {
        playSound("swoosh")
      }
    }
  }

  const handleSkillHover = (skillName: string) => {
    setHoveredSkill(skillName)
    // Check if it's a crypto skill
    const cryptoSkills = [
      "Ethereum", "MetaMask", "ethers.js", "wagmi", "viem", "Solidity", 
      "Hardhat", "WalletConnect", "RainbowKit", "Alchemy", "Polygon", 
      "Chainlink", "OpenZeppelin", "Bitcoin", "Web3", "Wallets"
    ]
    if (cryptoSkills.includes(skillName)) {
      playSound("coin")
    } else {
      playSound("squeak")
    }
  }

  const activeCategoryData = skillCategories.find((c) => c.id === activeCategory)!

  return (
    <section ref={sectionRef} className="relative py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-playful-yellow" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
          <h2 className="text-4xl md:text-5xl font-sans text-center">My Superpowers</h2>
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-playful-blue animate-pulse" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
        </div>

        <div className="space-y-4">
          {skillCategories.map((category, categoryIndex) => {
            const isActive = activeCategory === category.id

            return (
              <motion.div
                key={category.id}
                className={`relative rounded-3xl border-3 border-foreground overflow-hidden transition-colors duration-300 ${
                  isActive ? category.color : "bg-background"
                }`}
                initial={false}
                animate={{
                  boxShadow: isActive ? "6px 6px 0px 0px rgba(0,0,0,1)" : "3px 3px 0px 0px rgba(0,0,0,1)",
                }}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header - Hover to expand */}
                <div
                  className={`flex items-center justify-between p-5 cursor-pointer transition-all duration-300 ${
                    isActive ? "" : "hover:bg-muted/50"
                  }`}
                  onMouseEnter={() => handleCategoryHover(category.id)}
                >
                  <div className="flex items-center gap-4">
                    {/* Category Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 border-foreground ${
                        isActive ? "bg-background" : category.color
                      }`}
                    >
                      {category.skills.length > 0 &&
                        (() => {
                          const FirstIcon = category.skills[0].Icon
                          return <FirstIcon className="w-7 h-7" />
                        })()}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold">{category.name}</h3>
                      <p className="text-sm opacity-70 font-sans">{category.skills.length} skills</p>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center ${
                      isActive ? "bg-background" : category.color
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Skills Grid - Animated accordion */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                                delay: index * 0.05,
                              }}
                              className="relative group cursor-pointer"
                              onMouseEnter={() => handleSkillHover(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <motion.div
                                className="bg-background rounded-2xl p-4 border-3 border-foreground flex flex-col items-center min-h-[120px] md:min-h-[140px]"
                                whileHover={{
                                  scale: 1.05,
                                  rotate: -2,
                                  boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                              >
                                {/* Icon */}
                                <motion.div
                                  className="mb-2 shrink-0"
                                  animate={
                                    hoveredSkill === skill.name
                                      ? {
                                          rotate: [0, -10, 10, -10, 0],
                                          transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
                                        }
                                      : {}
                                  }
                                >
                                  <skill.Icon className="w-8 h-8 md:w-10 md:h-10" />
                                </motion.div>

                                {/* Skill name */}
                                <h4 className="text-xs md:text-sm font-sans font-bold text-center truncate w-full">
                                  {skill.name}
                                </h4>

                                {/* Years badge - hidden for blockchain/tools category */}
                                {!("hideYears" in category && category.hideYears) && skill.years && (
                                  <div className="mt-1 px-2 py-0.5 bg-foreground/10 rounded-full">
                                    <span className="text-[10px] md:text-xs font-sans font-medium opacity-70">
                                      {skill.years} years
                                    </span>
                                  </div>
                                )}

                                {/* Learning badge - for skills being learned */}
                                {"learning" in skill && skill.learning && (
                                  <div className={`mt-1 px-2 py-0.5 rounded-full border ${
                                    "realExperience" in skill && skill.realExperience
                                      ? "bg-playful-green/30 border-playful-green"
                                      : "bg-playful-yellow/30 border-playful-yellow"
                                  }`}>
                                    <span className="text-[9px] md:text-[10px] font-sans font-medium leading-tight">
                                      {"realExperience" in skill && skill.realExperience
                                        ? "🚀 Learning + Products"
                                        : "📖 Learning"}
                                    </span>
                                  </div>
                                )}
                              </motion.div>

                              {/* Badge on hover - Learning or Pro */}
                              <AnimatePresence>
                                {hoveredSkill === skill.name && (
                                  <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 12 }}
                                    exit={{ scale: 0 }}
                                    className={`absolute -top-2 -right-2 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full border-2 border-foreground font-sans font-bold z-10 ${
                                      "learning" in skill && skill.learning
                                        ? "realExperience" in skill && skill.realExperience
                                          ? "bg-playful-green text-foreground"
                                          : "bg-playful-yellow text-foreground"
                                        : "bg-playful-red"
                                    }`}
                                  >
                                    {"learning" in skill && skill.learning 
                                      ? "realExperience" in skill && skill.realExperience
                                        ? "Building! 🔨"
                                        : "Learning 📚" 
                                      : "Pro!"}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block bg-background border-3 border-foreground rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-sans font-medium mb-4">My focus is always on</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Clean Architecture", "Scalability", "Reliability", "Long-term Maintainability"].map((item, i) => (
                <motion.span
                  key={item}
                  className="px-4 py-2 bg-playful-yellow rounded-full border-2 border-foreground font-sans font-bold text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
