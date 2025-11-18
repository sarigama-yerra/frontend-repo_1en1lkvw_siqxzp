import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(99,102,241,0.15),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Studeck. All rights reserved.</p>
          <div className="text-slate-400 text-sm flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
