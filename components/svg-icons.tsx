"use client"

import Image from "next/image"

// Tech Icons from react-icons with brand colors
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs,
  SiNestjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiBitcoin,
  SiEthereum,
  SiSolidity,
  SiWeb3Dotjs,
  SiRedux,
  SiTailwindcss,
  SiGraphql,
  SiN8N,
  SiOpenzeppelin,
  SiChainlink,
  SiPolygon,
  SiPolkadot,
  SiOpensea,
  SiBinance,
  // Tools & AI
  SiVercel,
  SiNotion,
  SiPostman,
  SiDocker,
  SiSlack,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si"
import { BiWallet } from "react-icons/bi"

// React Icon - Cyan
export function ReactIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiReact className={className} style={{ color: "#61DAFB" }} />
}

// Next.js Icon - Black/White
export function NextJsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} bg-black rounded-full flex items-center justify-center p-1`}>
      <SiNextdotjs className="w-full h-full" style={{ color: "#ffffff" }} />
    </div>
  )
}

// TypeScript Icon - Blue
export function TypeScriptIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiTypescript className={className} style={{ color: "#3178C6" }} />
}

// JavaScript Icon - Yellow
export function JavaScriptIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiJavascript className={className} style={{ color: "#F7DF1E" }} />
}

// Node.js Icon - Green
export function NodeJsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiNodedotjs className={className} style={{ color: "#339933" }} />
}

// NestJS Icon - Red
export function NestJsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiNestjs className={className} style={{ color: "#E0234E" }} />
}

// Git Icon - Orange/Red
export function GitIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiGit className={className} style={{ color: "#F05032" }} />
}

// GitHub Icon
export function GitHubIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiGithub className={className} />
}

// Figma Icon - Multi-color (using brand red)
export function FigmaIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiFigma className={className} style={{ color: "#F24E1E" }} />
}

// Bitcoin Icon - Orange
export function BitcoinIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiBitcoin className={className} style={{ color: "#F7931A" }} />
}

// Ethereum Icon - Purple/Blue
export function EthereumIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiEthereum className={className} style={{ color: "#627EEA" }} />
}

// Solidity Icon - Gray
export function SolidityIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiSolidity className={className} style={{ color: "#363636" }} />
}

// Web3 Icon - Purple
export function Web3Icon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiWeb3Dotjs className={className} style={{ color: "#F16822" }} />
}

// Wallet Icon - Purple
export function WalletIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <BiWallet className={className} style={{ color: "#8B5CF6" }} />
}

// Redux Icon - Purple
export function ReduxIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiRedux className={className} style={{ color: "#764ABC" }} />
}

// Zustand Icon - Brown (bear) - Custom SVG
export function ZustandIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="45" fill="#443E38" />
      <ellipse cx="35" cy="42" rx="8" ry="10" fill="#1a1a1a" />
      <ellipse cx="65" cy="42" rx="8" ry="10" fill="#1a1a1a" />
      <ellipse cx="37" cy="40" rx="3" ry="4" fill="#fff" />
      <ellipse cx="67" cy="40" rx="3" ry="4" fill="#fff" />
      <ellipse cx="50" cy="58" rx="6" ry="5" fill="#1a1a1a" />
      <path d="M38 68 Q50 78 62 68" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="25" rx="12" ry="10" fill="#443E38" />
      <ellipse cx="75" cy="25" rx="12" ry="10" fill="#443E38" />
    </svg>
  )
}

// Tailwind Icon - Cyan
export function TailwindIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiTailwindcss className={className} style={{ color: "#06B6D4" }} />
}

// REST API Icon - Green (custom)
export function RestApiIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="10" y="20" width="80" height="60" rx="8" fill="#10B981" stroke="#1a1a2e" strokeWidth="3" />
      <path d="M25 40 L40 50 L25 60" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 55 L75 55" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

// GraphQL Icon - Pink
export function GraphQLIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiGraphql className={className} style={{ color: "#E10098" }} />
}

// n8n Icon - Coral/Pink
export function N8nIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiN8N className={className} style={{ color: "#EA4B71" }} />
}

// MetaMask Icon - Orange fox
export function MetaMaskIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Fox head shape */}
      <polygon points="50,8 85,35 75,75 50,90 25,75 15,35" fill="#F6851B" stroke="#1a1a2e" strokeWidth="2" />
      {/* Face darker areas */}
      <polygon points="50,8 65,30 50,45 35,30" fill="#E2761B" />
      <polygon points="35,30 50,45 40,60 25,50" fill="#CD6116" />
      <polygon points="65,30 75,50 60,60 50,45" fill="#CD6116" />
      {/* Eyes */}
      <ellipse cx="38" cy="42" rx="5" ry="6" fill="#1a1a2e" />
      <ellipse cx="62" cy="42" rx="5" ry="6" fill="#1a1a2e" />
      <ellipse cx="39" cy="41" rx="2" ry="2.5" fill="#fff" />
      <ellipse cx="63" cy="41" rx="2" ry="2.5" fill="#fff" />
      {/* Nose */}
      <polygon points="50,52 45,62 55,62" fill="#1a1a2e" />
      {/* Ears */}
      <polygon points="25,30 15,35 25,50" fill="#F6851B" stroke="#1a1a2e" strokeWidth="2" />
      <polygon points="75,30 85,35 75,50" fill="#F6851B" stroke="#1a1a2e" strokeWidth="2" />
    </svg>
  )
}

// Ethers.js Icon - Purple
export function EthersIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#24292E" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M50 18 L50 42 L72 50 Z" fill="#8C8C8C" />
      <path d="M50 18 L28 50 L50 42 Z" fill="#fff" />
      <path d="M50 55 L50 82 L72 54 Z" fill="#8C8C8C" />
      <path d="M50 55 L28 54 L50 82 Z" fill="#fff" />
      <text x="50" y="95" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="monospace">ethers</text>
    </svg>
  )
}

// Wagmi Icon - Black/White
export function WagmiIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#1a1a2e" stroke="#fff" strokeWidth="2" />
      <text x="50" y="58" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold" fontFamily="sans-serif">wagmi</text>
    </svg>
  )
}

// Viem Icon - Green
export function ViemIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#1DB954" stroke="#1a1a2e" strokeWidth="2" />
      <text x="50" y="58" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold" fontFamily="sans-serif">viem</text>
    </svg>
  )
}

// Alchemy Icon - Blue
export function AlchemyIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#0C0C0E" stroke="#363FF9" strokeWidth="3" />
      {/* Alchemy flask/beaker */}
      <path d="M40 25 L40 45 L25 75 Q22 82 30 85 L70 85 Q78 82 75 75 L60 45 L60 25 Z" fill="#363FF9" stroke="#fff" strokeWidth="2" />
      <rect x="38" y="20" width="24" height="8" rx="2" fill="#363FF9" stroke="#fff" strokeWidth="1" />
      {/* Bubbles */}
      <circle cx="45" cy="65" r="4" fill="#fff" opacity="0.8" />
      <circle cx="55" cy="72" r="3" fill="#fff" opacity="0.6" />
      <circle cx="50" cy="60" r="2" fill="#fff" opacity="0.7" />
    </svg>
  )
}

// Infura Icon - Orange/Red
export function InfuraIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#FF6B4A" stroke="#1a1a2e" strokeWidth="2" />
      {/* Flame/Fire icon */}
      <path d="M50 20 Q65 40 55 55 Q65 50 60 70 Q55 85 50 85 Q45 85 40 70 Q35 50 45 55 Q35 40 50 20 Z" fill="#fff" />
    </svg>
  )
}

// OpenZeppelin Icon
export function OpenZeppelinIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiOpenzeppelin className={className} style={{ color: "#4E5EE4" }} />
}

// Chainlink Icon
export function ChainlinkIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiChainlink className={className} style={{ color: "#375BD2" }} />
}

// Polygon/Matic Icon
export function PolygonIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <SiPolygon className={className} style={{ color: "#8247E5" }} />
}

// Hardhat Icon - Yellow
export function HardhatIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#FFF100" stroke="#1a1a2e" strokeWidth="2" />
      {/* Hardhat shape */}
      <ellipse cx="50" cy="55" rx="30" ry="15" fill="#1a1a2e" />
      <path d="M25 55 Q25 35 50 30 Q75 35 75 55" fill="#FFF100" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="30" y="55" width="40" height="8" fill="#1a1a2e" />
      {/* Light on hardhat */}
      <rect x="45" y="35" width="10" height="12" rx="2" fill="#fff" stroke="#1a1a2e" strokeWidth="1" />
    </svg>
  )
}

// Rainbow Kit Icon
export function RainbowIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#1a1a2e" stroke="#fff" strokeWidth="2" />
      {/* Rainbow arcs */}
      <path d="M20 70 Q20 30 50 30 Q80 30 80 70" fill="none" stroke="#FF0000" strokeWidth="5" />
      <path d="M27 70 Q27 37 50 37 Q73 37 73 70" fill="none" stroke="#FF7F00" strokeWidth="5" />
      <path d="M34 70 Q34 44 50 44 Q66 44 66 70" fill="none" stroke="#FFFF00" strokeWidth="5" />
      <path d="M41 70 Q41 51 50 51 Q59 51 59 70" fill="none" stroke="#00FF00" strokeWidth="5" />
      <path d="M48 70 Q48 58 50 58 Q52 58 52 70" fill="none" stroke="#0000FF" strokeWidth="5" />
    </svg>
  )
}

// WalletConnect Icon
export function WalletConnectIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#3B99FC" stroke="#1a1a2e" strokeWidth="2" />
      {/* WalletConnect logo */}
      <path
        d="M28 42 Q50 25 72 42" 
        fill="none" 
        stroke="#fff"
        strokeWidth="5" 
        strokeLinecap="round"
      />
      <path 
        d="M35 50 Q50 38 65 50" 
        fill="none"
        stroke="#fff" 
        strokeWidth="5" 
        strokeLinecap="round"
      />
    </svg>
  )
}

// Framer Motion Icon - Using devicon
export function FramerMotionIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-framermotion-original" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// React Query / TanStack Query Icon
export function ReactQueryIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#FF4154" stroke="#1a1a2e" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="30" ry="12" stroke="#FFD94C" strokeWidth="4" fill="none" />
      <ellipse cx="50" cy="50" rx="30" ry="12" stroke="#FFD94C" strokeWidth="4" fill="none" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="30" ry="12" stroke="#FFD94C" strokeWidth="4" fill="none" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="6" fill="#FFD94C" />
    </svg>
  )
}

// SWR Icon
export function SWRIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#000" stroke="#fff" strokeWidth="2" />
      <text x="50" y="60" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" fontFamily="sans-serif">SWR</text>
    </svg>
  )
}

// Radix UI Icon
export function RadixIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#1a1a2e" stroke="#fff" strokeWidth="2" />
      <circle cx="50" cy="35" r="15" fill="none" stroke="#fff" strokeWidth="4" />
      <path d="M35 50 L35 80 L50 65 L65 80 L65 50" fill="#fff" />
    </svg>
  )
}

// shadcn/ui Icon
export function ShadcnIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#000" stroke="#fff" strokeWidth="2" />
      <path d="M25 75 L50 25 L75 75" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Cursor IDE Icon
export function CursorIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="16" fill="#000" stroke="#fff" strokeWidth="2" />
      <path d="M30 30 L30 70 L45 55 L60 75 L68 68 L52 48 L70 30 Z" fill="#fff" />
    </svg>
  )
}

// Claude AI Icon - Using Anthropic official icon
export function ClaudeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-[#D97757] p-2`}>
      <SiAnthropic style={{ color: "#fff", width: "100%", height: "100%" }} />
    </div>
  )
}

// ChatGPT / OpenAI Icon - Using official OpenAI icon
export function ChatGPTIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-[#10A37F] p-2`}>
      <SiOpenai style={{ color: "#fff", width: "100%", height: "100%" }} />
    </div>
  )
}

// VS Code Icon - Using devicon
export function VSCodeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-vscode-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Vercel Icon - Using official icon
export function VercelIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-full bg-black p-2`}>
      <SiVercel style={{ color: "#fff", width: "100%", height: "100%" }} />
    </div>
  )
}

// Notion Icon - Using official icon
export function NotionIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <SiNotion style={{ color: "#000", width: "100%", height: "100%" }} />
    </div>
  )
}

// Postman Icon - Using official icon
export function PostmanIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <SiPostman style={{ color: "#FF6C37", width: "100%", height: "100%" }} />
    </div>
  )
}

// Docker Icon - Using official icon
export function DockerIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <SiDocker style={{ color: "#2496ED", width: "100%", height: "100%" }} />
    </div>
  )
}

// Python Icon - Using devicon
export function PythonIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-python-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Express Icon - Using devicon
export function ExpressIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-express-original" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// MongoDB Icon - Using devicon
export function MongoDBIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-mongodb-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// PostgreSQL Icon - Using devicon
export function PostgreSQLIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-postgresql-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Prisma Icon - Using devicon
export function PrismaIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-prisma-original" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Supabase Icon - Using devicon
export function SupabaseIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-supabase-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Firebase Icon - Using devicon
export function FirebaseIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-firebase-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Slack Icon - Using official icon
export function SlackIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <SiSlack style={{ color: "#4A154B", width: "100%", height: "100%" }} />
    </div>
  )
}

// Jira Icon
export function JiraIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#0052CC" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M50 20 L70 50 L50 50 L50 80 L30 50 L50 50 Z" fill="#fff" />
    </svg>
  )
}

// Linear Icon
export function LinearIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#5E6AD2" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M25 50 A25 25 0 0 1 50 25 L50 50 Z" fill="#fff" />
      <circle cx="50" cy="50" r="10" fill="#5E6AD2" stroke="#fff" strokeWidth="3" />
    </svg>
  )
}

// Azure DevOps Icon - Using devicon
export function AzureDevOpsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-azuredevops-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// v0 by Vercel Icon
export function V0Icon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="8" y="8" width="84" height="84" rx="12" fill="#000" stroke="#fff" strokeWidth="2" />
      <text x="50" y="62" textAnchor="middle" fontSize="32" fill="#fff" fontWeight="bold" fontFamily="sans-serif">v0</text>
    </svg>
  )
}

// Storybook Icon - Using devicon
export function StorybookIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-storybook-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

export function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  )
}

export function StarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

export function RocketIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M70 20 Q90 40 70 80 L50 90 L30 80 Q10 40 30 20 Q50 0 70 20 Z"
        fill="#FF6B6B"
        stroke="#1a1a2e"
        strokeWidth="3"
      />
      <circle cx="50" cy="45" r="12" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M35 85 L30 100 L50 95 L70 100 L65 85" fill="#FFE66D" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M20 55 L10 50 L15 70 L30 75" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M80 55 L90 50 L85 70 L70 75" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="2" />
    </svg>
  )
}

export function CoffeeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M20 35 L25 85 Q25 90 30 90 L60 90 Q65 90 65 85 L70 35 Z"
        fill="#8B4513"
        stroke="#1a1a2e"
        strokeWidth="3"
      />
      <path d="M70 45 L80 45 Q90 45 90 55 L90 65 Q90 75 80 75 L70 75" stroke="#1a1a2e" strokeWidth="3" fill="none" />
      <path d="M30 50 Q35 40 45 50 Q55 60 60 50" stroke="#fff" strokeWidth="3" opacity="0.5" />
      <path d="M35 25 Q35 15 40 20 Q45 25 45 15" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 25 Q50 15 55 20 Q60 25 60 15" stroke="#888" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function HeartIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path
        d="M50 85 Q10 55 10 35 Q10 15 30 15 Q45 15 50 30 Q55 15 70 15 Q90 15 90 35 Q90 55 50 85 Z"
        fill="#FF6B6B"
        stroke="#1a1a2e"
        strokeWidth="3"
      />
    </svg>
  )
}

export function CodeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="10" y="20" width="80" height="60" rx="8" fill="#292929" stroke="#1a1a2e" strokeWidth="3" />
      <circle cx="25" cy="32" r="4" fill="#FF6B6B" />
      <circle cx="38" cy="32" r="4" fill="#FFE66D" />
      <circle cx="51" cy="32" r="4" fill="#4ECDC4" />
      <path d="M30 55 L20 65 L30 75" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 55 L80 65 L70 75" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 50 L45 80" stroke="#FFE66D" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function GlobeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="40" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="3" />
      <ellipse cx="50" cy="50" rx="20" ry="40" stroke="#1a1a2e" strokeWidth="2" fill="none" />
      <path d="M10 50 L90 50" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M15 30 Q50 35 85 30" stroke="#1a1a2e" strokeWidth="2" fill="none" />
      <path d="M15 70 Q50 65 85 70" stroke="#1a1a2e" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function LightningIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  )
}

export function WaveHandIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Motion lines */}
      <path d="M8 25 Q5 30 10 35" stroke="#FFD93D" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M12 18 Q8 22 14 28" stroke="#FFD93D" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M5 38 Q2 42 8 46" stroke="#FFD93D" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
      
      {/* Palm base */}
      <ellipse cx="52" cy="72" rx="22" ry="18" fill="#FFCA28" stroke="#1a1a2e" strokeWidth="2.5" />
      
      {/* Thumb */}
      <path 
        d="M28 58 Q22 52 26 44 Q30 38 38 42 L42 52 Q38 60 32 62 Z" 
        fill="#FFCA28" 
        stroke="#1a1a2e" 
        strokeWidth="2.5" 
      />
      
      {/* Index finger */}
      <path 
        d="M38 55 L34 28 Q33 18 42 16 Q51 15 52 25 L52 50" 
        fill="#FFCA28" 
        stroke="#1a1a2e" 
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Middle finger */}
      <path 
        d="M52 50 L52 20 Q52 10 62 10 Q72 10 72 20 L70 48" 
        fill="#FFCA28" 
        stroke="#1a1a2e" 
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Ring finger */}
      <path 
        d="M70 48 L72 24 Q73 15 82 16 Q90 18 89 28 L85 52" 
        fill="#FFCA28" 
        stroke="#1a1a2e" 
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Pinky finger */}
      <path
        d="M85 52 L88 35 Q89 28 95 30 Q100 33 98 42 L92 58" 
        fill="#FFCA28" 
        stroke="#1a1a2e"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Finger details/creases */}
      <path d="M40 35 Q42 36 44 35" stroke="#E5A800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M58 28 Q62 29 66 28" stroke="#E5A800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M78 32 Q81 33 84 32" stroke="#E5A800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M92 40 Q94 41 96 40" stroke="#E5A800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* Palm crease */}
      <path d="M38 65 Q52 58 72 65" stroke="#E5A800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* Wrist */}
      <rect x="42" y="85" width="20" height="12" rx="4" fill="#FFCA28" stroke="#1a1a2e" strokeWidth="2" />
      
      {/* Sparkle accents */}
      <circle cx="18" cy="15" r="2" fill="#FFD93D" />
      <circle cx="22" cy="42" r="1.5" fill="#FFD93D" opacity="0.7" />
    </svg>
  )
}

export function ColombiaFlagIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className}>
      <rect width="48" height="16" fill="#FCD116" />
      <rect y="16" width="48" height="8" fill="#003893" />
      <rect y="24" width="48" height="8" fill="#CE1126" />
    </svg>
  )
}

export function BlockchainIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="35" y="10" width="30" height="25" rx="3" fill="#8B5CF6" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="10" y="38" width="30" height="25" rx="3" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="60" y="38" width="30" height="25" rx="3" fill="#FF6B6B" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="35" y="68" width="30" height="25" rx="3" fill="#FFE66D" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M50 35 L25 38" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M50 35 L75 38" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M25 63 L50 68" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M75 63 L50 68" stroke="#1a1a2e" strokeWidth="2" />
    </svg>
  )
}

export function BriefcaseIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="15" y="30" width="70" height="55" rx="8" fill="#4ECDC4" stroke="#1a1a2e" strokeWidth="3" />
      <path d="M35 30 L35 20 Q35 15 40 15 L60 15 Q65 15 65 20 L65 30" stroke="#1a1a2e" strokeWidth="3" fill="none" />
      <rect x="40" y="50" width="20" height="15" rx="3" fill="#FFE66D" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M15 50 L40 50" stroke="#1a1a2e" strokeWidth="2" />
      <path d="M60 50 L85 50" stroke="#1a1a2e" strokeWidth="2" />
    </svg>
  )
}

export function CryptomexIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative overflow-hidden rounded-xl`}>
      <Image
        src="/cryptomex_logo.jpeg"
        alt="Cryptomex"
        fill
        className="object-cover"
      />
    </div>
  )
}

export function BlumerIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative overflow-hidden rounded-xl`}>
      <Image
        src="/somosblumer_logo.jpeg"
        alt="Somos Blumer"
        fill
        className="object-cover"
      />
    </div>
  )
}

export function VirtualTecIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#64748B" stroke="#1a1a2e" strokeWidth="3" />
      <rect x="25" y="25" width="20" height="20" rx="4" fill="#94A3B8" />
      <rect x="55" y="25" width="20" height="20" rx="4" fill="#94A3B8" />
      <rect x="25" y="55" width="20" height="20" rx="4" fill="#94A3B8" />
      <rect x="55" y="55" width="20" height="20" rx="4" fill="#94A3B8" />
      <circle cx="35" cy="35" r="5" fill="#1a1a2e" />
      <circle cx="65" cy="35" r="5" fill="#1a1a2e" />
    </svg>
  )
}

export function PlayIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="45" fill="#FF6B6B" stroke="#1a1a2e" strokeWidth="3" />
      <path d="M40 30 L75 50 L40 70 Z" fill="#fff" stroke="#1a1a2e" strokeWidth="2" />
    </svg>
  )
}

export function QuoteIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M20 30 Q10 30 10 45 L10 55 Q10 70 25 70 L30 70 Q45 70 45 55 L45 45 Q45 20 20 30 Z" />
      <path d="M60 30 Q50 30 50 45 L50 55 Q50 70 65 70 L70 70 Q85 70 85 55 L85 45 Q85 20 60 30 Z" />
    </svg>
  )
}

export function ArrowRightIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12 L19 12" />
      <path d="M12 5 L19 12 L12 19" />
    </svg>
  )
}

export function CloseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M6 6 L18 18" />
      <path d="M18 6 L6 18" />
    </svg>
  )
}

export function PointerIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M25 15 L25 75 L40 60 L55 85 L65 80 L50 55 L70 55 Z" fill="#FFE66D" stroke="#1a1a2e" strokeWidth="3" />
    </svg>
  )
}

export function LinkedInIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function ExternalLinkIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// Jest Icon - Using devicon
export function JestIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <i className="devicon-jest-plain colored" style={{ fontSize: "100%" }}></i>
    </div>
  )
}

// Floating Tech Icons for Hero
export function FloatingReactIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <ReactIcon className={className} />
}

export function FloatingNextIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <NextJsIcon className={className} />
}

export function FloatingTSIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <TypeScriptIcon className={className} />
}

export function FloatingJSIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <JavaScriptIcon className={className} />
}

export function FloatingNodeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <NodeJsIcon className={className} />
}

export function FloatingGitIcon({ className = "w-12 h-12" }: { className?: string }) {
  return <GitIcon className={className} />
}

export function TimelineIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M20 20 L20 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="20" cy="25" r="8" fill="#4ECDC4" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="50" r="8" fill="#FFE66D" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="75" r="8" fill="#FF6B6B" stroke="currentColor" strokeWidth="2" />
      <path d="M35 25 L80 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 50 L70 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 75 L60 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
