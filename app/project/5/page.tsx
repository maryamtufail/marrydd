"use client"

import SidebarGabi from "@/components/sidebargabi"

export default function ProjectDKVPage() {
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
                      DKV Mobility — Fleet & Mobility Platform (Dashboard + Multi-page Website)
                    </h2>

                    <p className="mb-6">
                      DKV Mobility provides fuel cards, EV charge cards, toll solutions, telematics and digital financial services
                      across Europe. This project included a full redesign of their multi-page website (commerce-style product pages
                      for services and cards) and a unified internal **Cockpit Dashboard** for fleet managers and operations teams.
                      The combined outcome improved discoverability, customer onboarding, and operational visibility.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "Mobility",
                        "Fuel & EV",
                        "Toll Billing",
                        "Telematics",
                        "E-commerce Pages",
                        "Dashboard UX",
                        "Next.js",
                        "Tailwind",
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
                    src="/dkv1.png"
                    alt="DKV Mobility dashboard and product pages preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Platform Overview */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Project Scope</h2>
                    <p className="mb-4">
                      Deliverables included a conversion-focused multi-page website (service/product pages, shop, newsroom, station finder),
                      and a powerful operations **Cockpit Dashboard** for card management, telematics, toll reconciliation and reporting.
                      The website acts like an e-commerce site for mobility products while the dashboard supports day-to-day fleet operations.
                    </p>

                    <h3 className="text-base font-medium mb-2">Key Website Pages</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Product pages for Fuel Cards, EV Charge Cards, Toll Boxes, and Digital Services</li>
                      <li>Shop & purchase flow for account sign-up and card orders</li>
                      <li>Station Finder — discover fuel & charge points</li>
                      <li>Newsroom, Helpcenter, and Career pages</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Cockpit Dashboard</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Client overview: cards, vehicles, invoices, contracts</li>
                      <li>Telematics & DKV LIVE integration: locations, routes, utilization</li>
                      <li>Toll & billing reconciliation with exportable reports</li>
                      <li>Acceptance partner management for stations</li>
                      <li>Role-based access and quick actions (block card, open dispute)</li>
                    </ul>
                  </div>

                  {/* AI Assistance & Multi-link Handling */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">AI Assistance (Supportive)</h2>
                    <p className="mb-4">
                      AI was integrated as an **assistive tool** — helping agents and customers navigate complex relationships and speed up routine tasks.
                      It does not make final decisions; it suggests actions and surfaces relevant links and data.
                    </p>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li><strong>Link resolution:</strong> AI highlights connected accounts, linked cards, and cross-product relationships so agents see the full picture quickly.</li>
                      <li><strong>Smart suggestions:</strong> AI suggests quick actions (flag a transaction, request documents, escalate to fraud) based on context.</li>
                      <li><strong>Search assistant:</strong> Natural-language search to find stations, customers, invoices or tickets across modules.</li>
                      <li><strong>Summary insights:</strong> Auto-generated short summaries for customer profiles and recent activity to speed up calls.</li>
                    </ul>
                  </div>

                  {/* Challenges, Research, Design */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Presenting many services (cards, charging, tolls) in a clear commerce-style site</li>
                      <li>Connecting website purchase flows with the internal provisioning dashboard</li>
                      <li>Providing operations teams fast access to cross-linked data between stations, cards, & vehicles</li>
                      <li>Maintaining compliance and secure access across billing and telematics</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Competitive analysis of mobility & fleet portals</li>
                      <li>User interviews with fleet managers, station partners, and support agents</li>
                      <li>Reviewed conversion flows for card ordering and partner onboarding</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Design & Development</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>E-commerce-style product pages with clear pricing calls-to-action</li>
                      <li>Dashboard UX focused on rapid triage — filters, badges, and KPI cards</li>
                      <li>Station Finder UI connected to acceptance partner management</li>
                      <li>Secure authentication, audit logs, and role-based views</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Results</h3>
                    <p className="mb-3">
                      The combined redesign increased product discoverability and reduced operational friction between sales, onboarding and operations.
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
                            <td className="py-2 px-2">Card Ordering Conversion</td>
                            <td className="py-2 px-2">+28% through clearer product pages</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Support Resolution Time</td>
                            <td className="py-2 px-2">-30% thanks to dashboard quick-actions & AI summaries</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Partner Onboarding</td>
                            <td className="py-2 px-2">Faster acceptance setup and data syncing</td>
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
                          <dd>DKV Mobility</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Scope</dt>
                          <dd>Dashboard UX • Multi-page Website • E-commerce-style Product Flow</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>1 year 4 Months</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Region</dt>
                          <dd>Europe / Global</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Tech Stack</dt>
                          <dd>Next.js • React • Tailwind • Node.js • Secure APIs</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Focus</dt>
                          <dd>Fuel Cards • EV Charging • Toll • Telematics • Partner Network</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Key Links</dt>
                          <dd className="flex flex-col gap-1 mt-1 text-xs">
                            <a href="https://dkv-mobility.com" target="_blank" className="text-blue-600 underline">
                              Main Website
                            </a>
                            <a href="https://www.dkv-mobility.com/uk/en/shop" target="_blank" className="text-blue-600 underline">
                              Shop / Order Cards
                            </a>
                            <a href="https://my.dkv-mobility.com/auth/realms/dkv/protocol/openid-connect/auth?client_id=magento-shop-client&scope=openid&state=%257B%2522app_name%2522%253A%2522Keycloak%2522%252C%2522relayState%2522%253A%2522https%253A%255C%252F%255C%252Fwww.dkv-mobility.com%255C%252Fcustomer%255C%252Flogin%2522%257D&redirect_uri=https%3A%2F%2Fadobe-prod.dkv-mobility.com%2Fmooauth%2Factions%2FReadAuthorizationResponse&response_type=code&relayState=https%3A%2F%2Fwww.dkv-mobility.com%2Fcustomer%2Flogin" target="_blank" className="text-blue-600 underline">
                              Cockpit (Dashboard)
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
            src="/dkv1.png"
            alt="DKV Mobility mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">DKV Mobility — Fleet & Mobility Platform</h1>
            <p className="mb-4">
              Multi-page website and operations cockpit for fuel cards, EV charging, toll billing, telematics and partner management.
            </p>

            <h2 className="text-lg font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>Shop-style product pages (cards, charging, tolls)</li>
              <li>Station Finder & Acceptance Partner tools</li>
              <li>Cockpit dashboard for fleet managers</li>
              <li>AI assistance for quick summaries and link handling</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              Improved conversions for card orders, faster support resolution, and streamlined partner onboarding.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Company</dt>
                  <dd>DKV Mobility</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>11 Months</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Links</dt>
                  <dd className="flex flex-col gap-1 mt-1">
                    <a href="https://dkv-mobility.com" target="_blank" className="text-blue-600 underline">Main Site</a>
                    <a href="https://my.dkv-mobility.com/auth/realms/dkv/protocol/openid-connect/auth?client_id=magento-shop-client&scope=openid&state=%257B%2522app_name%2522%253A%2522Keycloak%2522%252C%2522relayState%2522%253A%2522https%253A%255C%252F%255C%252Fwww.dkv-mobility.com%255C%252Fcustomer%255C%252Flogin%2522%257D&redirect_uri=https%3A%2F%2Fadobe-prod.dkv-mobility.com%2Fmooauth%2Factions%2FReadAuthorizationResponse&response_type=code&relayState=https%3A%2F%2Fwww.dkv-mobility.com%2Fcustomer%2Flogin" target="_blank" className="text-blue-600 underline">Cockpit</a>
                    <a href="https://www.dkv-mobility.com/uk/en/shop" target="_blank" className="text-blue-600 underline">Shop</a>
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
