import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import Image from "next/image"

interface BusinessMapProps {
  location: {
    lat: number
    lng: number
  }
  name: string
  address: string
}

export function BusinessMap({ location, name, address }: BusinessMapProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center font-heading">
          <MapPin className="h-5 w-5 mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 rounded-lg relative overflow-hidden mb-4">
          {/* Map image with marker */}
          <Image src="/map-detail.jpg" alt="Map location" fill className="object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MapPin className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <p className="text-gray-300 mb-4">{address}</p>

        <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Navigation className="h-4 w-4" />
          Get Directions
        </Button>
      </CardContent>
    </Card>
  )
}
