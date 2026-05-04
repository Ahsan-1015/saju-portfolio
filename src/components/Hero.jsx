const profilePhoto = "/saju.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 py-20 "
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_28%)]" />
      <div className="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(90deg,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:60px_60px]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr] items-center mt-20">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent font-medium shadow-sm shadow-accent/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to internships & collaborations
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-3">
              Hi there, I’m
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
              Hasibur Rahman Saju
            </h1>
            <p className="text-accent font-semibold text-lg mt-4">
              Building elegant web experiences with Java, React, and strong
              problem-solving.
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-400 lg:mx-0">
            I’m a final-year Computer Science student focused on creating
            reliable, user-centered applications. My work blends clean code,
            thoughtful UX, and practical engineering to deliver polished
            portfolio projects.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {[
              "Java · Spring Boot",
              "React & Tailwind",
              "DSA & Algorithms",
              "Responsive UI Design",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-700/80 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-[0_35px_120px_-60px_rgba(255,255,255,0.5)] backdrop-blur-xl">
          <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10" />
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-purple-500/15 blur-3xl" />

          <img
            src={profilePhoto}
            alt="Hasibur Rahman Saju"
            className="relative h-[560px] w-full max-w-[420px] rounded-[2.5rem] object-cover shadow-2xl shadow-black/40"
          />
        </div>
      </div>

      <div className="absolute left-1/2 top-full mt-12 -translate-x-1/2 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
        Scroll to explore more
      </div>
    </section>
  );
}
