"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, Building, User, Heart } from "lucide-react"

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-950 border-slate-800">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="text-xl font-bold text-white font-heading">
                  BusinessDir
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link href="/businesses" className="text-gray-300 hover:text-white transition-colors">
                    Directory
                  </Link>
                  <Link href="/submit" className="text-gray-300 hover:text-white transition-colors">
                    Add Business
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-xl font-bold text-white hidden md:block font-heading">
            BusinessDir
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Directory
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] bg-slate-950 border-slate-800">
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/businesses?category=restaurants" legacyBehavior passHref>
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-900 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Restaurants</div>
                          <p className="text-sm leading-tight text-gray-400">
                            Find the best dining options in your area
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/businesses?category=retail" legacyBehavior passHref>
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-900 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Retail</div>
                          <p className="text-sm leading-tight text-gray-400">Discover local shops and boutiques</p>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <Link href="/businesses?category=technology" legacyBehavior passHref>
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-900 p-3 no-underline outline-none focus:shadow-md">
                          <div className="mb-1 text-sm font-medium text-white">Technology</div>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/businesses?category=healthcare" legacyBehavior passHref>
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-900 p-3 no-underline outline-none focus:shadow-md">
                          <div className="mb-1 text-sm font-medium text-white">Healthcare</div>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/businesses?category=education" legacyBehavior passHref>
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-900 p-3 no-underline outline-none focus:shadow-md">
                          <div className="mb-1 text-sm font-medium text-white">Education</div>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <Link href="/businesses" legacyBehavior passHref>
                      <NavigationMenuLink className="flex w-full select-none items-center justify-center rounded-md bg-blue-600 p-3 text-center text-sm font-medium text-white no-underline outline-none hover:bg-blue-700">
                        View All Categories
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/submit" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Add Business
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search businesses..."
                className="w-[200px] md:w-[300px] bg-slate-900 border-slate-700"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/favorites">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/submit">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Building className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Add Business</span>
              <span className="md:hidden">Add</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
