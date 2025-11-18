import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section id="showcase" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">From document to exam-ready in minutes</h3>
            <p className="mt-4 text-slate-300">
              Drop in your PDFs, slides, or images. We extract key concepts, generate flashcards and summaries, and assemble practice exams that mirror your target format.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li className="flex gap-2"><span className="text-blue-400">•</span> Works with German curricula (IHK, Abi, FachAbi)</li>
              <li className="flex gap-2"><span className="text-blue-400">•</span> Clean study sessions with timers and focus mode</li>
              <li className="flex gap-2"><span className="text-blue-400">•</span> Built-in annotations and highlights</li>
              <li className="flex gap-2"><span className="text-blue-400">•</span> Personalized dashboard for progress</li>
            </ul>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/40 via-indigo-500/40 to-cyan-400/40 rounded-3xl blur-2xl -z-10" />
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-4">
                <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop" alt="Study app UI" className="rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
