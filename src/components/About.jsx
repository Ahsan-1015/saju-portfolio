const stats = [
  { value: "Final", label: "Year of Study" },
  { value: "15+", label: "Projects Built" },
  { value: "∞", label: "Things to Learn" },
];

const profileSrc = "/saju.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="section-sub">// who am i</p>
            <h2 className="section-heading">About Me</h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-white font-medium">
                  Hasibur Rahman Saju
                </span>
                , a final-year Computer Science and Engineering student with a
                strong passion for programming and software development. Over
                four years, I've built a solid foundation in both theory and
                practice.
              </p>
              <p>
                I've completed coursework and hands-on projects in{" "}
                <span className="text-white font-medium">
                  Data Structures & Algorithms
                </span>{" "}
                and{" "}
                <span className="text-white font-medium">Advanced Java</span> —
                including OOP design patterns, multithreading, and collections.
                I enjoy designing clean solutions to complex problems and
                writing maintainable code.
              </p>
              <p>
                Now in my final year, I'm focused on bridging academics with
                industry — building real projects, sharpening my{" "}
                <span className="text-accent">software engineering</span>{" "}
                skills, and preparing to make a meaningful contribution in my
                first professional role.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#projects" className="btn-primary">
                See My Work
              </a>
              <a href="mailto:saju@gmail.com" className="btn-outline">
                Say Hello
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="space-y-4">
            {/* Avatar card */}
            <div className="card flex items-center gap-5">
              <img
                src={profileSrc}
                alt="Hasibur Rahman Saju"
                className="w-16 h-16 rounded-2xl object-cover shrink-0"
              />
              <div>
                <p className="text-white font-semibold">Hasibur Rahman Saju</p>
                <p className="text-sm text-gray-500">
                  Final Year CSE · Java Dev · Builder
                </p>
                <p className="text-xs text-accent mt-1 font-mono">
                  @github/saju1083
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card text-center py-5">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Current focus */}
            <div className="card">
              <p className="text-xs text-gray-500 font-mono mb-3">
                // currently focused on
              </p>
              <ul className="space-y-2">
                {[
                  "Advanced Java — OOP & Design Patterns",
                  "DSA & Algorithm problem solving",
                  "Building full-stack React apps",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="text-accent mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
