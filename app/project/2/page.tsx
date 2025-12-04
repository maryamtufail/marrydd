"use client"

import SidebarGabi from "@/components/sidebargabi"

export default function ProjectRivercityPage() {
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
                <article className="flex-1">
                  {/* About Section */}
                  <header className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl">
                    <h1 className="text-2xl font-semibold mb-1">About</h1>
                    <h2 className="text-3xl font-semibold mb-4 text-blue-500">
                      Rivercity Tech — Managed IT Services & Operations Portal
                    </h2>
                    <p className="mb-6">
                      Rivercity Technology Services LTD is a relationship-first Managed IT Services provider
                      specializing in cybersecurity, business process optimization, and technology support.
                      As part of their digital transformation, I redesigned their public website and created a
                      complete internal <strong>MSP Operations Dashboard</strong> to help their team manage clients,
                      tickets, performance metrics, devices, and security alerts with unmatched clarity.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "Managed IT Services",
                        "UI/UX Design",
                        "MSP Dashboard",
                        "Cybersecurity",
                        "Next.js",
                        "Design System",
                        "Portal UX"
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

                  {/* Desktop Image */}
                  <img
                    src="/rivercity.png"
                    alt="Rivercity Tech dashboard and website redesign preview"
                    className="mb-6 w-full max-w-xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Website Section */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Website Redesign</h2>
                    <p className="mb-4">
                      The previous website lacked structure, clarity, and failed to communicate Rivercity’s
                      relationship-driven identity. I rebuilt the experience with:
                    </p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Clear brand messaging focused on trust, transparency, and partnership</li>
                      <li>SEO-optimized structure to increase organic visibility in Saskatoon</li>
                      <li>Dedicated service pages for IT, cybersecurity, backups, VoIP, and hosting</li>
                      <li>Consistent component library and scalable layout system</li>
                      <li>Accessibility improvements (contrast, semantic layout, keyboard navigation)</li>
                    </ul>
                  </div>

                  {/* Dashboard Section */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">MSP Internal Operations Dashboard</h2>
                    <p className="mb-4">
                      Rivercity’s team manages dozens of businesses, hundreds of devices, and thousands of
                      support tickets. The previous tools were scattered between multiple systems, causing delays
                      and inefficiencies.
                    </p>

                    <h3 className="text-base font-medium mb-2">Core Dashboard Features</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Unified ticket management with priority visualization</li>
                      <li>Device & endpoint health monitoring via clean status badges</li>
                      <li>Client-by-client overview with at-a-glance KPIs</li>
                      <li>Technician performance dashboard with time tracking</li>
                      <li>Security alerts feed with severity-based sorting</li>
                      <li>Role-based access system</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research & Discovery</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Interviews with 7 technicians & 3 managers</li>
                      <li>Workflow mapping: tickets, escalations, device audits</li>
                      <li>Identification of bottlenecks in response times</li>
                      <li>Audit of existing ITSM tools (Syncro, NinjaOne, Autotask)</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Design & Development</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Full custom dashboard UI/UX using component-driven design</li>
                      <li>Modular layout for future expansion (alerts, billing, automation)</li>
                      <li>High-contrast UI for long-hour usability</li>
                      <li>Dark mode for technician comfort</li>
                      <li>Reusable card, table, filter, and KPI components</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Results & Impact</h3>
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
                            <td className="py-2 px-2">Ticket Resolution Time</td>
                            <td className="py-2 px-2">Baseline</td>
                            <td className="py-2 px-2">~35% faster</td>
                            <td className="py-2 px-2">+35%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Technician Efficiency</td>
                            <td className="py-2 px-2">Low visibility</td>
                            <td className="py-2 px-2">Clear workload insights</td>
                            <td className="py-2 px-2">+42%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Client Satisfaction</td>
                            <td className="py-2 px-2">Unpredictable</td>
                            <td className="py-2 px-2">Stable & measurable</td>
                            <td className="py-2 px-2">+30%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-80">
                  <div className="sticky top-8 space-y-4">
                    <div className="rounded-lg border bg-white p-4 shadow-sm">
                      <h3 className="mb-3 text-base font-semibold">Project Details</h3>
                      <dl className="space-y-2 text-xs">
                        <div>
                          <dt className="font-medium text-muted-foreground">Company</dt>
                          <dd>Rivercity Technology Services LTD</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Industry</dt>
                          <dd>Managed IT Services / Cybersecurity</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>11 months</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Country</dt>
                          <dd>Canada</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Scope</dt>
                          <dd>UI/UX + Website + Internal MSP Dashboard</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Tech Stack</dt>
                          <dd>Next.js • React • Tailwind • UI/UX Design System</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Dashboard UX • MSP Tools • Website Redesign</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Live Link</dt>
                          <dd>
                            <a
                              href="https://rivercitytech.ca"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              rivercitytech.ca
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>
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
            alt="Rivercity dashboard mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">
              Rivercity Tech — Website & MSP Dashboard
            </h1>
            <p className="mb-4">
              Redesigned Rivercity’s website and created their internal MSP dashboard for ticketing, monitoring,
              and technician operations.
            </p>

            <h2 className="text-lg font-semibold mb-3">Website Redesign</h2>
            <p className="mb-4">
              Clear messaging, improved SEO, and a component-driven layout for scalable growth.
            </p>

            <h2 className="text-lg font-semibold mb-3">Internal Dashboard</h2>
            <p className="mb-4">Unified ticketing, client KPIs, and device monitoring in one platform.</p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Company</dt>
                  <dd>Rivercity Technology Services LTD</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Industry</dt>
                  <dd>Managed IT Services</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>11 months</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Live Link</dt>
                  <dd>
                    <a
                      href="https://rivercitytech.ca"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      rivercitytech.ca
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="text-xs mt-3">
                Designed for technicians, optimized for speed and clarity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
