import { Check } from "lucide-react"

interface BusinessServicesProps {
  services: string[]
}

export function BusinessServices({ services }: BusinessServicesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Services Offered</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 flex-shrink-0">
              <Check className="h-3 w-3 text-blue-400" />
            </div>
            <span className="text-gray-300">{service}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
