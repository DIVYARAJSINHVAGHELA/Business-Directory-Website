"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { MapPin, Maximize2, Minimize2 } from "lucide-react"
import Image from "next/image"

export function MapSection() {
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="bg-slate-900 border-slate-800 p-4 mt-12 mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white font-heading">Businesses Near You</h2>
        <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)}>
          {expanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </Button>
      </div>

      {loading ? (
        <Skeleton className={`w-full ${expanded ? "h-[600px]" : "h-[300px]"}`} />
      ) : (
        <div
          ref={mapRef}
          className={`w-full ${expanded ? "h-[600px]" : "h-[300px]"} rounded-lg relative overflow-hidden`}
        >
          {/* Map background image */}
          <Image src="/map-bg.jpg" alt="Map" fill className="object-cover" />

          {/* Sample map markers */}
          <div className="absolute top-1/4 left-1/3">
            <div className="relative">
              <MapPin className="h-6 w-6 text-red-500" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Ecliptic Tech Solutions
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2">
            <div className="relative">
              <MapPin className="h-6 w-6 text-blue-500" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Urban Fitness Center
              </div>
            </div>
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <div className="relative">
              <MapPin className="h-6 w-6 text-green-500" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Metro Dental Clinic
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-400">
        <p>Showing businesses in your current area. Click on a marker to view business details.</p>
      </div>
    </Card>
  )
}
