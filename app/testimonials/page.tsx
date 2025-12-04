import SidebarGabi from "@/components/sidebargabi"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback: "Maryam is an exceptional designer and frontend engineer. Her attention to detail and ability to deliver high-quality products is outstanding.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager, Learnigo",
    feedback: "Working with Maryam was a pleasure. She transformed our ideas into a beautiful, functional platform.",
  },
  {
    name: "Ali Khan",
    role: "CTO, Sapphire Solutions",
    feedback: "Maryam not only delivered excellent code but also mentored our team effectively. Highly recommend!",
  },
  {
    name: "Sara Ahmed",
    role: "Founder, MedCare MSO",
    feedback: "Her designs and development skills helped our project exceed expectations. Very professional and creative.",
  },
  {
    name: "Farooq Adam",
    role: "Project Lead, Personal Portfolio",
    feedback: "Maryam designed a portfolio project that perfectly showcased my work. The layout, animations, and responsiveness are flawless.",
  },
  {
    name: "Ron Brackett",
    role: "Developer, Task Manager App",
    feedback: "Maryam brought our task manager project to life. Her coding and design skills made complex features simple and user-friendly.",
  },
  {
    name: "Arham",
    role: "Lead Developer, Gamified Learning App",
    feedback: "Maryam developed the learning app from scratch, integrating quizzes and progress tracking seamlessly. The project exceeded expectations.",
  },
  {
    name: "Hamza Alexander",
    role: "Product Owner, E-commerce Prototype",
    feedback: "Maryam turned our e-commerce prototype into a working, visually appealing app. Users loved the intuitive navigation and design.",
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#F6F4F4]">
      {/* Sidebar */}
      <SidebarGabi />

      {/* Main content */}
      <div className="lg:ml-[30%] flex flex-col">
        <div className="lg:overflow-y-auto lg:h-screen">
          <div className="lg:p-8 p-6 space-y-10 max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center lg:text-left space-y-2">
              <h1 className="font-sans text-xl font-semibold leading-tight text-foreground">
                Testimonials
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                Hear what clients and collaborators have to say about working with me.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-muted rounded-xl p-6 shadow-sm transition 
                    ${idx % 2 === 0 ? "translate-y-0 md:translate-y-2" : "translate-y-0 md:-translate-y-2"} 
                    hover:shadow-md hover:-translate-y-1`}
                >
                  {/* Quote Icon */}
                  <Quote className="w-5 h-5 text-muted-foreground mb-3" />

                  {/* Feedback */}
                  <p className="text-sm text-foreground mb-4">{t.feedback}</p>

                  {/* Client Info */}
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
