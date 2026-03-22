import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Method from './components/Method'
import About from './components/About'
import Brief from './components/Brief'
import Footer from './components/Footer'

function App() {
  return (
    <main style={{ background: '#050505' }}>
      <Navbar />
      <Hero />
      <Showcase />
      <Method />
      <About />
      <Brief />
      <Footer />
    </main>
  )
}

export default App
