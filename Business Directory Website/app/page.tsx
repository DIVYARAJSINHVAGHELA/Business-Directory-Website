import { SearchBar } from "@/components/search-bar"
import { BusinessGrid } from "@/components/business-grid"
import { MapSection } from "@/components/map-section"
import { FeaturedBusinesses } from "@/components/featured-businesses"
import { Categories } from "@/components/categories"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <Categories />
        <FeaturedBusinesses />
        <MapSection />
        <BusinessGrid />
      </div>
    </main>
  )
}
