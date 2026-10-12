import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/NavBar'

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  )
}

export default App