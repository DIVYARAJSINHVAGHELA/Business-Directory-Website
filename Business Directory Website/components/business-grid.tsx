"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Clock, Heart } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { businessData } from "@/lib/business-data"

export function BusinessGrid() {
  const [businesses] = useState(businessData)
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {businesses.map((business) => (
        <Card
          key={business.id}
          className="bg-slate-900 border-slate-800 overflow-hidden hover:border-blue-600 transition-colors"
        >
          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8"
                onClick={() => toggleFavorite(business.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(business.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
            {business.featured && (
              <div className="absolute top-2 left-2 z-10">
                <Badge className="bg-blue-600">Featured</Badge>
              </div>
            )}
            <div className="relative h-48 w-full">
              <Image src={business.images[0] || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
            </div>
          </div>

          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white font-heading">{business.name}</h3>
                <Badge variant="outline" className="mt-1">
                  {business.categories[0]}
                </Badge>
              </div>
              <div className="flex items-center bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                <Star className="h-3 w-3 fill-blue-300 mr-1" />
                {business.rating}
              </div>
            </div>

            <div className="space-y-2 mt-4 text-gray-400 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{business.hours.monday}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex justify-between">
            <div className="text-sm text-gray-400">{business.reviewCount} reviews</div>
            <Link href={`/businesses/${business.id}`}>
              <Button variant="link" className="text-blue-400 p-0">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
