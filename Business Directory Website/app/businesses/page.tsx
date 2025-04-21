import { SearchBar } from "@/components/search-bar"
import { BusinessGrid } from "@/components/business-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { MapToggle } from "@/components/map-toggle"

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Business Directory</h1>
        <SearchBar />

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <FilterSidebar />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">Showing 1-20 of 156 businesses</p>
              <MapToggle />
            </div>
            <BusinessGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
