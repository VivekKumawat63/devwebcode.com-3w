import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const analyticsSchema = z.object({
  event: z.string(),
  page: z.string(),
  timestamp: z.string().optional(),
  userId: z.string().optional(),
  properties: z.record(z.any()).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const analyticsData = analyticsSchema.parse(body)

    // Add timestamp if not provided
    if (!analyticsData.timestamp) {
      analyticsData.timestamp = new Date().toISOString()
    }

    // Here you would typically send to analytics service
    console.log("[v0] Analytics event:", analyticsData)

    // In production, integrate with services like:
    // - Google Analytics
    // - Mixpanel
    // - Amplitude
    // - PostHog
    // - Or save to your database

    return NextResponse.json({
      success: true,
      message: "Analytics event recorded",
    })
  } catch (error) {
    console.error("[v0] Analytics error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid analytics data" }, { status: 400 })
    }

    return NextResponse.json({ success: false, message: "Failed to record analytics event" }, { status: 500 })
  }
}
