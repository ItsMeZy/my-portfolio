import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; 
import { FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <p className="text-blue-600 dark:text-blue-500 font-mono tracking-widest text-sm mb-4 uppercase">
          Welcome to my digital space
        </p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400">Zyril Errol Gatchalian.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-medium text-slate-600 dark:text-slate-500 mb-8">
          I engineer scalable software & elegant interfaces.
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-12">
          I am a Software Engineer specializing in the .NET ecosystem, React, and robust containerized architectures. I build things that live on the web and enterprise environments.
        </p>

        <div className="flex items-center gap-6">
          <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-blue-900/20">
            View My Work
          </a>
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-slate-300 dark:border-slate-800 rounded-full hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"><FaGithub size={20} /></a>
            <a href="#" className="p-3 border border-slate-300 dark:border-slate-800 rounded-full hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"><FiLinkedin size={20} /></a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}