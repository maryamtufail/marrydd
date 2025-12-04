import SidebarGabi from "@/components/sidebargabi"
import { Services4 } from "@/components/services4"

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F4F4" }}>
      {/* Sidebar */}
      <SidebarGabi />

      {/* Main content */}
      <div className="lg:ml-[30%] lg:flex lg:flex-col">
        {/* Desktop: content area, Mobile: stacked layout */}
        <div className="lg:overflow-y-auto lg:h-screen">
          <div className="lg:p-8 p-6 space-y-8">
            {/* Services Section */}
            <Services4 />
          </div>
        </div>
      </div>
    </div>
  )
}
