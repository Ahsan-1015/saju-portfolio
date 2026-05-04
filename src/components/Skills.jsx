const coreSkills = [
  { name: 'Advanced Java', level: 85, icon: '☕' },
  { name: 'Data Structures', level: 88, icon: '🔗' },
  { name: 'Algorithms', level: 82, icon: '🧠' },
  { name: 'C / C++', level: 78, icon: '⚙️' },
  { name: 'HTML & CSS', level: 80, icon: '🌐' },
  { name: 'JavaScript', level: 70, icon: '✨' },
]

const learningSkills = [
  { name: 'React', icon: '⚛️', note: 'Building modern UI components' },
  { name: 'Spring Boot', icon: '🌱', note: 'Java backend framework' },
  { name: 'Git & GitHub', icon: '🗂️', note: 'Version control & collaboration' },
]

const tools = ['VS Code', 'IntelliJ IDEA', 'GitHub', 'Linux Terminal', 'Chrome DevTools', 'Postman']

function ProgressBar({ name, level, icon }) {
  return (
    <div className="card group">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-200">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-xs text-gray-600 mt-2">
        {level >= 85 ? 'Advanced proficiency' : level >= 75 ? 'Solid foundation' : 'Comfortable'}
      </p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-sub">// what i know</p>
          <h2 className="section-heading">Skills</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Skills I've built throughout my final year — from core CS fundamentals to modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Core Skills */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="text-white font-semibold">Core Skills</h3>
            </div>
            <div className="space-y-3">
              {coreSkills.map((s) => (
                <ProgressBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <h3 className="text-white font-semibold">Currently Learning</h3>
            </div>
            <div className="space-y-3">
              {learningSkills.map((s) => (
                <div key={s.name} className="card group hover:border-yellow-400/30">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{s.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-200 flex items-center gap-2">
                        {s.name}
                        <span className="text-[10px] font-mono bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-1.5 py-0.5 rounded-full">
                          in progress
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card border-dashed border-gray-700">
                <p className="text-xs text-gray-600 font-mono text-center">
                  + more being added…
                </p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <h3 className="text-white font-semibold">Tools I Use</h3>
            </div>
            <div className="card">
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-600 leading-relaxed">
                  I prefer working in a Linux environment and always try to use the terminal for everyday tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
