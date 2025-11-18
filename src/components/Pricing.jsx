export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '€0',
      period: 'forever',
      features: ['200 AI credits/month', 'Upload PDFs & images', 'Flashcards & summaries', 'Basic study sessions'],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '€9',
      period: 'per month',
      features: ['Unlimited AI credits', 'IHK/Abi exam generator', 'Annotations & highlights', 'Priority processing'],
      cta: 'Upgrade',
      highlight: true,
    },
    {
      name: 'Teams',
      price: '€39',
      period: 'per month',
      features: ['Up to 10 seats', 'Shared workspace', 'Admin dashboard', 'Email support'],
      cta: 'Contact sales',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Simple, student-friendly pricing</h2>
          <p className="mt-4 text-slate-300">Start for free. Upgrade when you need more power. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-6 border ${tier.highlight ? 'bg-white text-slate-900 border-white shadow-xl' : 'bg-white/5 text-white border-white/10'}`}>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold">{tier.price}</div>
                <div className="text-sm opacity-80">{tier.period}</div>
              </div>
              <div className="mt-1 font-semibold">{tier.name}</div>
              <ul className="mt-4 space-y-2 text-sm opacity-90">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-blue-400">•</span> {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium ${tier.highlight ? 'bg-slate-900 text-white hover:opacity-90' : 'bg-white text-slate-900 hover:opacity-90'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
