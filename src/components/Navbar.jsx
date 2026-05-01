import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { gsap } from 'gsap'
import { clinic } from '../data/clinic'

const links = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.2,
      })
    })

    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power3.out' }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power3.in',
      })
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-xl px-4 py-3 transition-all duration-300 md:px-5 ${
        scrolled
          ? 'bg-cream/95 shadow-[0_8px_28px_rgba(46,64,54,0.14)] backdrop-blur-xl'
          : 'bg-cream/85 backdrop-blur-md'
      }`}
    >
      <div className="flex items-center gap-3">
        <a href="#" className="mr-auto min-w-0 font-heading text-sm font-bold leading-tight text-primary md:text-base">
          <span className="block truncate">{clinic.shortName}</span>
          <span className="block font-sans text-[10px] font-medium text-primary/50 md:hidden">{clinic.area}</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-primary/70 transition-colors hover:text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${clinic.phoneHref}`}
          className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(204,88,51,0.28)]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Llamar</span>
        </a>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 text-primary transition-colors hover:bg-primary/5 md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div ref={mobileMenuRef} className="overflow-hidden md:hidden" style={{ height: 0, opacity: 0 }}>
        <ul className="mt-3 flex flex-col gap-0.5 border-t border-primary/10 pt-3 pb-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-primary/75 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
