import { motion } from 'framer-motion';
import { Activity, Gamepad2, Headphones, MonitorPlay, Utensils } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24 bg-[#0d0d0d] text-stone-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-amber-600 font-mono text-xl">03.</span> Behind the Code
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Narrative & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-6 text-stone-400 leading-relaxed text-lg"
          >
            <p>
              I'm a developer who appreciates the balance between a perfectly structured backend architecture and a clean, visually calming frontend. When I'm not writing code or configuring Docker images, I treat my personal life with the same level of discipline and structured progression.
            </p>
            
            <div className="mt-10 bg-[#111111] border border-stone-800 rounded-2xl p-6">
              <h4 className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Activity size={16} /> Player Stats
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Class</span>
                  <span className="font-mono text-stone-500">Guard / Small Forward</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Endurance Goal</span>
                  <span className="font-mono text-stone-500">Half-Marathon</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Strength Build</span>
                  <span className="font-mono text-stone-500">Trap Bar Deadlifts</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Footwear Rotation</span>
                  <span className="font-mono text-stone-500 text-right">Kobe 6, GT Cut 3,<br/>Puma MB.03</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Currently Consuming */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="col-span-1 sm:col-span-2 text-stone-200 text-xl font-semibold mb-2">
              Currently Enjoying
            </div>

            <div className="bg-[#111111] border border-stone-800 rounded-2xl p-5 hover:border-amber-600/50 transition-colors">
              <MonitorPlay className="text-amber-500 mb-3" size={24} />
              <h5 className="font-medium text-stone-200">Watchlist</h5>
              <p className="text-sm text-stone-500 mt-1">Jujutsu Kaisen, Blue Lock, One Piece</p>
            </div>

            <div className="bg-[#111111] border border-stone-800 rounded-2xl p-5 hover:border-amber-600/50 transition-colors">
              <Headphones className="text-amber-500 mb-3" size={24} />
              <h5 className="font-medium text-stone-200">On Rotation</h5>
              <p className="text-sm text-stone-500 mt-1">LANY, Forrest Frank, Justin Bieber</p>
            </div>

            <div className="bg-[#111111] border border-stone-800 rounded-2xl p-5 hover:border-amber-600/50 transition-colors">
              <Gamepad2 className="text-amber-500 mb-3" size={24} />
              <h5 className="font-medium text-stone-200">Gaming Loadout</h5>
              <p className="text-sm text-stone-500 mt-1">Valorant (Chamber Main), Monster Hunter Wilds (HR 33), Modded MC</p>
            </div>

            <div className="bg-[#111111] border border-stone-800 rounded-2xl p-5 hover:border-amber-600/50 transition-colors">
              <Utensils className="text-amber-500 mb-3" size={24} />
              <h5 className="font-medium text-stone-200">In The Kitchen</h5>
              <p className="text-sm text-stone-500 mt-1">Slow-cooker pulled beef & air-fried salmon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}