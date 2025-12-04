"use client"

import SidebarGabi from "@/components/sidebargabi"
import { motion } from "framer-motion"

export default function ProjectLearingoPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

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
                  <motion.div initial="hidden" animate="show" variants={fadeUp}>
                    <header className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl">
                      <h1 className="text-3xl font-semibold mb-1">About</h1>
                      <h2 className="text-6xl font-semibold mb-4 text-blue-500">Learingo</h2>

                      <p className="mb-6">
                        Learingo is a modern, AI-augmented Learning Management System built for institutions seeking
                        scalable, measurable learning outcomes. The platform blends an intuitive student experience with
                        instructor tools and admin workflows — delivering courses, adaptive assessments, live sessions,
                        and analytics in a single cohesive product.
                      </p>

                      <ul className="flex flex-wrap gap-3 text-xs mb-6">
                        {[
                          "LMS",
                          "EdTech",
                          "AI-assisted learning",
                          "Next.js",
                          "Tailwind",
                          "Accessibility",
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
                  </motion.div>

                  <motion.img
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    src="/learingo.webp"
                    alt="Learingo platform preview — dashboard and course screens"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  <motion.div initial="hidden" animate="show" variants={fadeUp}>
                    <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl">
                      <h2 className="text-lg font-semibold mb-3">The Challenge</h2>
                      <p className="mb-3">
                        Most enterprise LMS offerings felt outdated, slow, and difficult for instructors to manage at
                        scale. Our brief: create a performant, approachable learning experience that increased
                        engagement and reduced instructor burden — while supporting tens of thousands of learners.
                      </p>

                      <ul className="list-disc pl-5 mb-4 text-xs space-y-1">
                        <li>Deliver fast, accessible learning across web & mobile.</li>
                        <li>Personalize assessments with AI without sacrificing transparency.</li>
                        <li>Provide admin tools for large-scale institution onboarding.</li>
                      </ul>

                      <h3 className="text-base font-medium mb-3">Research & Discovery</h3>
                      <p className="mb-3">
                        Research combined competitive analysis, user interviews with students & instructors, and analytics
                        audits of legacy LMS systems. We prioritized features that directly improved learning outcomes:
                        quick access to current tasks, clear progress signals, and reduced time-to-grade for instructors.
                      </p>

                      <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                        <li>Interviewed 25 instructors and 40 students across 8 institutions</li>
                        <li>Mapped common pain points: assignment flow, grading, discovery</li>
                        <li>Evaluated AI models for question generation and adaptive difficulty</li>
                      </ul>

                      <h3 className="text-base font-medium mb-3">Design & Development</h3>
                      <p className="mb-4">
                        We designed a responsive component system (atomic-first), accessible patterns, and a performance-minded
                        frontend. Development used Next.js for SSR/ISR where needed, Tailwind for a consistent utility-driven
                        system, and a component library that allowed rapid iteration across roles.
                      </p>

                      <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                        <li>Component-driven UI library with role-based variants</li>
                        <li>AI-assisted question generator integrated with review workflows</li>
                        <li>Progressive loading and optimization to keep interactive pages snappy</li>
                      </ul>

                      <h3 className="text-base font-medium mb-3">Results</h3>
                      <p className="mb-3">
                        Learingo launched with measurable improvements across engagement, retention, and instructor efficiency.
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
                              <td className="py-2 px-2">Average Session Duration</td>
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
                              <td className="py-2 px-2">Instructor Grading Time</td>
                              <td className="py-2 px-2">Baseline</td>
                              <td className="py-2 px-2">~40% faster</td>
                              <td className="py-2 px-2">-40%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p>
                        Learingo now scales across institutions with faster onboarding, more engaging learning flows, and
                        transparent AI-powered assessments that support educators instead of replacing them.
                      </p>
                    </div>
                  </motion.div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-80">
                  <div className="sticky top-8 space-y-4">
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={fadeUp}
                      className="rounded-lg border bg-white p-4 shadow-sm"
                    >
                      <h3 className="mb-3 text-base font-semibold">Project Details</h3>
                      <dl className="space-y-2 text-xs">
                        <div>
                          <dt className="font-medium text-muted-foreground">Company</dt>
                          <dd>Learingo</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Industry</dt>
                          <dd>Education Technology</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">Timeline</dt>
                          <dd>2 years 3 months</dd>
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
                          <dd>Adaptive assessments • Dashboards • Live sessions</dd>
                        </div>
                      </dl>
                    </motion.div>

                    <motion.a
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      href="#contact"
                      className="inline-block rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                      Work with us — similar projects
                    </motion.a>
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
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            src="/learingo.webp"
            alt="Learingo mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">Learingo — LMS Platform Redesign</h1>
            <p className="mb-4">
              AI-enhanced LMS with adaptive quizzes, instructor dashboards, and optimized flows for large institutions.
            </p>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">Engagement increased by 300% and instructor workflows became significantly faster.</p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">Platform</dt>
                  <dd>Learingo LMS</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Industry</dt>
                  <dd>EdTech</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Timeline</dt>
                  <dd>2 years 3 months</dd>
                </div>
              </dl>

              <p className="text-xs mt-3">Accessible, fast, and scalable learning experiences.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
