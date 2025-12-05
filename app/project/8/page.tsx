"use client";

import SidebarGabi from "@/components/sidebargabi";

export default function ProjectVaxAssistPage() {
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
                    <h1 className="text-xl font-semibold mb-1">About</h1>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Healthcare • Vaccine Scheduling System</h2>

                    <p className="mb-6">
                      VaxAssist is a healthcare-focused vaccine scheduling and appointment-management platform built during the COVID and respiratory-vaccine era. It helps clinics, hospitals, and global organizations handle patient bookings, vaccination records, and dose-tracking workflows with ease.
                    </p>

                    <p className="mb-6">
                      The goal was to design a <strong>simple, fast, and secure platform</strong> for patients while providing administrators with powerful tools to manage availability, automate reminders, and maintain accurate vaccination data.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {["Healthcare", "Scheduling System", "Vaccine Platform", "Admin Dashboard", "Patient UX", "High-Traffic Workflows", "Content Design", "Platform Design"].map((t) => (
                        <li
                          key={t}
                          className="px-3 py-1 rounded-full border bg-white/60 dark:bg-black/40 text-foreground text-md"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </header>

                  {/* Images */}
                  <img
                    src="/main-vaxassist.png"
                    alt="VaxAssist Preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  <img
                    src="/covid-booking.png"
                    alt="VaxAssist Admin Preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Project Scope */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Project Scope</h2>
                    <p className="mb-4">
                      The scope included designing a lightweight yet robust system capable of handling large appointment volumes, secure patient data, and real-time scheduling for high-demand healthcare environments.
                    </p>

                    <h3 className="text-base font-medium mb-2">Included in the Structure</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Patient booking & multi-step scheduling flow</li>
                      <li>Admin dashboard for dose tracking</li>
                      <li>Vaccination record entry & verification</li>
                      <li>Automated reminders for confirmations and follow-ups</li>
                      <li>Real-time availability & global clinic support</li>
                    </ul>
                  </div>

                  {/* Tools & Technologies */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Tools & Technologies</h2>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>React & Next.js with Tailwind for frontend UI</li>
                      <li>Node.js APIs for secure scheduling and patient data</li>
                      <li>Cloud hosting with real-time updates</li>
                      <li>Mobile-first responsive design</li>
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Handling high-volume appointments during vaccination cycles</li>
                      <li>Minimizing admin effort for dose entries</li>
                      <li>Maintaining secure patient workflows across clinics</li>
                      <li>Ensuring mobile-first usability for all age groups</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Studied global vaccine booking systems</li>
                      <li>Analyzed patient behavior for reducing drop-offs</li>
                      <li>Reviewed healthcare scheduling standards</li>
                      <li>Mapped workflows with clinics for real-world insight</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Design & Development Approach</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Built a structured multi-step patient booking flow</li>
                      <li>Designed admin dashboard for schedules and records</li>
                      <li>Implemented automated SMS/email reminders</li>
                      <li>Added validation and secure data-entry forms</li>
                      <li>Enabled real-time availability across clinics</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Results</h3>
                    <p className="mb-3">
                      VaxAssist improved booking reliability, reduced admin workload, and supported large-scale vaccination efforts with a smooth, secure workflow.
                    </p>

                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-xs border rounded-lg">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="text-left py-2 px-2">Impact Area</th>
                            <th className="text-left py-2 px-2">Outcome</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2">Booking Speed</td>
                            <td className="py-2 px-2">Faster and more reliable for patients</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Clinic Workload</td>
                            <td className="py-2 px-2">Reduced manual scheduling efforts</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Data Accuracy</td>
                            <td className="py-2 px-2">Improved with secure, validated workflows</td>
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
                          <dt className="font-medium text-muted-foreground">Project</dt>
                          <dd>VaxAssist — Vaccine Scheduling System</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Scope</dt>
                          <dd>Healthcare UX • Scheduling System • Admin Dashboards</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>2+ Years</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Patient Booking • Vaccination Data • Workflow Design</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Region</dt>
                          <dd>United States / Global Clinics</dd>
                        </div>
                          <div>
                          <dt className="font-medium text-muted-foreground">Key Links</dt>
                          <dd className="flex flex-col gap-1 mt-1 text-xs">
                            <a
                              href="https://www.vaxassist.com"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              Main Website
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
            src="/vaxassist1.png"
            alt="VaxAssist Mobile Preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">VaxAssist — Vaccine Scheduling Platform</h1>
            <p className="mb-4">
              A fast, secure, mobile-first healthcare scheduling system designed to support vaccine booking, patient workflows, and dose management.
            </p>

            <h2 className="text-lg font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>High-volume vaccine booking system</li>
              <li>Mobile-first responsive UX</li>
              <li>Admin dashboards for clinics</li>
              <li>Automated reminders & confirmations</li>
            </ul>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>2+ Years</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Focus</dt>
                  <dd>Patient UX • Scheduling • Healthcare Workflows</dd>
                </div>

                  <div>
                          <dt className="font-medium text-muted-foreground">Key Links</dt>
                          <dd className="flex flex-col gap-1 mt-1 text-xs">
                            <a
                              href="https://ikslogics.com"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              Main Website
                            </a>
                           
                          </dd>
                        </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}