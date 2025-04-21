import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe, Share2 } from "lucide-react"

interface BusinessContactProps {
  business: {
    phone: string
    email: string
    website?: string
  }
}

export function BusinessContact({ business }: BusinessContactProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Contact Information</CardTitle>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Phone className="h-5 w-5 mr-3 text-blue-500" />
            {business.phone}
          </a>

          <a
            href={`mailto:${business.email}`}
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-5 w-5 mr-3 text-blue-500" />
            {business.email}
          </a>

          {business.website && (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Globe className="h-5 w-5 mr-3 text-blue-500" />
              Website
            </a>
          )}

          <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Contact Business</Button>
        </div>
      </CardContent>
    </Card>
  )
}
