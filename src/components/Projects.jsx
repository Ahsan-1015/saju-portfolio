const projects = [
  {
    title: "Simple Calculator",
    emoji: "🧮",
    description:
      "A clean, functional calculator built from scratch. Supports basic arithmetic operations with a responsive UI. My first real JavaScript DOM project.",
    tags: ["HTML", "CSS", "JavaScript"],
    what: "Practiced DOM manipulation, event handling, and CSS grid layout.",
    github: "https://github.com/saju1083/calculator",
    demo: "#",
    status: "completed",
  },
  {
    title: "To-Do App",
    emoji: "✅",
    description:
      "A minimal task management app where you can add, complete, and delete tasks. Data persists using localStorage so nothing gets lost on refresh.",
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    what: "Learned about CRUD operations, local storage, and dynamic rendering.",
    github: "https://github.com/saju1083/todo-app",
    demo: "#",
    status: "completed",
  },
  {
    title: "Personal Portfolio",
    emoji: "🌐",
    description:
      "This very website! Built with React and Tailwind CSS. My most ambitious project yet — designing and coding a full portfolio from scratch.",
    tags: ["React", "Tailwind CSS", "Vite"],
    what: "Currently working on it. Learning React component architecture.",
    github: "https://github.com/saju1083/portfolio",
    demo: "#",
    status: "in-progress",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="card group flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{project.emoji}</span>
        <div className="flex items-center gap-2">
          {project.status === "in-progress" && (
            <span className="text-[10px] font-mono bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2 py-0.5 rounded-full">
              in progress
            </span>
          )}
          {project.status === "completed" && (
            <span className="text-[10px] font-mono bg-green-400/10 text-green-400 border border-green-400/20 px-2 py-0.5 rounded-full">
              completed
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* What I learned */}
      <div className="bg-gray-800/50 rounded-xl p-3 mb-4">
        <p className="text-[11px] text-gray-600 font-mono mb-1">
          // what i learned
        </p>
        <p className="text-xs text-gray-400">{project.what}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-xs py-1.5 flex-1 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={project.demo}
          className="btn-outline text-xs py-1.5 flex-1 justify-center opacity-50 cursor-not-allowed"
          onClick={(e) => e.preventDefault()}
          title="Demo coming soon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-sub">// things i've built</p>
          <h2 className="section-heading">Projects</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            These are beginner-level projects I built while learning. Small
            steps, but real progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/saju1083"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
