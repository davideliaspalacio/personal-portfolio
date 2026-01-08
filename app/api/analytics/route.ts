import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { initViewsTable, recordPageView, getPageViewStats } from "@/lib/db"

// Helper to create a simple hash from IP + User Agent
function createVisitorHash(ip: string, userAgent: string): string {
  const str = `${ip}-${userAgent}`
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(16)
}

// GET: Obtener estadísticas
export async function GET() {
  try {
    await initViewsTable()
    const stats = await getPageViewStats()
    
    return NextResponse.json({
      visitors: Number(stats.unique_visitors) || 0,
      pageViews: Number(stats.total_views) || 0,
      configured: true,
    })
  } catch (error) {
    console.error("Failed to fetch analytics:", error)
    return NextResponse.json({
      visitors: 0,
      pageViews: 0,
      configured: false,
      error: true,
    })
  }
}

// POST: Registrar una visita
export async function POST() {
  try {
    await initViewsTable()
    
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"
    const userAgent = headersList.get("user-agent") || "unknown"
    
    const visitorHash = createVisitorHash(ip, userAgent)
    await recordPageView(visitorHash)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to record page view:", error)
    return NextResponse.json({ success: false, error: true })
  }
}

