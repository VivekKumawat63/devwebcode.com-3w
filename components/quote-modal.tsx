"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Send, CheckCircle, AlertCircle, X } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          projectDetails: "",
          budget: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      projectDetails: "",
      budget: "",
    })
    setSubmitStatus("idle")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Get Your Quote</DialogTitle>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
              placeholder="Your full name"
            />
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
              className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-white">
              Budget Range
            </Label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select budget</option>
              <option value="10k-25k">₹10,000 - ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-100k">₹50,000 - ₹1,00,000</option>
              <option value="100k+">₹1,00,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-white">
              Project Details *
            </Label>
            <Textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={4}
              className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 resize-none"
              placeholder="Describe your project requirements, timeline, and any specific features..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Get Quote
              </div>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center justify-center text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Quote request sent! We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center justify-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
