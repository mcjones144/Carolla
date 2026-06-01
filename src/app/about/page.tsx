import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Carolla Asset Management',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-charcoal-light overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_70%_50%,#C9A84C,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <p className="section-label mb-3">About</p>
          <div className="w-10 h-px bg-gold mb-6" />
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight">
            Who we are
          </h1>
        </div>
      </section>

      {/* About content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/68553a0b1f8c0d662c3653da/1750852938917-1GMTR9K3YB6T8LXXI4RC/unsplash-image-YpiP7hm5V-A.jpg"
              alt="Carolla Asset Management"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="space-y-8 pt-4">
            <p className="text-white/70 leading-relaxed text-lg">
              Carolla Asset Management was established in 2022 by a group of experienced property
              and finance professionals.
            </p>
            <p className="text-white/60 leading-relaxed">
              With our extensive experience, we work with real estate owners to create added value
              by identifying development opportunities across portfolios.
            </p>
            <p className="text-white/60 leading-relaxed">
              Carolla works on a joint-venture and partnership basis with real estate owners,
              sharing in the success of projects where initiatives and interests align.
            </p>
            <p className="text-white/60 leading-relaxed">
              We advise on long-term asset enhancement, be that by an improved leasing strategy,
              re-financing or ultimate disposal following the pre-agreed development activity.
            </p>

            {/* Pillars */}
            <div className="pt-6 grid grid-cols-1 gap-6">
              {[
                { title: 'Partnership', desc: 'We work on a joint-venture basis, aligning our interests with yours.' },
                { title: 'Experience', desc: 'Decades of combined expertise in property, finance and development.' },
                { title: 'Value Creation', desc: 'Identifying opportunities to unlock and maximise asset value.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-5 items-start border-l-2 border-gold pl-5">
                  <div>
                    <p className="font-semibold text-white mb-1">{title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
