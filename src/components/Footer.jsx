export default function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-gray-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-accent text-sm">
          saju<span className="text-gray-600">.</span>dev
        </p>
        <p className="text-xs text-gray-700 text-center">
          Built with React &amp; Tailwind CSS · Still learning, always growing
        </p>
        <a
          href="#hero"
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
