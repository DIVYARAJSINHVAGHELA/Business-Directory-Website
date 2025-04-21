import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SubmitSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12">
          <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-blue-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">Congratulations!</h1>
          <p className="text-xl text-gray-300 mb-6">Your business has been successfully listed in our directory.</p>

          <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4 mb-8">
            <p className="text-gray-300">
              Our team will review your submission within 1-2 business days. You'll receive a confirmation email once
              your listing is approved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Return to Home
              </Button>
            </Link>
            <Link href="/businesses">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20 w-full">
                Browse Directory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
