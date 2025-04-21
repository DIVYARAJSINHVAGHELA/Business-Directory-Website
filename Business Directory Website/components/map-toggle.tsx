"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, List } from "lucide-react"

export function MapToggle() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="flex items-center bg-slate-800 rounded-lg p-1">
      <Button
        variant={showMap ? "ghost" : "default"}
        size="sm"
        className={`flex items-center gap-1 ${!showMap ? "bg-blue-600" : ""}`}
        onClick={() => setShowMap(false)}
      >
        <List className="h-4 w-4" />
        List
      </Button>
      <Button
        variant={showMap ? "default" : "ghost"}
        size="sm"
        className={`flex items-center gap-1 ${showMap ? "bg-blue-600" : ""}`}
        onClick={() => setShowMap(true)}
      >
        <MapPin className="h-4 w-4" />
        Map
      </Button>
    </div>
  )
}
