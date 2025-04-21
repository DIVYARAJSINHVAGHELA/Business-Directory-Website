"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Filter, X } from "lucide-react"

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([1, 4])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const categories = [
    "Restaurants",
    "Retail",
    "Technology",
    "Healthcare",
    "Education",
    "Entertainment",
    "Professional Services",
    "Home Services",
    "Automotive",
    "Financial Services",
  ]

  const features = [
    "Open Now",
    "Offers Delivery",
    "Accepts Credit Cards",
    "Free WiFi",
    "Wheelchair Accessible",
    "Parking Available",
    "Online Booking",
  ]

  const renderFilters = () => (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.slice(0, 6).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={`category-${category}`} />
              <Label htmlFor={`category-${category}`} className="text-gray-300">
                {category}
              </Label>
            </div>
          ))}
          {categories.length > 6 && (
            <Button variant="link" className="text-blue-400 p-0 h-auto">
              Show more ({categories.length - 6})
            </Button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[1, 4]}
            max={4}
            min={1}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-6"
          />
          <div className="flex justify-between text-gray-400 text-sm">
            <span>$</span>
            <span>$$</span>
            <span>$$$</span>
            <span>$$$$</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="text-gray-300 flex items-center">
                {Array(rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                {Array(5 - rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-500" />
                  ))}
                <span className="ml-1">& Up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">Features</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox id={`feature-${feature}`} />
              <Label htmlFor={`feature-${feature}`} className="text-gray-300">
                {feature}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="distance" className="border-slate-800">
          <AccordionTrigger className="text-lg font-medium text-white">Distance</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="distance-1" />
                <Label htmlFor="distance-1" className="text-gray-300">
                  Within 1 mile
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="distance-5" />
                <Label htmlFor="distance-5" className="text-gray-300">
                  Within 5 miles
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="distance-10" />
                <Label htmlFor="distance-10" className="text-gray-300">
                  Within 10 miles
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="distance-25" />
                <Label htmlFor="distance-25" className="text-gray-300">
                  Within 25 miles
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
        <Button variant="outline" className="w-full mt-2">
          Reset Filters
        </Button>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 bg-slate-900 border border-slate-800 rounded-xl p-6">{renderFilters()}</div>

      {/* Mobile filter button */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowMobileFilters(true)}>
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <p className="text-gray-400">Showing 1-20 of 156 businesses</p>
      </div>

      {/* Mobile filter sidebar */}
      {showMobileFilters && (
        <div className="md:hidden fixed inset-0 bg-black/80 z-50 flex justify-end">
          <div className="w-4/5 max-w-md bg-slate-900 h-full overflow-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowMobileFilters(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            {renderFilters()}
          </div>
        </div>
      )}
    </>
  )
}
