"use client";

import SidebarGabi from "@/components/sidebargabi";

export default function ProjectLearingoPage() {
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
                      AI-Enhanced Learning Management System
                    </h2>
                    <p className="mb-6">
                      Learingo is a cutting-edge{" "}
                      <strong>LMS (Learning Management System)</strong> designed
                      for educational institutions, online academies, and
                      corporate training programs. Leveraging{" "}
                      <strong>AI-assisted learning</strong>, Learingo delivers
                      adaptive courses, intelligent assessments, real-time
                      analytics, and engaging student experiences in one
                      scalable platform.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "LMS",
                        "EdTech",
                        "AI-assisted learning",
                        "Next.js",
                        "Tailwind",
                        "Mobile App",
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-6">
                    <img
                      src="/call.png"
                      alt="Learingo platform preview — dashboard and course screens"
                      className="w-full h-auto rounded-lg object-cover"
                      loading="lazy"
                    />
                    <img
                      src="/lmobile.webp"
                      alt="Learingo platform preview — mobile screens"
                      className="w-full h-auto rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Mobile App Section */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">Mobile App</h2>
                    <p className="mb-4">
                      Learingo also includes a fully responsive mobile app for
                      students on the go, featuring:
                    </p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Push notifications for assignments & deadlines</li>
                      <li>Offline access for lectures and notes</li>
                      <li>
                        Mobile quizzes with AI-assisted adaptive assessments
                      </li>
                      <li>Real-time progress tracking</li>
                    </ul>
                  </div>

                  {/* Challenges Section */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">
                      Challenges in Enterprise Learning
                    </h2>
                    <p className="mb-4">
                      Traditional LMS platforms are often slow, outdated, and
                      difficult for instructors to manage at scale. Learingo
                      addresses key challenges such as low engagement,
                      complicated content management, limited scalability, and
                      lack of transparency in adaptive assessments.
                    </p>

                    <h3 className="text-base font-medium mb-2">
                      Research & Discovery
                    </h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Interviews: 25 instructors and 40 students across 8
                        institutions
                      </li>
                      <li>
                        Pain point mapping: assignment flows, grading, discovery
                      </li>
                      <li>
                        AI evaluation: adaptive difficulty and question
                        generation models
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">
                      Design & Development
                    </h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Component-driven, atomic-first design system</li>
                      <li>
                        Next.js for SSR/ISR and Tailwind CSS for utility-first
                        styling
                      </li>
                      <li>
                        AI-assisted question generator and adaptive assessments
                      </li>
                      <li>Progressive loading for fast interactive pages</li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">
                      Results & Impact
                    </h3>
                    <p className="mb-3">
                      Learingo’s launch delivered measurable improvements in
                      engagement, retention, and instructor efficiency.
                    </p>
                        <img
                      src="/learingo.webp"
                      alt="Learingo platform preview — dashboard and course screens"
                      className="w-full h-auto rounded-lg object-cover mb-4"
                      loading="lazy"
                    />


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
                            <td className="py-2 px-2">
                              Average Session Duration
                            </td>
                            <td className="py-2 px-2">2.3 min</td>
                            <td className="py-2 px-2">9.2 min</td>
                            <td className="py-2 px-2">+300%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Bounce Rate</td>
                            <td className="py-2 px-2">68%</td>
                            <td className="py-2 px-2">23%</td>
                            <td className="py-2 px-2">-66%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">
                              Instructor Grading Time
                            </td>
                            <td className="py-2 px-2">Baseline</td>
                            <td className="py-2 px-2">~40% faster</td>
                            <td className="py-2 px-2">-40%</td>
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
                          <dd>Learingo</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Industry
                          </dt>
                          <dd>Education Technology / EdTech</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Timeline
                          </dt>
                          <dd>11 months</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Country
                          </dt>
                          <dd>United States</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Tech Stack
                          </dt>
                          <dd>
                            Next.js • React • Node.js • React Native • Tailwind
                            • OpenAPI • TypeScript{" "}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Focus
                          </dt>
                          <dd>
                            Adaptive assessments • Dashboards • Live sessions •
                            Mobile App
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Live Link
                          </dt>
                          <dd>
                            <a
                              href="https://learnigo.org"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              learnigo.org
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
            src="/learingo.webp"
            alt="Learingo mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">
              Learingo — AI-Enhanced LMS
            </h1>
            <p className="mb-4">
              AI-assisted LMS with adaptive quizzes, dashboards, live sessions,
              and mobile-first experience for learners anywhere.
            </p>

            <h2 className="text-lg font-semibold mb-3">Mobile App</h2>
            <p className="mb-4">
              Complete mobile learning experience with push notifications,
              offline mode, and adaptive quizzes.
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>Push notifications</li>
              <li>Offline lecture saving</li>
              <li>Mobile quizzes & progress tracking</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              Engagement increased by 300%, and instructor workflows became 40%
              faster.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Platform
                  </dt>
                  <dd>Learingo LMS</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Industry
                  </dt>
                  <dd>EdTech</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Timeline
                  </dt>
                  <dd>11 months</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Live Link
                  </dt>
                  <dd>
                    <a
                      href="https://learnigo.org"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      learnigo.org
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="text-xs mt-3">
                Accessible, fast, and scalable learning experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
