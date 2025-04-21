"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SubmitBusinessPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/submit/success")
    }, 2000)
  }

  const handleNextTab = (nextTab: string) => {
    setActiveTab(nextTab)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-white font-heading">Submit Your Business</h1>
          <p className="text-gray-400 mb-8">Get your business listed in our directory to reach more customers</p>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="font-heading">Business Information</CardTitle>
              <CardDescription>
                Fill out the form below with your business details. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="media">Media</TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  <TabsContent value="basic" className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Business Name *</Label>
                        <Input id="name" placeholder="Enter your business name" required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="services">Services</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="description">Business Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your business in detail"
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" onClick={() => handleNextTab("details")}>
                        Next: Details
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address *</Label>
                        <Input id="address" placeholder="Street address" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" placeholder="City" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="state">State/Province *</Label>
                          <Input id="state" placeholder="State/Province" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="zip">ZIP/Postal Code *</Label>
                          <Input id="zip" placeholder="ZIP/Postal Code" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="country">Country *</Label>
                          <Input id="country" placeholder="Country" required />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="Phone number" required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Email address" required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="https://yourwebsite.com" />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => handleNextTab("basic")}>
                        Back: Basic Info
                      </Button>
                      <Button type="button" onClick={() => handleNextTab("media")}>
                        Next: Media
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="logo">Business Logo</Label>
                        <Input id="logo" type="file" accept="image/*" />
                        <p className="text-sm text-gray-500">Recommended size: 400x400px, Max size: 2MB</p>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="photos">Business Photos</Label>
                        <Input id="photos" type="file" accept="image/*" multiple />
                        <p className="text-sm text-gray-500">Upload up to 5 photos. Max size: 5MB each</p>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="hours">Business Hours</Label>
                        <Textarea
                          id="hours"
                          placeholder="Monday: 9AM-5PM&#10;Tuesday: 9AM-5PM&#10;Wednesday: 9AM-5PM&#10;Thursday: 9AM-5PM&#10;Friday: 9AM-5PM&#10;Saturday: Closed&#10;Sunday: Closed"
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="social">Social Media Links</Label>
                        <Input id="social-facebook" placeholder="Facebook URL" className="mb-2" />
                        <Input id="social-twitter" placeholder="Twitter URL" className="mb-2" />
                        <Input id="social-instagram" placeholder="Instagram URL" className="mb-2" />
                        <Input id="social-linkedin" placeholder="LinkedIn URL" />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => handleNextTab("details")}>
                        Back: Details
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Business"
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </form>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t border-slate-800 flex flex-col items-start pt-6">
              <p className="text-sm text-gray-400 mb-2">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
              <p className="text-sm text-gray-400">
                Your submission will be reviewed by our team and published within 1-2 business days.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
