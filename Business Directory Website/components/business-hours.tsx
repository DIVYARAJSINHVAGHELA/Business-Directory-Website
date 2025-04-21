import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BusinessHoursProps {
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
}

export function BusinessHours({ hours }: BusinessHoursProps) {
  // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
  const currentDayIndex = new Date().getDay()
  // Convert to day name in lowercase
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const today = daysOfWeek[currentDayIndex]

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center font-heading">
          <Clock className="h-5 w-5 mr-2" />
          Business Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(hours).map(([day, time]) => (
            <div
              key={day}
              className={`flex justify-between items-center ${day === today ? "text-blue-400 font-medium" : "text-gray-300"}`}
            >
              <span className="capitalize">{day}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
