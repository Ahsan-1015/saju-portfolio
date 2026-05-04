const milestones = [
  {
    icon: '🚀',
    title: 'Started Coding',
    time: 'Year 1',
    desc: 'Wrote my first C program. Struggled with pointers but learned to embrace the confusion. Never looked back.',
    done: true,
  },
  {
    icon: '☕',
    title: 'Mastered Advanced Java',
    time: 'Year 2 – 3',
    desc: 'Dived deep into OOP, design patterns, multithreading, Java Collections Framework, and exception handling.',
    done: true,
  },
  {
    icon: '🔗',
    title: 'Completed Data Structures & Algorithms',
    time: 'Year 3',
    desc: 'Thoroughly studied arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming. Practiced extensively on LeetCode.',
    done: true,
  },
  {
    icon: '🌐',
    title: 'Web Development & React',
    time: 'Year 3 – 4',
    desc: 'Built responsive web apps with HTML, CSS, JavaScript and React. This portfolio is one of those projects.',
    done: true,
  },
  {
    icon: '🌱',
    title: 'Learning Spring Boot & Backend',
    time: 'Final Year — Now',
    desc: 'Applying Java knowledge to backend development. Building REST APIs and connecting with databases using Spring Boot.',
    done: false,
    active: true,
  },
  {
    icon: '🧑‍💻',
    title: 'Secure a Software Engineering Role',
    time: 'Post Graduation',
    desc: 'The big goal — land a full-time position, contribute to a real product, and keep growing as a software engineer.',
    done: false,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-sub">// my path</p>
          <h2 className="section-heading">Learning Journey</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Every expert was once a beginner. Here's my honest roadmap — where I've been and where I'm headed.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Icon circle */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 border-2 transition-colors ${
                    m.done
                      ? 'bg-accent/10 border-accent text-accent'
                      : m.active
                      ? 'bg-yellow-400/10 border-yellow-400/60 text-yellow-300 animate-pulse'
                      : 'bg-gray-900 border-gray-700 text-gray-500'
                  }`}
                >
                  {m.icon}
                </div>

                {/* Content */}
                <div
                  className={`card flex-1 mb-0 transition-all ${
                    m.active ? 'border-yellow-400/30 bg-yellow-400/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className={`font-semibold ${m.done ? 'text-white' : m.active ? 'text-yellow-300' : 'text-gray-500'}`}>
                      {m.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-600">{m.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{m.desc}</p>

                  {m.done && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-green-400">Done</span>
                    </div>
                  )}
                  {m.active && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                      <span className="text-xs text-yellow-400">In progress</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
