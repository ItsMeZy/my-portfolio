import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-amber-500/30">
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  )
}

export default App