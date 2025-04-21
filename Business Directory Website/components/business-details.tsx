import { Badge } from "@/components/ui/badge"

interface BusinessDetailsProps {
  business: {
    name: string
    description: string
    categories: string[]
  }
}

export function BusinessDetails({ business }: BusinessDetailsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">About {business.name}</h2>
      <p className="text-gray-300 mb-4">{business.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {business.categories.map((category, index) => (
          <Badge key={index} variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-800">
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
