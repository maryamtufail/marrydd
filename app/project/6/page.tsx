"use client"

import SidebarGabi from "@/components/sidebargabi"

export default function ProjectIKSLogicsPage() {
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
                      IKS Logics — Corporate Multi-Page Website (Company + Full Service Pages)
                    </h2>

                    <p className="mb-6">
                      IKS Logics is a global software development and IT services company delivering modern web development,
                      mobile apps, UI/UX design, digital marketing, QA, and dedicated development teams.  
                      This project involved a complete redesign of their **corporate multi-page website** — including Home, About,
                      full Services pages, Careers, and Contact.  
                      The goal was to create a scalable, modern, and conversion-focused website that reflects the company’s global
                      presence and wide service offerings.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "Corporate Website",
                        "Multi-page",
                        "Services Pages",
                        "UI/UX",
                        "Web Design",
                        "Next.js",
                        "Tailwind",
                        "Tech Company",
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
                    src="/iksw.png"
                    alt="IKS Logics corporate website preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Website Overview */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Project Scope</h2>
                    <p className="mb-4">
                      The redesign included a fully structured multi-page website with improved content hierarchy,
                      strong service-focused navigation, and optimized lead-generation elements.
                      The website was designed to scale as the company expands its services and international presence.
                    </p>

                    <h3 className="text-base font-medium mb-2">Key Website Pages</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Home Page — services overview, global presence, client trust, stats</li>
                      <li>About Us — company story, expertise, values, global offices</li>
                      <li>
                        Services Pages — UI/UX, Web Development, Mobile Apps, QA, E-commerce, Outsourcing, Digital
                        Marketing, Consultancy
                      </li>
                      <li>Careers — culture, openings, hiring process</li>
                      <li>Contact — inquiry form, office locations, support</li>
                      <li>Blog (optional expansion) — articles & insights</li>
                    </ul>
                  </div>

                  {/* AI Assistance (Supportive) */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">AI Assistance (Supportive)</h2>
                    <p className="mb-4">
                      AI was added as a **supportive assistant** to help users and internal teams access information faster.
                      It does not replace the final decision-making — it only assists by connecting related pages and improving searchability.
                    </p>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        <strong>Multi-link handling:</strong> AI highlights related service pages, blog posts, or
                        contact options based on user queries.
                      </li>
                      <li>
                        <strong>Search assistance:</strong> Natural-language search to quickly access any page
                        (services, careers, blogs, or contact).
                      </li>
                      <li>
                        <strong>Smart suggestions:</strong> Helps users discover relevant services (e.g., after viewing
                        Web Development, suggests UI/UX or QA).
                      </li>
                      <li>
                        <strong>Content summaries:</strong> AI provides short auto-summaries of long service pages to
                        improve user clarity.
                      </li>
                    </ul>
                  </div>

                  {/* Challenges, Research, Design */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Presenting 10+ services without overwhelming users</li>
                      <li>Creating a professional corporate feel while keeping usability simple</li>
                      <li>Building scalable multi-page navigation for future growth</li>
                      <li>Unifying brand identity across all pages</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Competitive analysis of IT companies</li>
                      <li>Reviewed SEO and content structure of leading tech agencies</li>
                      <li>Positioning analysis for global vs. local markets</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Design & Development</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Clear navigation structure with categorized services</li>
                      <li>Consistent card layouts, CTAs, and content blocks</li>
                      <li>Modern corporate aesthetic using clean typography and spacing</li>
                      <li>Responsive mobile-first approach</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Results</h3>
                    <p className="mb-3">
                      The website established IKS Logics as a credible international tech company, improving service
                      discoverability and increasing inbound inquiries.
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
                            <td className="py-2 px-2">Lead Generation</td>
                            <td className="py-2 px-2">+35% via clearer CTAs and service flows</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Service Discoverability</td>
                            <td className="py-2 px-2">Significantly improved with structured menus</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Brand Credibility</td>
                            <td className="py-2 px-2">Stronger presence with modern corporate design</td>
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
                          <dd>IKS Logics</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Scope</dt>
                          <dd>Corporate Website • Multi-page Services • UX Writing</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>2 Months</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Region</dt>
                          <dd>Global (USA • Sweden • Pakistan)</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Tech Stack</dt>
                          <dd>Next.js • React • Tailwind • Node.js</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Corporate Branding • Services • Lead Generation</dd>
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
            src="/iksw.png"
            alt="IKS Logics mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />


          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">IKS Logics — Corporate Multi-Page Website</h1>
            <p className="mb-4">
              Full multi-page company website including Home, About, Services, Careers, and Contact — designed for strong 
              brand presence and smooth navigation.
            </p>

            <h2 className="text-lg font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>Full multi-page website structure</li>
              <li>Dedicated service pages with clear content blocks</li>
              <li>Corporate UI/UX for global tech company</li>
              <li>AI assistance for search & multi-link suggestions</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              Improved service clarity, stronger brand identity, and increased inquiries from global clients.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Company</dt>
                  <dd>IKS Logics</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>11 Months</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Links</dt>
                  <dd className="flex flex-col gap-1 mt-1">
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
  )
}
