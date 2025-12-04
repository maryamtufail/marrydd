import SidebarGabi from "@/components/sidebargabi"

export default function Project3Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F4F4" }}>
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <div className="w-[30%]">
          <SidebarGabi />
        </div>

        {/* Case study main content */}
        <div className="flex-1 overflow-y-auto">
          <section className="px-4 py-12 md:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:gap-16">
              <article className="mx-auto">
                <img
                  src="/wago.png"
                  alt="WagoBank Digital Banking Platform"
                  className="mb-6 aspect-video w-full max-w-3xl rounded-lg border object-cover"
                />

                <div className="prose dark:prose-invert text-sm leading-relaxed">
                  <h1 className="text-xl font-regular mb-4">WagoBank — Digital Banking Platform</h1>
                  <p className="mb-6">
                    A secure, modern banking interface designed for both personal and business banking needs. The
                    platform offers seamless access to accounts, loans, cards, deposits, and financial tools—with a
                    strong emphasis on security, clarity, and trust.
                  </p>

                  <h2 className="text-lg font-semibold mb-3">Project Overview</h2>
                  <p className="mb-4">
                    WagoBank required a next-generation digital banking solution supporting multiple financial modules.
                    The redesign focused on trust, speed, simplicity, and a visually consistent user experience across
                    all financial operations.
                  </p>

                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-xs mb-4">
                    "The goal was simple: create a professional and reliable interface users can trust with their finances."
                  </blockquote>

                  <h3 className="text-base font-medium mb-3">Core Features</h3>
                  <ul className="text-xs space-y-1 mb-4">
                    <li>Savings & business accounts</li>
                    <li>Loan management & calculators</li>
                    <li>Card management & limits</li>
                    <li>Deposits, statements & secure transactions</li>
                    <li>Dashboard with quick insights</li>
                  </ul>

                  <h3 className="text-base font-medium mb-3">Tools & Technologies</h3>
                  <ul className="text-xs space-y-1 mb-4">
                    <li>React, Next.js, Tailwind for UI</li>
                    <li>Node.js for secure API operations</li>
                    <li>Encrypted backend with role-based access</li>
                  </ul>

                  <h3 className="text-base font-medium mb-3">Challenges</h3>
                  <ul className="text-xs space-y-1 mb-4">
                    <li>Building secure financial workflows</li>
                    <li>Managing multi-module banking systems</li>
                    <li>Keeping UX minimal and trustworthy</li>
                  </ul>

                  <h3 className="text-base font-medium mb-3">Research & Discovery</h3>
                  <p className="mb-4">
                    We studied fintech UX standards, regulatory requirements, and user expectations for modern banking.
                    The goal was to reduce friction in account access, transactions, and financial decision-making.
                  </p>

                  <h3 className="text-base font-medium mb-3">Design & Development</h3>
                  <ul className="text-xs space-y-1 mb-4">
                    <li>Loan calculators and repayment modules</li>
                    <li>Account dashboards with transaction insights</li>
                    <li>Business & personal banking flows</li>
                    <li>Secure authentication and user roles</li>
                    <li>Professional, minimal fintech UI patterns</li>
                  </ul>

                  <h3 className="text-base font-medium mb-3">Results</h3>
                  <div className="mb-4">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Outcome</th>
                          <th className="text-left py-2">Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Onboarding Flow</td>
                          <td className="py-2">Improved user registration & login experience</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Platform Usability</td>
                          <td className="py-2">Clearer banking modules & structured navigation</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Financial Tools</td>
                          <td className="py-2">Unified multiple banking products in one clean interface</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    WagoBank's redesign delivered a reliable, secure, and modern banking experience—empowering users to
                    handle finances confidently across accounts, cards, deposits, and business operations.
                  </p>
                </div>
              </article>

              {/* Sidebar Details */}
              <aside className="lg:w-80">
                <div className="sticky top-8 space-y-4">
                  <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <h3 className="mb-3 text-base font-semibold">Project Details</h3>

                    <dl className="space-y-2 text-xs">
                      <div>
                        <dt className="font-medium text-muted-foreground">Company</dt>
                        <dd>WagoBank</dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Industry</dt>
                        <dd>FinTech / Digital Banking</dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Timeline</dt>
                        <dd>1 Year 9 Months</dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Location</dt>
                        <dd>Global</dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Tech Stack</dt>
                        <dd>React, Next.js, Tailwind, Node.js</dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Website</dt>
                        <dd>
                          <a href="#" className="text-primary hover:underline">
                            wagobank.com
                          </a>
                        </dd>
                      </div>

                      <div>
                        <dt className="font-medium text-muted-foreground">Topics</dt>
                        <dd>FinTech, UI/UX, Secure Banking, Web Platform</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden">
        <SidebarGabi />

        <section className="px-4 py-12">
          <article>
            <img
              src="/wago.png"
              alt="WagoBank Digital Banking"
              className="mb-6 aspect-video w-full rounded-lg border object-cover"
            />

            <div className="prose dark:prose-invert text-sm leading-relaxed">
              <h1 className="text-xl font-regular mb-4">WagoBank — Digital Banking Platform</h1>
              <p className="mb-4">
                Secure, modern digital banking designed for global users, offering accounts, loans, cards, deposits, and
                financial tools in one clean interface.
              </p>

              <h2 className="text-lg font-semibold mb-3">Main Features</h2>
              <ul className="text-xs space-y-1 mb-4">
                <li>Accounts & dashboards</li>
                <li>Loans & calculators</li>
                <li>Card management</li>
                <li>Secure transactions</li>
              </ul>
            </div>
          </article>

          <div className="mt-6 rounded-lg border bg-card p-4 text-xs">
            <h3 className="mb-3 text-base font-semibold">Project Details</h3>

            <dl className="space-y-2">
              <div>
                <dt className="font-medium text-muted-foreground">Industry</dt>
                <dd>FinTech / Digital Banking</dd>
              </div>

              <div>
                <dt className="font-medium text-muted-foreground">Timeline</dt>
                <dd>1 Year 9 Months</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}
