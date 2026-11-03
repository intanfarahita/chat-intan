'use client';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-pink-200/80 dark:border-fuchsia-900/60 bg-white/85 dark:bg-[#24132f]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="brand-mark bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-500 p-2 rounded-2xl text-white shadow-lg shadow-pink-300/40 dark:shadow-fuchsia-950/50">
            <i className="fas fa-sparkles text-xl"></i>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-gray-900 dark:text-white">
              Intan AI Asisten
            </h1>
            <p className="text-xs text-pink-600 dark:text-pink-300">
              Teman AI yang siap membantu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-xl border border-pink-200 dark:border-fuchsia-900/70 hover:bg-pink-50 dark:hover:bg-fuchsia-950/60 transition-colors text-pink-700 dark:text-pink-200 flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-xl border border-pink-200 dark:border-fuchsia-900/70 hover:bg-pink-50 dark:hover:bg-fuchsia-950/60 transition-colors text-pink-700 dark:text-pink-200 flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-green-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
