import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Star, FileCheck, Clock, AlertTriangle } from "lucide-react"

export function AdminStats() {
  // Dummy data for admin stats
  const stats = [
    {
      title: "Total Businesses",
      value: "1,256",
      change: "+12%",
      icon: Building2,
      positive: true,
    },
    {
      title: "Total Users",
      value: "8,549",
      change: "+8%",
      icon: Users,
      positive: true,
    },
    {
      title: "Reviews",
      value: "15,842",
      change: "+15%",
      icon: Star,
      positive: true,
    },
    {
      title: "Approved",
      value: "1,128",
      change: "90%",
      icon: FileCheck,
      positive: true,
    },
    {
      title: "Pending",
      value: "87",
      change: "7%",
      icon: Clock,
      positive: null,
    },
    {
      title: "Rejected",
      value: "41",
      change: "-2%",
      icon: AlertTriangle,
      positive: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <Card key={index} className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
              </div>

              {stat.change && (
                <div
                  className={`mt-4 text-sm ${
                    stat.positive === true
                      ? "text-green-500"
                      : stat.positive === false
                        ? "text-red-500"
                        : "text-gray-400"
                  }`}
                >
                  {stat.change} {stat.positive !== null && <span>{stat.positive ? "increase" : "decrease"}</span>}
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
