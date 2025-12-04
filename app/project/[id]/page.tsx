import SidebarGabi from "@/components/sidebargabi"

const projects = [
  {
    id: "1",
    title: "Learingo — Learning Management System",
    category: "Web App",
    description:
      "A complete LMS platform with course creation, analytics, and a modern student dashboard.",
    image: "/learingo.png",
    industry: "Education Technology",
    location: "Remote",
    companySize: "20-50",
    website: "#",
    topics: ["LMS", "EdTech", "UI/UX", "Next.js"],
  },
  {
    id: "2",
    title: "RiverCity Tech Portal",
    category: "Corporate Platform",
    description:
      "An enterprise IT services portal redesigned for clarity, speed, and scalability.",
    image: "/rivercity.png",
    industry: "IT Services",
    location: "USA",
    companySize: "100+",
    website: "#",
    topics: ["Enterprise UX", "React", "Next.js", "Portal Design"],
  },
  {
    id: "3",
    title: "Wago Bank — Digital Banking App",
    category: "FinTech",
    description:
      "A modern banking interface with dashboards, money transfers, and transaction analytics.",
    image: "/wago.png",
    industry: "FinTech",
    location: "EU",
    companySize: "80-120",
    website: "#",
    topics: ["Banking UX", "FinTech Design", "Mobile UI"],
  },
  {
    id: "4",
    title: "Light Star — SaaS Dashboard",
    category: "SaaS",
    description:
      "A SaaS analytics dashboard with real-time metrics, reporting, and user management.",
    image: "/lightstar.png",
    industry: "SaaS Product",
    location: "UK",
    companySize: "20-40",
    website: "#",
    topics: ["SaaS UI", "Charts", "Dashboard UX"],
  },
  {
    id: "5",
    title: "DVK — E-commerce Storefront",
    category: "E-commerce",
    description:
      "A premium shopping experience with clean UI, collections, and product filtering.",
    image: "/dvk.png",
    industry: "Retail & Fashion",
    location: "Dubai",
    companySize: "50+",
    website: "#",
    topics: ["Shop UI", "E-commerce", "Product Design"],
  },
  {
    id: "6",
    title: "IKS Platform",
    category: "Web Platform",
    description:
      "Content management and digital services platform for enterprise deployment.",
    image: "/iks.png",
    industry: "Enterprise",
    location: "Germany",
    companySize: "200-300",
    website: "#",
    topics: ["CMS", "Enterprise UI", "Next.js"],
  },
  {
    id: "7",
    title: "Reploy Me — Hiring Dashboard",
    category: "HR Tech",
    description:
      "A candidate tracking and recruitment dashboard built for speed & clarity.",
    image: "/reployme.png",
    industry: "Recruitment",
    location: "Remote",
    companySize: "15-20",
    website: "#",
    topics: ["ATS", "HR UI", "Dashboard Design"],
  },
  {
    id: "8",
    title: "Vax Assist",
    category: "Health Tech",
    description:
      "A healthcare scheduling and vaccination management platform.",
    image: "/vaxassist.png",
    industry: "Healthcare",
    location: "US/Canada",
    companySize: "30-50",
    website: "#",
    topics: ["Healthcare UX", "Scheduling UI", "Forms"],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) return <div>Project not found</div>

  return (
    <div className="min-h-screen bg-[#F6F4F4]">
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <div className="w-[28%]">
          <SidebarGabi />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 overflow-y-auto">
          <section className="px-4 py-12 md:px-8 lg:px-12 lg:py-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:gap-20">
              <article className="flex-1 mx-auto">
                <div className="prose dark:prose-invert text-sm leading-relaxed">
                  <h1 className="text-3xl font-semibold mb-2">About</h1>
                  <h2 className="text-6xl font-semibold mb-4 text-blue-500">
                    {project.title}
                  </h2>

                  <p className="max-w-3xl mb-6">{project.description}</p>

                  {/* TAGS */}
                  <ul className="flex flex-wrap gap-3 text-xs max-w-3xl mb-6">
                    {project.topics?.map((tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 rounded-full border text-foreground text-md"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                />

                <div className="prose dark:prose-invert text-sm leading-relaxed">
                  <h2 className="text-lg font-semibold mb-3">Overview</h2>

                  <p className="mb-3">
                    Industry: <strong>{project.industry}</strong>
                  </p>
                  <p className="mb-3">
                    Location: <strong>{project.location}</strong>
                  </p>
                  <p className="mb-3">
                    Company Size: <strong>{project.companySize}</strong>
                  </p>

                  <p className="mb-6">
                    The project involved a fully modern digital experience,
                    redesigning user flows, UI, UX, structure, components, and
                    interactions while ensuring the system remains visually consistent.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">Results</h3>
                  <p>
                    The new design improved clarity, increased engagement, and gave
                    the brand a polished, professional presence across all platforms.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden">
        <SidebarGabi />

        <section className="px-4 py-10">
          <article>
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 aspect-video w-full rounded-lg border object-cover"
            />

            <div className="prose dark:prose-invert text-sm leading-relaxed">
              <h1 className="text-xl font-semibold mb-4">{project.title}</h1>
              <p className="mb-4">{project.description}</p>

              <h2 className="text-lg font-semibold mb-3">Industry</h2>
              <p>{project.industry}</p>
            </div>
          </article>

          {/* MOBILE DETAILS */}
          <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
            <h3 className="mb-3 text-base font-semibold">Project Details</h3>

            <dl className="space-y-2">
              <div>
                <dt className="font-medium text-gray-500">Category</dt>
                <dd>{project.category}</dd>
              </div>

              <div>
                <dt className="font-medium text-gray-500">Location</dt>
                <dd>{project.location}</dd>
              </div>

              <div>
                <dt className="font-medium text-gray-500">Company Size</dt>
                <dd>{project.companySize}</dd>
              </div>
            </dl>

            <p className="text-xs mt-3">
              Modern UI/UX, responsive design, and improved flow for users.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
