"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/20 rounded-full border border-red-500/30">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong!</h1>

        <p className="text-gray-400 mb-8">
          We encountered an unexpected error. Please try refreshing the page or contact us if the problem persists.
        </p>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <div className="text-sm text-gray-500">Error ID: {error.digest}</div>
        </div>
      </div>
    </div>
  )
}
