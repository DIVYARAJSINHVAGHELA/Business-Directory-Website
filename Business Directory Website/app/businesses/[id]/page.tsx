import Image from "next/image"
import { BusinessDetails } from "@/components/business-details"
import { BusinessHours } from "@/components/business-hours"
import { BusinessMap } from "@/components/business-map"
import { ReviewSection } from "@/components/review-section"
import { SimilarBusinesses } from "@/components/similar-businesses"
import { BusinessContact } from "@/components/business-contact"
import { BusinessServices } from "@/components/business-services"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import { InquiryForm } from "@/components/inquiry-form"
import { businessData } from "@/lib/business-data"

export default function BusinessPage({ params }: { params: { id: string } }) {
  // Find the business data based on the ID
  const business = businessData.find((b) => b.id === params.id) || {
    id: params.id,
    name: "Ecliptic Tech Solutions",
    description:
      "Leading technology consulting firm specializing in software development, cloud solutions, and digital transformation.",
    address: "123 Tech Avenue, Innovation District, San Francisco, CA 94105",
    phone: "(415) 555-7890",
    email: "contact@ecliptictech.com",
    website: "https://ecliptictech.com",
    rating: 4.7,
    reviewCount: 128,
    categories: ["Technology", "Consulting", "Software Development"],
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    services: [
      "Custom Software Development",
      "Cloud Migration & Solutions",
      "Digital Transformation Consulting",
      "UI/UX Design",
      "Mobile App Development",
      "Enterprise Solutions",
    ],
    social: {
      facebook: "https://facebook.com/ecliptictech",
      twitter: "https://twitter.com/ecliptictech",
      linkedin: "https://linkedin.com/company/ecliptictech",
      instagram: "https://instagram.com/ecliptictech",
    },
    images: ["/business-1.jpg", "/business-2.jpg", "/business-3.jpg"],
    location: {
      lat: 37.7749,
      lng: -122.4194,
    },
    owner: {
      name: "Michael Johnson",
      position: "CEO & Founder",
      photo: "/owner-1.jpg",
    },
    yearEstablished: 2015,
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={business.images[0] || "/placeholder.svg"}
          alt={business.name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">{business.name}</h1>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              {business.categories.map((category, index) => (
                <span key={index} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link href="/businesses" className="flex items-center text-blue-400 mb-6 hover:text-blue-300 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                {business.owner && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                    <Image
                      src={business.owner.photo || "/placeholder.svg"}
                      alt={business.owner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  {business.owner && (
                    <div className="text-gray-300">
                      <span className="text-blue-400">Owner:</span> {business.owner.name}
                      {business.owner.position && (
                        <span className="block text-sm text-gray-400">{business.owner.position}</span>
                      )}
                    </div>
                  )}
                  {business.yearEstablished && (
                    <div className="text-sm text-gray-400 mt-1">Established: {business.yearEstablished}</div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {business.images.map((image, index) => (
                <div key={index} className="relative h-24 md:h-32 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${business.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <BusinessDetails business={business} />
            <BusinessServices services={business.services} />
            <ReviewSection businessId={business.id} rating={business.rating} reviewCount={business.reviewCount} />
          </div>

          <div className="space-y-8">
            <BusinessContact business={business} />
            <InquiryForm businessName={business.name} />
            <BusinessHours hours={business.hours} />
            <BusinessMap location={business.location} name={business.name} address={business.address} />
            <SocialLinks social={business.social} />
          </div>
        </div>

        <SimilarBusinesses category={business.categories[0]} currentId={business.id} />
      </div>
    </main>
  )
}
