import SidebarGabi from "@/components/sidebargabi";
import { GitBranch, Linkedin, Mail, Instagram } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F4F4" }}>
      {/* Sidebar */}
      <SidebarGabi />

      {/* Main content */}
      <div className="lg:ml-[30%] lg:flex lg:flex-col">
        {/* Desktop: content area, Mobile: stacked layout */}
        <div className="lg:overflow-y-auto lg:h-screen">
          <div className="lg:p-8 p-6 space-y-8">
            {/* Hero Section */}
            <section className="space-y-4">
              <h1 className="font-sans text-xl font-semibold leading-tight text-foreground">About Me</h1>

              <div className="prose dark:prose-invert space-y-4 text-sm leading-relaxed">
                <p>
                  My journey started with curiosity—how interfaces work, why people prefer one design over another, and how small details can shape an entire experience. What began as simple interest quickly grew into a passion, leading me into the world of Frontend Engineering and UI/UX Design.
                </p>
                <p>
                  I work across React, Next.js, TypeScript, Tailwind, and React Native, combining clean engineering with thoughtful UX. Whether it’s a responsive web dashboard or a fully functional mobile app, I focus on creating experiences that feel fast, intuitive, and purposeful.
                </p>
                <p>
                  Across all these projects — Learingo, RiverCity, WAGO Bank, LightStars, DKV Mobility, IKS, Reploy Me, VaxAssist — one thing has stayed consistent: I love making technology feel simple. Whether on the web or on mobile, I design and build with clarity, usability, and the user’s perspective at the center.
                </p>
                <p>
                  I’m driven by simplicity, usability, and continuous learning. Every project teaches me something new — and that’s what keeps me building.

                  If you’re looking for someone who understands both design and development and can bring a product to life with precision — I’d love to collaborate.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-4">
              <h2 className="font-sans text-lg font-semibold text-foreground">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-foreground text-sm">BASc, Linguistics (English, Communications)</h3>
                  <p className="text-muted-foreground text-xs">Paraná State University (2021)</p>
                </div>

              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-4">
              <h2 className="font-sans text-lg font-semibold text-foreground">Skills</h2>

              <div className="space-y-6">
                {/* Hard Skills */}
                <div>
                  <h3 className="font-medium text-foreground mb-3 text-sm">Frontend Skills</h3>
                  <ul className="flex flex-wrap gap-3 text-xs">
                    {[
                      "HTML / HTML5",
                      "CSS / CSS3",
                      "JavaScript",
                      "TypeScript",
                      "React.js",
                      "Next.js",
                      "React Native",
                      "Vue.js",
                      "Redux",
                      "Tailwind CSS",
                      "Material UI",
                      "Bootstrap",
                      "SASS / SCSS",
                      "Responsive Design",
                      "Accessibility (WCAG, ARIA)",
                      "Performance Optimization",
                      "UI/UX Design",
                      "Figma",
                      "Git / GitHub",
                      "ESLint",
                      "CI/CD",
                      "Electron.js"
                    ].map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full border text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="font-medium text-foreground mb-3 text-sm">Soft Skills</h3>
                  <ul className="flex flex-wrap gap-3 text-xs">
                    {[
                      "Empathy",
                      "Critical Thinking",
                      "User Advocacy",
                      "User Research",
                      "Teamwork",
                      "Adaptability"
                    ].map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full border text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>


            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="font-sans text-lg font-semibold text-foreground border-b pb-2">Experience</h2>

              <div className="flex flex-col space-y-6">
                {/* Current Role */}
                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                  <div className="md:w-1/4 text-sm font-medium text-foreground">Feb 2025 - Present</div>
                  <div className="md:w-3/4 bg-muted p-4 rounded-lg border-l-4 border-primary space-y-2">
                    <h3 className="font-semibold text-foreground">LEARNINGO <span className="text-xs text-muted-foreground">(Remote · Web & Mobile App)</span></h3>
                    <ul className="list-disc list-inside text-xs space-y-1 text-foreground">
                      <li>Built an education platform with React/Next.js web and React Native mobile apps</li>
                      <li>Integrated OpenAI API to enable AI-powered learning features</li>
                      <li>Developed a gamified learning system with quizzes and progress tracking</li>
                      <li>Implemented Firebase for real-time data synchronization</li>
                      <li>Participated in 15+ Agile sprints and mentored 2 junior developers</li>
                    </ul>
                  </div>
                </div>

                {/* Previous Roles */}
                <div className="flex flex-col space-y-4">

                  {/* SAPPHIRE SOLUTION */}
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <div className="md:w-1/4 text-sm font-medium text-foreground">Sep 2023 - Jan 2025</div>
                    <div className="md:w-3/4 bg-muted p-4 rounded-lg border-l-4 border-primary space-y-2">
                      <h3 className="font-semibold text-foreground">SAPPHIRE SOLUTION <span className="text-xs text-muted-foreground">(Remote · California-based Web Solution Provider)</span></h3>
                      <ul className="list-disc list-inside text-xs space-y-1 text-foreground">
                        <li>Progressed from developer to team lead of 8 frontend engineers</li>
                        <li>Built RiverCity dashboard with 90+ dynamic forms using React Hook Form</li>
                        <li>Contributed to Phia AI platform serving 600K users</li>
                        <li>Introduced Figma QA process to improve development efficiency</li>
                        <li>Delivered multiple client projects maintaining high code quality standards</li>
                      </ul>
                    </div>
                  </div>

                  {/* IKS LOGICS */}
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <div className="md:w-1/4 text-sm font-medium text-foreground">Jan 2022 - Sep 2023</div>
                    <div className="md:w-3/4 bg-muted p-4 rounded-lg border-l-4 border-primary space-y-2">
                      <h3 className="font-semibold text-foreground">IKS LOGICS</h3>
                      <ul className="list-disc list-inside text-xs space-y-1 text-foreground">
                        <li>Developed WAGO Bank platform with financial calculators</li>
                        <li>Built features for LightStars Academy learning platform</li>
                        <li>Created DKV Mobility fleet management interface with mapping features</li>
                        <li>Improved performance using optimization techniques</li>
                      </ul>
                    </div>
                  </div>

                  {/* MEDCARE MSO */}
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <div className="md:w-1/4 text-sm font-medium text-foreground">Mar 2019 - Dec 2021</div>
                    <div className="md:w-3/4 bg-muted p-4 rounded-lg border-l-4 border-primary space-y-2">
                      <h3 className="font-semibold text-foreground">MEDCARE MSO <span className="text-xs text-muted-foreground">(Lahore, Pakistan · Healthcare Tech & Medical Billing Solutions)</span></h3>
                      <ul className="list-disc list-inside text-xs space-y-1 text-foreground">
                        <li>Contributed to MedCare MSO medical billing platform</li>
                        <li>Developed responsive websites for healthcare providers</li>
                        <li>Built psychology clinic portal with patient tracking features</li>
                        <li>Created VaxAssist for COVID vaccination data management</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Let's Connect Section */}


            {/* Let's Connect Section */}
            <section className="space-y-4">
              <h2 className="font-sans text-lg font-semibold text-foreground">Let's Connect</h2>
              <p className="text-xs text-muted-foreground max-w-md">
                I’m always open to collaborating, sharing ideas, or discussing opportunities. Connect with me:
              </p>

              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-muted rounded-full border text-foreground hover:bg-primary hover:text-white transition"
                >
                  <GitBranch className="w-4 h-4" />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-muted rounded-full border text-foreground hover:bg-primary hover:text-white transition"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                {/* Email */}
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-center gap-2 px-3 py-2 bg-muted rounded-full border text-foreground hover:bg-primary hover:text-white transition"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                {/* Twitter */}
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-muted rounded-full border text-foreground hover:bg-primary hover:text-white transition"
                >
                  <Instagram className="w-4 h-4" />
                  Twitter
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
