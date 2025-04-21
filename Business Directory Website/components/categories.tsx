import Link from "next/link"
import {
  Utensils,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Car,
  Landmark,
  Scissors,
  Wifi,
} from "lucide-react"

const categories = [
  { name: "Restaurants", icon: Utensils, slug: "restaurants" },
  { name: "Retail", icon: ShoppingBag, slug: "retail" },
  { name: "Healthcare", icon: Stethoscope, slug: "healthcare" },
  { name: "Education", icon: GraduationCap, slug: "education" },
  { name: "Professional", icon: Briefcase, slug: "professional" },
  { name: "Home Services", icon: Wrench, slug: "home-services" },
  { name: "Automotive", icon: Car, slug: "automotive" },
  { name: "Financial", icon: Landmark, slug: "financial" },
  { name: "Beauty", icon: Scissors, slug: "beauty" },
  { name: "Technology", icon: Wifi, slug: "technology" },
]

export function Categories() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Browse by Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon

          return (
            <Link
              key={category.slug}
              href={`/businesses?category=${category.slug}`}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center hover:border-blue-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900/50 transition-colors">
                <Icon className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-gray-200 font-medium">{category.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
