import { BookMarked, Brain, CreditCard, FileText, Lock, Rocket, Sparkles, Upload, Wand2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI exam generation',
      desc: 'Create IHK, Abi, FachAbi, and language practice exams tailored to your syllabus.',
    },
    {
      icon: BookMarked,
      title: 'Flashcards & summaries',
      desc: 'Auto-generate flashcards, key points, and concise summaries from your notes.',
    },
    {
      icon: Upload,
      title: 'Upload PDFs & images',
      desc: 'Import textbooks, slides, and handwritten notes for instant processing.',
    },
    {
      icon: FileText,
      title: 'Annotations that stick',
      desc: 'Highlight, comment, and organize insights across all your materials.',
    },
    {
      icon: Lock,
      title: 'Secure with Supabase',
      desc: 'Your workspace is protected with battle-tested authentication and access control.',
    },
    {
      icon: CreditCard,
      title: 'Stripe payments',
      desc: 'Simple, student-friendly plans with safe checkout via Stripe.',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs">Built for students</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">Everything you need to study smarter</h2>
          <p className="mt-4 text-slate-300">A single workspace that adapts to your classes, exams, and learning style.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/7 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 grid place-items-center text-white mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
