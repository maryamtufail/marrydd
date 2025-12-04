"use client"

import SidebarGabi from "@/components/sidebargabi"

export default function ProjectRiverCityPage() {
  return (
    <div className="min-h-screen bg-[#F6F4F4]">
      {/* Desktop */}
      <div className="hidden lg:flex h-screen">
        <div className="w-[28%]">
          <SidebarGabi />
        </div>

        <div className="flex-1 overflow-y-auto">
          <section className="px-6 py-12 md:px-8 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
                {/* Main Content */}
                <article className="flex-1">
                  <header className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                      <img
                    src="/rivercity.png"
                    alt="RiverCity platform preview"
                  
                    loading="lazy"

                 
                  className="mb-6 aspect-video w-full max-w-3xl rounded-lg border object-cover"
                />
                    <h1 className="text-3xl font-semibold mb-1">About</h1>
                    <h2 className="text-6xl font-semibold mb-4 text-blue-500">RiverCity</h2>

                    <p className="mb-6">
                      RiverCity is a modern real-estate and property management platform designed for buyers, renters,
                      brokers, and city developers. It centralizes listings, neighborhood intelligence, virtual tours,
                      and admin workflows into a clean, fast, interactive experience.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "Real Estate",
                        "Property Platform",
                        "Admin & CRM",
                        "Next.js",
                        "Tailwind",
                        "Analytics",
                      ].map((t) => (
                        <li
                          key={t}
                          className="px-3 py-1 rounded-full border bg-white/60 dark:bg-black/40 text-foreground text-md"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </header>

              

                

                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl">
                    <h2 className="text-lg font-semibold mb-3">The Challenge</h2>
                    <p className="mb-3">
                      City-based property platforms often overload users with information and poor navigation. RiverCity
                      needed a faster, smarter experience where users could discover properties intuitively, compare
                      insights, and engage with real-time neighborhood data.
                    </p>

                    <ul className="list-disc pl-5 mb-4 text-xs space-y-1">
                      <li>Make listings easy to explore, filter, and compare.</li>
                      <li>Integrate dynamic maps and neighborhood insights.</li>
                      <li>Enable admin teams to manage thousands of properties effortlessly.</li>
                    </ul>

                    <h3 className="text-base font-medium mb-3">Research & Discovery</h3>
                    <p className="mb-3">
                      The team conducted interviews with buyers, renters, and brokers to understand the decision-making
                      process. Insights helped define a structured journey that reduces friction and improves discovery.
                    </p>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Mapped buyer journeys across desktop and mobile</li>
                      <li>Identified information density issues</li>
                      <li>Benchmarked leading real-estate competitors</li>
                    </ul>

                    <h3 className="text-base font-medium mb-3">Design & Development</h3>
                    <p className="mb-4">
                      We delivered a crisp, location-focused interface with interactive search, smooth flows, and
                      an admin dashboard optimized for high-volume data.
                    </p>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Optimized property listing cards with micro-interactions</li>
                      <li>Map-based search experience powered by server-rendered data</li>
                      <li>Admin CRM for brokers, agents, and developers</li>
                    </ul>

                    <h3 className="text-base font-medium mb-3">Results</h3>
                    <p className="mb-3">
                      RiverCity launched with strong engagement, faster property discovery, and reduced admin overhead.
                    </p>

                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-xs border rounded-lg">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="text-left py-2 px-2">Metric</th>
                            <th className="text-left py-2 px-2">Before</th>
                            <th className="text-left py-2 px-2">After</th>
                            <th className="text-left py-2 px-2">Improvement</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2">Time to Find Property</td>
                            <td className="py-2 px-2">6.8 min</td>
                            <td className="py-2 px-2">2.1 min</td>
                            <td className="py-2 px-2">-69%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Mobile Engagement</td>
                            <td className="py-2 px-2">37%</td>
                            <td className="py-2 px-2">72%</td>
                            <td className="py-2 px-2">+94%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Admin Efficiency</td>
                            <td className="py-2 px-2">Baseline</td>
                            <td className="py-2 px-2">~45% faster</td>
                            <td className="py-2 px-2">+45%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      RiverCity now delivers a smoother, smarter urban property experience — giving users the confidence
                      to make informed decisions and helping brokers manage listings with less manual work.
                    </p>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-80">
                  <div className="sticky top-8 space-y-4">
                    <div className="rounded-lg border bg-white p-4 shadow-sm">
                      <h3 className="mb-3 text-base font-semibold">Project Details</h3>
                      <dl className="space-y-2 text-xs">
                        <div>
                          <dt className="font-medium text-muted-foreground">Platform</dt>
                          <dd>RiverCity</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Industry</dt>
                          <dd>Real Estate</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>1 year 6 months</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Country</dt>
                          <dd>United States</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Tech</dt>
                          <dd>Next.js • Tailwind • React • Node.js</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Property search • Admin dashboard • Maps</dd>
                        </div>
                      </dl>
                    </div>

                    <a
                      href="#contact"
                      className="inline-block rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                      Work with us — similar projects
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <SidebarGabi />

        <section className="px-4 py-10">
          <img
            src="/rivercity.webp"
            alt="RiverCity mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">RiverCity — Real Estate Platform</h1>
            <p className="mb-4">Smart property discovery with neighborhood insight, map search, and fast workflows.</p>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">Property search speed improved by 69% with higher mobile engagement.</p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>

              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Platform</dt>
                  <dd>RiverCity</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Industry</dt>
                  <dd>Real Estate</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>1 year 6 months</dd>
                </div>
              </dl>

              <p className="text-xs mt-3">A cleaner, faster, more intuitive property experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
