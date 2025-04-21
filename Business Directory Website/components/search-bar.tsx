"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [openCategory, setOpenCategory] = useState(false)
  const [openLocation, setOpenLocation] = useState(false)

  // Dummy data for suggestions
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

  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Seattle, WA",
    "Austin, TX",
    "Boston, MA",
    "Denver, CO",
    "Miami, FL",
    "Atlanta, GA",
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would navigate to search results with query params
    router.push(`/businesses?search=${searchTerm}&location=${location}&category=${category}`)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form onSubmit={handleSearch} className="relative bg-slate-900 rounded-xl p-4 shadow-lg border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search businesses..."
              className="pl-10 bg-slate-800 border-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <Popover open={openCategory} onOpenChange={setOpenCategory}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCategory}
                  className="w-full justify-between bg-slate-800 border-slate-700 text-left"
                >
                  <div className="flex items-center">
                    <Tag className="mr-2 h-4 w-4 text-gray-500" />
                    {category ? category : "Select category..."}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search categories..." />
                  <CommandList>
                    <CommandEmpty>No categories found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((cat) => (
                        <CommandItem
                          key={cat}
                          onSelect={() => {
                            setCategory(cat)
                            setOpenCategory(false)
                          }}
                        >
                          {cat}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="relative">
            <Popover open={openLocation} onOpenChange={setOpenLocation}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openLocation}
                  className="w-full justify-between bg-slate-800 border-slate-700 text-left"
                >
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                    {location ? location : "Select location..."}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search locations..." />
                  <CommandList>
                    <CommandEmpty>No locations found.</CommandEmpty>
                    <CommandGroup>
                      {locations.map((loc) => (
                        <CommandItem
                          key={loc}
                          onSelect={() => {
                            setLocation(loc)
                            setOpenLocation(false)
                          }}
                        >
                          {loc}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
          Search
        </Button>
      </form>
    </div>
  )
}
