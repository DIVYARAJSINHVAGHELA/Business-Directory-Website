import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white font-heading">
              BusinessDir
            </Link>
            <p className="mt-4 text-gray-400">Find, review, and connect with the best businesses in your area.</p>
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Facebook className="h-5 w-5 text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Twitter className="h-5 w-5 text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Instagram className="h-5 w-5 text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Directory
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Add Business
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/businesses?category=restaurants"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses?category=retail"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses?category=technology"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses?category=healthcare"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses?category=education"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-slate-900 border-slate-700" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BusinessDir. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
