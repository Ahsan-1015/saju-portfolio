const educationYears = [
  {
    year: "First Year",
    courses: [
      "Introduction to Programming",
      "Discrete Mathematics",
      "Digital Logic Design",
      "Physics for Computing",
    ],
  },
  {
    year: "Second Year",
    courses: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Organization",
    ],
  },
  {
    year: "Third Year",
    courses: [
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
    ],
  },
  {
    year: "Final Year",
    courses: [
      "Advanced Java Programming",
      "Machine Learning Fundamentals",
      "Mobile App Development",
      "Project Work & Capstone",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-sub">// where i study</p>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500 rounded-l-2xl" />

            <div className="pl-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                      Final Year CSE student
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">
                    BSc in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-400 mt-1">
                    City University
                    <span className="text-gray-600"> — Dhaka, Bangladesh</span>
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-mono text-gray-500">2022 — 2026</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Expected Graduation
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4 font-mono">
                  // year-by-year coursework
                </p>
                <div className="space-y-4">
                  {educationYears.map((section) => (
                    <div
                      key={section.year}
                      className="rounded-3xl border border-white/10 bg-slate-950/80 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                          {section.year}
                        </p>
                        <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full">
                          {section.courses.length} courses
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.courses.map((course) => (
                          <span
                            key={course}
                            className="badge bg-white/5 text-gray-200 border border-white/10"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Status</p>
                  <p className="text-sm text-green-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Active Student
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Current Year</p>
                  <p className="text-sm text-white font-medium">Final Year</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Focus Area</p>
                  <p className="text-sm text-white font-medium">
                    Software Engineering & Full-stack Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Self-learning note */}
          <div className="card mt-4 flex items-start gap-4">
            <span className="text-2xl">📚</span>
            <div>
              <p className="text-sm font-medium text-white">Self-Learning</p>
              <p className="text-sm text-gray-500 mt-1">
                Beyond university, I actively learn through online platforms
                like freeCodeCamp, MDN, and YouTube. I believe in supplementing
                formal education with hands-on practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
