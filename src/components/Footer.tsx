import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg text-white">Carolla Asset Management</p>
          <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Unlocking value in partnership</p>
        </div>

        <nav className="flex gap-8">
          {[
            { href: '/uk', label: 'UK' },
            { href: '/spain', label: 'Spain' },
            { href: '/people', label: 'People' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Carolla Asset Management
        </p>
      </div>
    </footer>
  )
}
