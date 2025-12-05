"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface GalleryProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Learingo",
    image: "/learingo.png",
    alt: "Learingo project thumbnail",
  },
  {
    id: "2",
    title: "RiverCity",
    image: "/rivercity.png",
    alt: "RiverCity project preview image",
  },
  {
    id: "3",
    title: "Wago Bank",
    image: "/wago.png",
    alt: "Wago Bank app interface preview",
  },
  {
    id: "4",
    title: "Light Star",
    image: "/lightstar.png",
    alt: "Light Star branding preview",
  },
  { id: "5", title: "DVK", image: "/dvk.png", alt: "DVK dashboard screenshot" },
  { id: "6", title: "IKS", image: "/iks.png", alt: "IKS platform UI preview" },
  {
    id: "7",
    title: "Reploy Me",
    image: "/reployme.png",
    alt: "Reploy Me project cover image",
  },
  {
    id: "8",
    title: "Vax Assist",
    image: "/vaxassist.png",
    alt: "Vax Assist mobile app preview",
  },
];

export default function Gallery({ projects = defaultProjects }: GalleryProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 auto-rows-max">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative bg-white rounded-[22px] overflow-hidden cursor-pointer w-full aspect-[4/3] block"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       50vw"
                priority={index < 2}
              />

              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-neutral-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="absolute bottom-0 left-0 text-white text-xl font-medium px-5 py-1.5">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
