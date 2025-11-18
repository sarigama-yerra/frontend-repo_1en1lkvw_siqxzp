import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 grid place-items-center shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Studeck</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-slate-200/80 hover:text-white text-sm">Pricing</a>
            <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-sm hover:opacity-90 transition">
              Start free
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/10 text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">
                  {item.name}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-sm">
                Start free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
