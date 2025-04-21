"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle, Edit, MoreVertical, Search, Trash2, XCircle } from "lucide-react"
import { AdminStats } from "@/components/admin-stats"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Dummy data for businesses
  const businesses = [
    { id: "1", name: "Ecliptic Tech Solutions", category: "Technology", status: "approved", date: "2025-04-10" },
    { id: "2", name: "Coastal Cafe", category: "Restaurant", status: "pending", date: "2025-04-15" },
    { id: "3", name: "Urban Fitness Center", category: "Health", status: "approved", date: "2025-04-08" },
    { id: "4", name: "Bright Horizons Daycare", category: "Education", status: "rejected", date: "2025-04-12" },
    { id: "5", name: "Evergreen Landscaping", category: "Services", status: "approved", date: "2025-04-05" },
    { id: "6", name: "Metro Dental Clinic", category: "Healthcare", status: "pending", date: "2025-04-16" },
    { id: "7", name: "Sunset Boutique", category: "Retail", status: "approved", date: "2025-04-09" },
    { id: "8", name: "Golden Gate Law Firm", category: "Legal", status: "pending", date: "2025-04-14" },
  ]

  // Dummy data for reviews
  const reviews = [
    {
      id: "1",
      business: "Ecliptic Tech Solutions",
      rating: 5,
      reviewer: "John D.",
      status: "approved",
      date: "2025-04-14",
    },
    { id: "2", business: "Coastal Cafe", rating: 2, reviewer: "Sarah M.", status: "pending", date: "2025-04-16" },
    {
      id: "3",
      business: "Urban Fitness Center",
      rating: 4,
      reviewer: "Michael T.",
      status: "approved",
      date: "2025-04-13",
    },
    {
      id: "4",
      business: "Bright Horizons Daycare",
      rating: 1,
      reviewer: "Lisa K.",
      status: "rejected",
      date: "2025-04-15",
    },
    {
      id: "5",
      business: "Evergreen Landscaping",
      rating: 5,
      reviewer: "Robert J.",
      status: "approved",
      date: "2025-04-12",
    },
    {
      id: "6",
      business: "Metro Dental Clinic",
      rating: 3,
      reviewer: "Emily S.",
      status: "pending",
      date: "2025-04-16",
    },
  ]

  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredReviews = reviews.filter(
    (review) =>
      review.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.reviewer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-600">Approved</Badge>
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-600">Rejected</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-white">Admin Dashboard</h1>
        <p className="text-gray-400 mb-8">Manage business listings and reviews</p>

        <AdminStats />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search businesses or reviews..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle>Directory Management</CardTitle>
              <CardDescription>Review and manage business listings and user reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="businesses" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="businesses">Business Listings</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="businesses">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Business Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submission Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBusinesses.length > 0 ? (
                        filteredBusinesses.map((business) => (
                          <TableRow key={business.id}>
                            <TableCell className="font-medium">{business.name}</TableCell>
                            <TableCell>{business.category}</TableCell>
                            <TableCell>{getStatusBadge(business.status)}</TableCell>
                            <TableCell>{business.date}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Reject
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                            No businesses found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="reviews">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Business</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Reviewer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                          <TableRow key={review.id}>
                            <TableCell className="font-medium">{review.business}</TableCell>
                            <TableCell>{review.rating} / 5</TableCell>
                            <TableCell>{review.reviewer}</TableCell>
                            <TableCell>{getStatusBadge(review.status)}</TableCell>
                            <TableCell>{review.date}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Reject
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                            No reviews found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
