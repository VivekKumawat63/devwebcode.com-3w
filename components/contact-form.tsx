"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    } else if (formData.subject.trim().length > 200) {
      newErrors.subject = "Subject must be less than 200 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must be less than 2000 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        setSubmitMessage(data.message || "Thank you for your message! We'll get back to you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
        setSubmitMessage(data.details || data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus("idle")
        setSubmitMessage("")
      }, 7000)
    }
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
        <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
                errors.subject ? "border-red-500 focus:border-red-500" : ""
              }`}
              placeholder="What is this regarding?"
            />
            {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 resize-none ${
                errors.message ? "border-red-500 focus:border-red-500" : ""
              }`}
              placeholder="Tell us about your project, timeline, and any specific requirements..."
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            <p className="text-gray-500 text-sm text-right">{formData.message.length}/2000 characters</p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </div>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-start text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm text-green-300 mt-1">{submitMessage}</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-start text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm text-red-300 mt-1">{submitMessage}</p>
                <p className="text-sm text-red-300 mt-2">
                  You can also reach us directly at{" "}
                  <a href="mailto:vivekkumawat184563@gmail.com" className="underline hover:text-red-200">
                    vivekkumawat184563@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+919785343142" className="underline hover:text-red-200">
                    +91 9785343142
                  </a>
                </p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
