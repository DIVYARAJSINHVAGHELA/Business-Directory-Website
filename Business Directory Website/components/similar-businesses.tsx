import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ArrowRight } from "lucide-react"

interface SimilarBusinessesProps {
  category: string
  currentId: string
}

export function SimilarBusinesses({ category, currentId }: SimilarBusinessesProps) {
  // Dummy data for similar businesses
  const similarBusinesses = [
    {
      id: "9",
      name: "Innovate Tech Solutions",
      category: "Technology",
      rating: 4.5,
      reviewCount: 87,
      address: "456 Innovation Way, San Francisco, CA",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: "10",
      name: "Digital Dynamics",
      category: "Technology",
      rating: 4.3,
      reviewCount: 62,
      address: "789 Tech Boulevard, San Francisco, CA",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: "11",
      name: "Future Systems",
      category: "Technology",
      rating: 4.6,
      reviewCount: 94,
      address: "101 Future Avenue, San Francisco, CA",
      image: "/placeholder.svg?height=150&width=300",
    },
  ].filter((business) => business.id !== currentId)

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Similar Businesses</h2>
        <Link href={`/businesses?category=${category}`}>
          <Button variant="link" className="text-blue-400">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarBusinesses.map((business) => (
          <Card
            key={business.id}
            className="bg-slate-900 border-slate-800 overflow-hidden hover:border-blue-600 transition-colors"
          >
            <div className="relative h-40 w-full">
              <Image src={business.image || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">{business.name}</h3>
                <div className="flex items-center bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                  <Star className="h-3 w-3 fill-blue-300 mr-1" />
                  {business.rating}
                </div>
              </div>

              <div className="flex items-start text-gray-400 text-sm mb-3">
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
