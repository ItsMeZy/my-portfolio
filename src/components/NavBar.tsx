import { motion } from 'framer-motion';
import { Home, Briefcase, Code2, User } from 'lucide-react';

export default function Navbar() {
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
      className="fixed bottom-8 left-1/2 z-50 flex items-center gap-2 rounded-full bg-[#0a0a0a]/80 px-4 py-3 backdrop-blur-md border border-stone-800 shadow-2xl shadow-black/80"
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group relative flex items-center justify-center rounded-full p-3 text-stone-400 transition-all duration-300 hover:bg-stone-800 hover:text-amber-500"
          aria-label={item.name}
        >
          <item.icon size={20} />
          
          {/* Hover Tooltip */}
          <span className="absolute -top-12 scale-0 rounded-md bg-[#111111] border border-stone-800 px-3 py-1.5 text-xs font-medium text-stone-200 transition-all duration-200 group-hover:scale-100">
            {item.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
}