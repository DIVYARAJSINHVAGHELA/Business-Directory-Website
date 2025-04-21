import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ArrowRight } from "lucide-react"
import { featuredBusinessData } from "@/lib/business-data"

export function FeaturedBusinesses() {
  return (
    <div className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white font-heading">Featured Businesses</h2>
        <Link href="/businesses">
          <Button variant="link" className="text-blue-400">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredBusinessData.map((business) => (
          <Card
            key={business.id}
            className="bg-slate-900 border-slate-800 overflow-hidden hover:border-blue-600 transition-colors"
          >
            <div className="relative h-48 w-full">
              <Image src={business.images[0] || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
              <div className="absolute top-2 left-2">
                <Badge className="bg-blue-600">Featured</Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white font-heading">{business.name}</h3>
                <div className="flex items-center bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                  <Star className="h-3 w-3 fill-blue-300 mr-1" />
                  {business.rating}
                </div>
              </div>

              <Badge variant="outline" className="mb-3">
                {business.categories[0]}
              </Badge>

              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{business.description}</p>

              <div className="flex items-start text-gray-400 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{business.address}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">{business.reviewCount} reviews</div>
                <Link href={`/businesses/${business.id}`}>
                  <Button variant="link" className="text-blue-400 p-0">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
