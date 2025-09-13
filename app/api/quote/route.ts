import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectDetails, budget } = body

    // Basic validation
    if (!name || !email || !projectDetails) {
      return NextResponse.json({ error: "Name, email, and project details are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: name.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim(),
      email: email.trim(),
      projectDetails: projectDetails.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim(),
      budget: budget?.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim() || "Not specified",
    }

    // Here you would typically send an email
    // For now, we'll log the submission
    console.log("Quote request submission:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      type: "quote_request",
    })

    // In a real application, you would send an email to vivekkumawat184563@gmail.com
    // using a service like Nodemailer, SendGrid, or similar

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
