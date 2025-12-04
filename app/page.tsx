import SidebarGabi from "@/components/sidebargabi"
import Gallery from "@/components/gallery"

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F4F4" }}>
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <div className="w-[30%]">
          <SidebarGabi />
        </div>

        {/* Gallery main content */}
        <div className="flex-1 p-6 overflow-y-auto h-screen">
          <Gallery />
        </div>
      </div>

      <div className="lg:hidden">
        <SidebarGabi />
        <Gallery />
      </div>
    </div>
  )
}
