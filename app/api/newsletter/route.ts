import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = newsletterSchema.parse(body)

    // Here you would typically save to database or send to email service
    // For now, we'll just log it
    console.log("[v0] Newsletter subscription:", email)

    // In production, integrate with services like:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Or save to your database

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    return NextResponse.json({ success: false, message: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
