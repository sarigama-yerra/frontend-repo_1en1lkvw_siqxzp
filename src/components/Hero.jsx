import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles, UploadCloud, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-indigo-500/20" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full blur-2xl bg-blue-500/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Study smarter with an AI copilot built for students
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg md:text-xl text-slate-200/90"
            >
              Studeck turns your notes into flashcards, summaries, and exam-style practice. Upload documents, run focused study sessions, and get exam-ready faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:opacity-90">
                Start free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/15 border border-white/10">
                See how it works
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 text-slate-300/80">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Supabase Auth</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Stripe Payments</div>
              <div className="flex items-center gap-2"><UploadCloud className="w-4 h-4" /> PDF & images</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/40 via-indigo-500/40 to-cyan-400/40 rounded-3xl blur-2xl -z-10" />
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'IHK & Abi exams', icon: Sparkles, desc: 'Generate realistic practice exams' },
                  { title: 'Flashcards', icon: Zap, desc: 'Turn notes into spaced-repetition cards' },
                  { title: 'Smart summaries', icon: Sparkles, desc: 'Condense chapters in seconds' },
                  { title: 'Study sessions', icon: Zap, desc: 'Guided, timed deep-work sessions' },
                  { title: 'Annotations', icon: Sparkles, desc: 'Highlight and comment your PDFs' },
                  { title: 'Language help', icon: Zap, desc: 'Emails, translations, grammar' },
                ].map(({ title, icon: Icon, desc }) => (
                  <div key={title} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Icon className="w-5 h-5 text-white mb-2" />
                    <div className="text-white font-medium">{title}</div>
                    <div className="text-slate-300 text-sm">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
