const socials = [
  {
    name: "Email",
    value: "hasebur.2002@gmail.com",
    href: "mailto:hasebur.2002@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "hover:border-accent/50 hover:bg-accent/5",
  },
  {
    name: "Phone",
    value: "+01849435120",
    href: "tel:+01849435120",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5.25A2.25 2.25 0 015.25 3h2.25c.621 0 1.148.386 1.346.963l.636 1.59a1.125 1.125 0 01-.252 1.247L8.25 8.25a16.057 16.057 0 006.364 6.364l1.45-1.45a1.125 1.125 0 011.247-.252l1.59.636c.577.198.963.725.963 1.346V18.75A2.25 2.25 0 0118.75 21h-2.25C9.298 21 3 14.702 3 6.75V5.25z"
        />
      </svg>
    ),
    color: "hover:border-green-500/50 hover:bg-green-500/5",
  },
  {
    name: "GitHub",
    value: "github.com/saju1083",
    href: "https://github.com/saju1083",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "hover:border-gray-500/50 hover:bg-gray-800/50",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/hasibur-saju-baab3422a",
    href: "https://www.linkedin.com/in/hasibur-saju-baab3422a/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:border-blue-500/50 hover:bg-blue-500/5",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-sub">// let's connect</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            I'm always open to connecting with other learners, developers, and
            anyone who wants to collaborate or just say hi. Don't hesitate to
            reach out!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Availability banner */}
          <div className="card mb-6 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently open to internship opportunities &amp; project
              collaborations
            </span>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`card flex items-center gap-4 group cursor-pointer transition-all duration-200 ${s.color}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600">{s.name}</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate font-mono">
                    {s.value}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0"
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
              </a>
            ))}
          </div>

          <p className="text-center text-xs text-gray-700 mt-8">
            I usually respond within 24–48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
