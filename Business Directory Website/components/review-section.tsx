"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ThumbsUp, Flag, MessageSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ReviewSectionProps {
  businessId: string
  rating: number
  reviewCount: number
}

export function ReviewSection({ businessId, rating, reviewCount }: ReviewSectionProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [reviewText, setReviewText] = useState("")
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  // Dummy data for reviews
  const reviews = [
    {
      id: "1",
      author: "John D.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2025-04-10",
      text: "Absolutely fantastic experience! The team at Ecliptic Tech Solutions went above and beyond to deliver exactly what we needed. Their expertise in cloud solutions saved us countless hours and significantly improved our system performance.",
      helpful: 12,
      replies: 2,
    },
    {
      id: "2",
      author: "Sarah M.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2025-04-05",
      text: "Great service and very knowledgeable staff. They helped us implement a complex software solution with minimal disruption to our business operations. The only reason for 4 stars instead of 5 is that the project took slightly longer than initially estimated.",
      helpful: 8,
      replies: 1,
    },
    {
      id: "3",
      author: "Michael T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2025-03-28",
      text: "I've worked with several tech consultants over the years, and Ecliptic Tech Solutions is by far the best. Their attention to detail and commitment to understanding our specific needs made all the difference. Highly recommended!",
      helpful: 15,
      replies: 0,
    },
    {
      id: "4",
      author: "Lisa K.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 3,
      date: "2025-03-20",
      text: "Decent service overall. The final product works well, but communication during the project could have been better. There were times when I wasn't sure about the status of certain deliverables.",
      helpful: 4,
      replies: 3,
    },
  ]

  const filteredReviews =
    activeTab === "all"
      ? reviews
      : reviews.filter((review) => {
          if (activeTab === "positive") return review.rating >= 4
          if (activeTab === "critical") return review.rating <= 3
          return true
        })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the review to an API
    console.log({ businessId, rating: userRating, text: reviewText })
    setReviewText("")
    setUserRating(0)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Reviews & Ratings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="bg-slate-900 border-slate-800 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-center text-4xl text-white">{rating.toFixed(1)}</CardTitle>
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                  />
                ))}
            </div>
            <CardDescription className="text-center">Based on {reviewCount} reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                // Calculate percentage for this star rating (dummy data)
                const percentage = star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2

                return (
                  <div key={star} className="flex items-center gap-2">
                    <div className="flex items-center w-12">
                      <span className="text-gray-400">{star}</span>
                      <Star className="h-3 w-3 ml-1 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <div className="w-8 text-right text-gray-400 text-sm">{percentage}%</div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
            <CardDescription>Share your experience to help others make better choices</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-gray-400 mr-2">Your rating:</span>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 cursor-pointer ${
                          i < (hoverRating || userRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"
                        }`}
                        onClick={() => setUserRating(i + 1)}
                        onMouseEnter={() => setHoverRating(i + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                      />
                    ))}
                </div>
              </div>

              <Textarea
                placeholder="Share details about your experience with this business..."
                className="min-h-[120px] bg-slate-800 border-slate-700"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-gray-400">Your review will be publicly visible</p>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700"
              disabled={userRating === 0 || reviewText.trim() === ""}
              onClick={handleSubmitReview}
            >
              Submit Review
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all">All Reviews</TabsTrigger>
            <TabsTrigger value="positive">Positive</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
          </TabsList>

          <div className="text-sm text-gray-400">
            Showing {filteredReviews.length} of {reviews.length} reviews
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white">{review.author}</h4>
                      <div className="flex items-center mt-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                            />
                          ))}
                        <span className="text-gray-400 text-sm ml-2">
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{review.text}</p>

                <div className="flex items-center gap-4 text-sm">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply ({review.replies})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                    <Flag className="h-4 w-4 mr-1" />
                    Report
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length > 4 && (
            <div className="mt-8 text-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="positive" className="mt-0">
          <div className="space-y-6">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div key={review.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-white">{review.author}</h4>
                        <div className="flex items-center mt-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                              />
                            ))}
                          <span className="text-gray-400 text-sm ml-2">
                            {new Date(review.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{review.text}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply ({review.replies})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                      <Flag className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">No positive reviews found.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="critical" className="mt-0">
          <div className="space-y-6">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div key={review.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-white">{review.author}</h4>
                        <div className="flex items-center mt-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                              />
                            ))}
                          <span className="text-gray-400 text-sm ml-2">
                            {new Date(review.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{review.text}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply ({review.replies})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                      <Flag className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">No critical reviews found.</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
