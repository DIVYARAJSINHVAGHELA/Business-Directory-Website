import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

interface SocialLinksProps {
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

export function SocialLinks({ social }: SocialLinksProps) {
  const hasSocialLinks = Object.values(social).some((link) => !!link)

  if (!hasSocialLinks) return null

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Social Media</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <Facebook className="h-5 w-5 text-blue-400" />
              </Button>
            </a>
          )}

          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <Twitter className="h-5 w-5 text-blue-400" />
              </Button>
            </a>
          )}

          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </Button>
            </a>
          )}

          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <Instagram className="h-5 w-5 text-blue-400" />
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
