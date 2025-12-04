"use client"

import Link from "next/link"

interface Project {
  id: string
  title: string
  image: string
}

interface GalleryProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  { id: "1", title: "Learingo", image: "./learingo.png" },
  { id: "2", title: "RiverCity", image: "./rivercity.png" },
  { id: "3", title: "Wago Bank", image: "./wago.png" },
  { id: "4", title: "Light Star", image: "./lightstar.png" },
  { id: "5", title: "DVK", image: "./dvk.png" },
  { id: "6", title: "IKS", image: "./iks.png" },
  { id: "7", title: "Reploy Me", image: "./reployme.png" },
  { id: "8", title: "Vax Assist", image: "./vaxassist.png" },
]

export default function Gallery({ projects = defaultProjects }: GalleryProps) {

  return (
    <div className="flex flex-col h-full">
      {/* Projects grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6 p-4 auto-rows-max">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative bg-white rounded-[22px] overflow-hidden cursor-pointer w-full aspect-[4/3] block"
            >
              <img
                src={project.image || "/placeholder.svg?height=300&width=400&query=project image"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-neutral-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="absolute bottom-0 left-0 text-white text-xl font-medium p-[1.5px] px-5 py-1.5">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
