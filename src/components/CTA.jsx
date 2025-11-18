export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-blue-600 to-indigo-600 p-10 text-center">
          <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.2),transparent_40%)]" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Get exam-ready faster</h3>
            <p className="mt-3 text-white/90">Create an account with Supabase Auth. Upgrade anytime with secure Stripe checkout.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:opacity-90">Start free</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/10">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
