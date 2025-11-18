export default function FAQ() {
  const faqs = [
    {
      q: 'Is there a free plan?',
      a: 'Yes. The Starter plan includes monthly AI credits and core features to begin learning right away.',
    },
    {
      q: 'Can I upload handwritten notes?',
      a: 'Absolutely. You can upload PDFs, images, and scans. We optimize OCR for student documents.',
    },
    {
      q: 'Is my data secure?',
      a: 'Your workspace is protected with Supabase Auth and strict access control. Documents are encrypted at rest.',
    },
    {
      q: 'Do you support German exams?',
      a: 'Yes. We focus on IHK, Abitur, and Fachabitur formats, and we keep improving our templates.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-4xl font-bold text-white text-center">Frequently asked questions</h3>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-white">
                <span className="text-base font-medium">{q}</span>
                <span className="text-blue-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-slate-300">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
