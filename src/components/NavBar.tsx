import { motion } from 'framer-motion';
import { Home, Briefcase, Code2, User, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const navItems = [
    { name: 'Home', href: '#top', icon: Home },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'About', href: '#about', icon: User },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 z-50 flex items-center gap-4 rounded-full bg-white/80 dark:bg-slate-950/80 px-4 py-3 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/10 dark:shadow-black/80 transition-colors duration-300"
    >
      {/* Nav Links */}
      <div className="flex items-center gap-2 border-r border-slate-200 dark:border-slate-800 pr-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative flex items-center justify-center rounded-full p-3 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={item.name}
          >
            <item.icon size={20} />
            <span className="absolute -top-12 scale-0 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs font-medium text-slate-900 dark:text-slate-200 transition-all duration-200 group-hover:scale-100 shadow-lg">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* Theme Toggle Slider */}
      <button 
        onClick={toggleTheme}
        className="relative flex h-8 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors duration-300"
        aria-label="Toggle Theme"
      >
        <motion.div
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-950 shadow-sm"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          animate={{ x: isDark ? 24 : 0 }}
        >
          {isDark ? (
            <Moon size={14} className="text-blue-400" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </button>
    </motion.div>
  );
}