import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name can only contain letters, spaces, dots, apostrophes, and hyphens"),
  email: z.string().email("Please enter a valid email address").max(254, "Email address is too long"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

async function sendEmailViaResend(emailData: any) {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set")
  }

  try {
    console.log("[v0] Attempting to send email via Resend API...")

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Using onboarding@resend.dev for unverified domain
        to: ["vivekkumawat184563@gmail.com"],
        subject: `${emailData.subject} - Contact Form Submission`,
        html: `
          <html>
            <body>
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${emailData.name}</p>
              <p><strong>Email:</strong> ${emailData.email}</p>
              <p><strong>Subject:</strong> ${emailData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${emailData.message.replace(/\n/g, "<br>")}</p>
              <hr>
              <p><small>Sent from DevCodeWeb Contact Form at ${new Date().toLocaleString()}</small></p>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] Resend API error response:", {
        status: response.status,
        statusText: response.statusText,
        body: errorData,
      })
      throw new Error(`Resend API error: ${response.status} - ${response.statusText}`)
    }

    const result = await response.json()
    console.log("[v0] Email sent successfully via Resend API. Message ID:", result.id)
    return { success: true, messageId: result.id }
  } catch (error) {
    console.error("[v0] Resend API send failed:", error)
    console.log("[v0] Contact form submission (Resend API failed) - Logging locally:", {
      ...emailData,
      timestamp: new Date().toISOString(),
      recipientEmail: "vivekkumawat184563@gmail.com",
      error: error instanceof Error ? error.message : "Unknown error",
    })
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("[v0] Contact form submission received:", { ...body, message: body.message?.substring(0, 50) + "..." })

    const validatedData = contactSchema.parse(body)
    const { name, email, subject, message } = validatedData

    const sanitizeHtml = (str: string) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;")
        .trim()
    }

    const sanitizedData = {
      name: sanitizeHtml(name),
      email: email.trim().toLowerCase(),
      subject: sanitizeHtml(subject),
      message: sanitizeHtml(message),
    }

    let emailSent = false
    let emailError = null

    try {
      const result = await sendEmailViaResend(sanitizedData)
      emailSent = result.success
      console.log("[v0] Contact form submission sent via Resend API successfully")
    } catch (emailSendError) {
      emailError = emailSendError
      console.error("[v0] Resend API failed:", emailSendError)
      console.log("[v0] Contact form submission logged (Resend API failed):", {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
        recipientEmail: "vivekkumawat184563@gmail.com",
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: emailSent
          ? "Thank you for your message! We will get back to you within 24 hours."
          : "Thank you for your message! We have received it and will get back to you within 24 hours.",
        emailSent,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")
      console.log("[v0] Validation error details:", errorMessages)

      return NextResponse.json(
        {
          success: false,
          error: "Please check your input and try again.",
          details: errorMessages,
        },
        { status: 400 },
      )
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json({ success: false, error: "Invalid request format. Please try again." }, { status: 400 })
    }

    return NextResponse.json(
      {
        success: false,
        error: "We're experiencing technical difficulties. Please try again later or contact us directly.",
        contact: {
          email: "vivekkumawat184563@gmail.com",
          phone: "+91 9785343142",
        },
      },
      { status: 500 },
    )
  }
}
