import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/NavBar'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen selection:bg-blue-500/30 transition-colors duration-300 relative">      
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  )
}

export default App