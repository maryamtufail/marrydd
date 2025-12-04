"use client"

import SidebarGabi from "@/components/sidebargabi"

export default function ProjectLightStarsAcademyPage() {
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
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                      EdTech • Website • Academic Learning Platform
                    </h2>

                    <p className="mb-6">
                      LightStars Academy required a clean, modern educational website that presents{" "}
                      <strong>programs, course details, admissions guidance, and student learning resources</strong>.  
                      The goal was to create a structured, academic-focused user experience that is fast, mobile-ready,
                      and accessible for both students and parents globally.
                    </p>
                  </header>

                  {/* Desktop Image */}
                  <img
                    src="/lightstars.webp"
                    alt="LightStars Academy website and academic platform"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Platform Overview */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Platform Overview</h2>
                    <p className="mb-4">
                      LightStars Academy offers an organized, content-rich platform built to support:
                    </p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Training programs & course structures</li>
                      <li>Admissions information & requirements</li>
                      <li>Student learning resources</li>
                      <li>Guidance for parents & first-time visitors</li>
                      <li>Mobile-optimized browsing for global users</li>
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Presenting large volumes of educational content in a clean, digestible layout</li>
                      <li>Ensuring fast loading speeds for remote regions & students with slow internet</li>
                      <li>Creating a design suitable for both parents and students</li>
                      <li>Maintaining academic branding across all pages</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Studied international academic website standards</li>
                      <li>Analyzed student journey for course discovery and admissions</li>
                      <li>Reviewed content placement strategies for better readability</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Design & Development</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Built dedicated pages for programs, courses, and admissions</li>
                      <li>Implemented organized layouts to simplify reading and navigation</li>
                      <li>Designed mobile-first responsive UI</li>
                      <li>Used Next.js with CMS-friendly architecture for easy content updates</li>
                      <li>Ensured consistent academic branding across all components</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Stats / Results</h3>
                    <p className="mb-3">
                      LightStars Academy experienced improved engagement and clarity across all academic offerings.
                    </p>

                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-xs border rounded-lg">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="text-left py-2 px-2">Outcome</th>
                            <th className="text-left py-2 px-2">Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2">Course Engagement</td>
                            <td className="py-2 px-2">Higher student interaction with program pages</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Mobile Readability</td>
                            <td className="py-2 px-2">Optimized for small screens & remote learners</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Content Clarity</td>
                            <td className="py-2 px-2">Improved understanding of academic offerings</td>
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
                          <dt className="font-medium text-muted-foreground">Platform</dt>
                          <dd>LightStars Academy</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Industry</dt>
                          <dd>EdTech • Academic Website</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>1 Year 6 Months</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Country</dt>
                          <dd>Global</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Tech Stack</dt>
                          <dd>Next.js • React • Tailwind • CMS-Ready Architecture</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Programs • Courses • Admissions • Student Resources</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Live Links</dt>
                          <dd className="flex flex-col gap-1 mt-1">
                            <a href="https://www.lightstars.org/" className="text-blue-600 underline">
                              Main Website
                            </a>
                            <a href="https://app.lightstars.org/courses" className="text-blue-600 underline">
                              Course Directory
                            </a>
                            <a href="https://app.lightstars.org/login" className="text-blue-600 underline">
                              Admissions Page
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
            src="/lightstars.webp"
            alt="LightStars Academy mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">LightStars Academy — Academic Learning Platform</h1>
            <p className="mb-4">
              A structured educational website featuring programs, admissions details, and resources for students and parents.
            </p>

            <h2 className="text-lg font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>Course & Program Pages</li>
              <li>Admissions Information</li>
              <li>Student Learning Resources</li>
              <li>Fully Responsive & Mobile-Optimized</li>
              <li>CMS-Friendly Architecture</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              Improved clarity, higher engagement, and faster program discovery for global students.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Platform</dt>
                  <dd>LightStars Academy</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Industry</dt>
                  <dd>EdTech • Academic</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>1 Year 9 Months</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Links</dt>
                  <dd className="flex flex-col gap-1 mt-1">
                    <a href="https://www.lightstars.org/" className="text-blue-600 underline">Main Website</a>
                    <a href="https://app.lightstars.org/courses" className="text-blue-600 underline">Courses</a>
                    <a href="https://app.lightstars.org/login" className="text-blue-600 underline">Admissions</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
