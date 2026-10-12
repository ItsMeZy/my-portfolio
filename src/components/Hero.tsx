import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 bg-[#0a0a0a] text-stone-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <p className="text-amber-600 font-mono tracking-widest text-sm mb-4 uppercase">
          Welcome to my digital space
        </p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-300">Zyril Errol Gatchalian.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-medium text-stone-500 mb-8">
          I engineer scalable software & elegant interfaces.
        </h2>
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed mb-12">
          I am a Software Engineer specializing in the .NET ecosystem, React, and robust containerized architectures. I build things that live on the web and enterprise environments.
        </p>

        <div className="flex items-center gap-6">
          <a href="#projects" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors duration-300">
            View My Work
          </a>
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-stone-800 rounded-full hover:border-amber-600 hover:text-amber-500 transition-all"><FaGithub size={20} /></a>
            <a href="#" className="p-3 border border-stone-800 rounded-full hover:border-amber-600 hover:text-amber-500 transition-all"><FaLinkedin size={20} /></a>
            <a href="#" className="p-3 border border-stone-800 rounded-full hover:border-amber-600 hover:text-amber-500 transition-all"><Mail size={20} /></a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-600 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}