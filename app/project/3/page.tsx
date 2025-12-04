"use client";

import SidebarGabi from "@/components/sidebargabi";

export default function ProjectWagoBankPage() {
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
                      FinTech • Digital Banking • AI-Powered Banking Platform
                    </h2>

                    <p className="mb-6">
                      WagoBank required a secure, modern digital banking
                      interface supporting{" "}
                      <strong>
                        personal and business accounts, loans, cards, deposits,
                        AI-driven insights,
                      </strong>{" "}
                      and seamless financial workflows. The goal was to build a
                      global-ready, scalable digital banking platform with
                      enterprise security, transparent UX, and intelligent
                      automation.
                    </p>
                  </header>

                  {/* Desktop Image */}

                  <img
                    src="/wagomain.png"
                    alt="WagoBank platform dashboard and banking interfaces"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Platform Overview */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">
                      Platform Overview
                    </h2>
                    <p className="mb-4">
                      WagoBank delivers a next-generation banking experience
                      with unified digital modules for:
                    </p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Personal & Business Accounts</li>
                      <li>Loan applications, calculators & credit scoring</li>
                      <li>Card issuance & management</li>
                      <li>Deposits & automated financial planning</li>
                      <li>Secure global transactions with audit trails</li>
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Implementing secure financial workflows without
                        increasing friction
                      </li>
                      <li>
                        Combining multiple banking modules into one unified
                        interface
                      </li>
                      <li>
                        Ensuring AI insights were human-friendly, transparent &
                        trustworthy
                      </li>
                      <li>
                        Building global security standards (encryption,
                        role-based access, AML)
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Studied fintech UX standards & global banking flows
                      </li>
                      <li>
                        Analyzed compliance, KYC, AML, and privacy requirements
                      </li>
                      <li>Benchmarked modern AI-driven banking systems</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">
                      Design & Development
                    </h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Modular dashboards for accounts, cards, deposits & loans
                      </li>
                      <li>
                        AI-driven insights, risk analysis & predictive charts
                      </li>
                      <li>Node.js encrypted APIs + role-based access</li>
                      <li>
                        Minimal, trust-centered UI for clear financial
                        interactions
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">
                      Stats / Results
                    </h3>
                    <p className="mb-3">
                      The new digital banking system improved performance and
                      usability while strengthening security.
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
                            <td className="py-2 px-2">User onboarding</td>
                            <td className="py-2 px-2">
                              40% faster across banking flows
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">AI fraud alerts</td>
                            <td className="py-2 px-2">
                              Detected anomalies 3× faster
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Platform usability</td>
                            <td className="py-2 px-2">
                              Clearer structure across all banking modules
                            </td>
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
                      <h3 className="mb-3 text-base font-semibold">
                        Project Details
                      </h3>
                      <dl className="space-y-2 text-xs">
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Company
                          </dt>
                          <dd>WagoBank</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Industry
                          </dt>
                          <dd>FinTech • Digital Banking • AI</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Timeline
                          </dt>
                          <dd>9 Months</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Country
                          </dt>
                          <dd>Global</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Tech Stack
                          </dt>
                          <dd>
                            Next.js • React • Node.js • Tailwind • TypeScript •
                            AI Models • Secure APIs
                          </dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Focus
                          </dt>
                          <dd>
                            AI Banking • Dashboards • Loans • Cards • Fraud
                            Detection • Deposits • Predictive Analytics
                          </dd>
                        </div>

                        {/* Multiple Links */}
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Live Links
                          </dt>
                          <dd className="flex flex-col gap-1 mt-1">
                            <a
                              href="https://wagobank.com"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              wagobank.com
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
            src="/wagobank.webp"
            alt="WagoBank mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">
              WagoBank — AI-Powered Digital Banking
            </h1>
            <p className="mb-4">
              A global banking platform with secure transactions, AI insights,
              multiple banking modules, and clean UX.
            </p>

            <h2 className="text-lg font-semibold mb-3">AI Features</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>AI fraud detection</li>
              <li>AI transaction categorization</li>
              <li>AI credit scoring</li>
              <li>Predictive financial analytics</li>
              <li>AI banking assistant</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              Faster onboarding, smarter financial tools, and improved security
              across all workflows.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Platform
                  </dt>
                  <dd>WagoBank</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Industry
                  </dt>
                  <dd>FinTech • Banking • AI</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Timeline
                  </dt>
                  <dd>9 Months</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Links</dt>
                  <dd className="flex flex-col gap-1 mt-1">
                    <a
                      href="https://wagobank.com"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Main Website
                    </a>
                    <a
                      href="https://dashboard.wagobank.com"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Dashboard
                    </a>
                    <a
                      href="https://admin.wagobank.com"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Admin Portal
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="text-xs mt-3">
                Secure, intelligent banking for global customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
