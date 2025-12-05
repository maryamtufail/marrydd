"use client";

import SidebarGabi from "@/components/sidebargabi";

export default function ProjectMeYouReflectionPage() {
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
                      ME & YOU — Reflection, Listening Practice & Formation
                      Exercise
                    </h2>

                    <p className="mb-6">
                      “ME & YOU” is a guided reflection and emotional awareness
                      exercise designed to help individuals understand
                      themselves through the lens of their relationships. This
                      project combines{" "}
                      <strong>
                        self-awareness, emotional processing, reflective
                        prompts, and personal development
                      </strong>{" "}
                      into a structured experience that encourages deeper
                      listening, inner clarity, and identity formation.
                    </p>

                    <p className="mb-6">
                      The purpose was to design a{" "}
                      <strong>
                        simple, readable, and therapeutic content structure
                      </strong>
                      that captures emotional depth while keeping the experience
                      human-centered and accessible. This page organizes
                      reflective content into a clear journey — starting from
                      quotes, moving into listening themes, and ending with a
                      structured formation timeline.
                    </p>

                    <ul className="flex flex-wrap gap-3 text-xs mb-6">
                      {[
                        "Emotional Reflection",
                        "Self-Awareness",
                        "Personal Growth",
                        "Listening Practice",
                        "Therapy-Inspired Writing",
                        "Content Designing",
                        "Experience Design",
                        "Human-Centered Writing",
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
                    src="/meyou.png"
                    alt="ME & YOU Reflection Preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  <img
                    src="/rm.png"
                    alt="ME & YOU Reflection Preview"
                    className="mb-6 w-full max-w-3xl rounded-lg border object-cover"
                    loading="lazy"
                  />

                  {/* Project Scope */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">
                      Project Scope
                    </h2>
                    <p className="mb-4">
                      The scope was to convert raw psychological reflection
                      prompts into a structured, well-written, emotionally
                      balanced, and user-friendly page. Instead of appearing
                      like scattered notes, the content was transformed into a
                      complete experience with clarity, hierarchy, and purpose.
                    </p>

                    <h3 className="text-base font-medium mb-2">
                      Included in the Structure
                    </h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Opening reflection on emotional relationships</li>
                      <li>Key listening-focused psychological quotes</li>
                      <li>Guided reflective prompts</li>
                      <li>Formation timeline across life stages</li>
                      <li>Positive & negative life-mapping questions</li>
                      <li>Emotional awareness content formatting</li>
                    </ul>
                  </div>

                  {/* Listening & Quotes */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-8">
                    <h2 className="text-lg font-semibold mb-3">
                      Listening & Reflection Themes
                    </h2>
                    <p className="mb-4">
                      The content emphasizes the importance of being heard and
                      emotionally understood. Multiple quotes from renowned
                      psychologists were used to anchor the emotional weight and
                      psychological depth of the theme.
                    </p>

                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        “An appreciative listener is always stimulating.” —
                        Agatha Christie
                      </li>
                      <li>
                        “When someone really hears you… it feels damn good!” —
                        Carl Rogers
                      </li>
                      <li>
                        “When we listen, we hear someone into existence.” —
                        Laurie Buchanan
                      </li>
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="prose dark:prose-invert text-sm leading-relaxed max-w-3xl mb-6">
                    <h2 className="text-lg font-semibold mb-3">Challenges</h2>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Transforming emotional content into a structured,
                        readable format
                      </li>
                      <li>
                        Ensuring the reflections feel therapeutic, not
                        overwhelming
                      </li>
                      <li>
                        Maintaining balance: not too clinical, not too casual
                      </li>
                      <li>
                        Designing content that flows like a guided experience
                      </li>
                      <li>
                        Converting life stages into a clear timeline without
                        clutter
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Research</h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>Psychological listening theories (Carl Rogers)</li>
                      <li>Therapeutic writing methods</li>
                      <li>
                        Life-mapping and formation exercises used in
                        coaching/counseling
                      </li>
                      <li>
                        Emotional UX research for sensitive content experiences
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">
                      Content Design Approach
                    </h3>
                    <ul className="list-disc pl-5 text-xs space-y-1 mb-4">
                      <li>
                        Simplified complex emotional content into digestible
                        sections
                      </li>
                      <li>
                        Clear hierarchy with headings, quotes, and reflection
                        blocks
                      </li>
                      <li>
                        Maintained soft, calm, and reflective tone throughout
                      </li>
                      <li>
                        Added structured prompts to encourage emotional
                        awareness
                      </li>
                      <li>
                        Used a timeline table to visually simplify life-stage
                        reflections
                      </li>
                    </ul>

                    <h3 className="text-base font-medium mb-2">Results</h3>
                    <p className="mb-3">
                      The final page became a{" "}
                      <strong>guided therapeutic experience</strong> rather than
                      just text. Users can calmly reflect on past experiences,
                      understand emotional patterns, and connect with themselves
                      through structured writing. The content feels meaningful,
                      gentle, and deeply human.
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
                            <td className="py-2 px-2">Emotional Clarity</td>
                            <td className="py-2 px-2">
                              Improved through structured reflection
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2">Engagement</td>
                            <td className="py-2 px-2">
                              Users spend more time reading calmly
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2">Content Readability</td>
                            <td className="py-2 px-2">
                              Much higher due to proper hierarchy
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
                            Project
                          </dt>
                          <dd>ME & YOU — Reflection & Listening Exercise</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Scope
                          </dt>
                          <dd>
                            Content Design • Emotional Structure • UX Writing
                          </dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Timeline
                          </dt>
                          <dd>8 Months</dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Focus
                          </dt>
                          <dd>
                            Self-Awareness • Emotional Intelligence • Reflection
                          </dd>
                        </div>

                        <div>
                          <dt className="font-medium text-muted-foreground">
                            Content Themes
                          </dt>
                          <dd>
                            Listening • Growth • Life Mapping • Relationships
                          </dd>
                        </div>

                         <div>
                          <dt className="font-medium text-muted-foreground">
                            Content Themes
                          </dt>
                          <dd>
                            Listening • Growth • Life Mapping • Relationships
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
            src="/meyou.png"
            alt="ME & YOU mobile preview"
            className="mb-6 aspect-video w-full rounded-lg border object-cover"
            loading="lazy"
          />

          <div className="prose dark:prose-invert text-sm leading-relaxed">
            <h1 className="text-xl font-semibold mb-4">
              ME & YOU — Reflection Exercise
            </h1>
            <p className="mb-4">
              A structured emotional reflection experience exploring listening,
              relationships, and key life stages through guided prompts.
            </p>

            <h2 className="text-lg font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-xs space-y-1 mb-6">
              <li>Listening-focused emotional prompts</li>
              <li>Life-stage formation timeline</li>
              <li>Guided reflections & deep questions</li>
              <li>Calm, therapeutic writing structure</li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <p className="mb-4">
              The content became a gentle, structured way for users to explore
              their emotional world and understand their personal history.
            </p>

            <div className="mt-6 rounded-lg border bg-white p-4 text-xs">
              <h3 className="mb-3 text-base font-semibold">Project Details</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-muted-foreground">
                    Timeline
                  </dt>
                  <dd>11 Months</dd>
                </div>

                <div>
                  <dt className="font-medium text-muted-foreground">Focus</dt>
                  <dd>Self-Awareness • Emotional Intelligence</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
