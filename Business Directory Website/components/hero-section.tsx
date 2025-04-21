import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-950 to-slate-950 py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="City skyline" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-slate-950/90"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">Discover Local Businesses</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Find, review, and connect with the best businesses in your area. From restaurants to services, we've got you
          covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/businesses">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore Directory
            </Button>
          </Link>
          <Link href="/submit">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/20">
              Add Your Business
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-heading">1000+</div>
            <div className="text-gray-400">Local Businesses</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-heading">50+</div>
            <div className="text-gray-400">Categories</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-heading">10k+</div>
            <div className="text-gray-400">User Reviews</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-heading">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
