import { MapPin, Phone } from 'lucide-react'
import { clinic } from '../data/clinic'

const footerLinks = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

const legal = [
  { label: 'Política de privacidad', href: '#' },
  { label: 'Aviso legal', href: '#' },
  { label: 'Cookies', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-dark px-6 pb-8 pt-14 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <a href="#" className="font-heading text-xl font-bold tracking-tight text-white">
              {clinic.name}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              Fisioterapia en {clinic.area}. Raúl y Ana llevan años ayudando a pacientes con dolor de espalda, lesiones y problemas posturales. {clinic.rating}/5 con {clinic.reviews} reseñas en Google.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-white/30">Navegación</p>
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="w-fit text-sm text-white/60 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-white/30">Contacto</p>
            <a href={`tel:${clinic.phoneHref}`} className="flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {clinic.phoneDisplay}
            </a>
            <a
              href={clinic.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-start gap-2 text-sm leading-relaxed text-white/60 transition-colors hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>{clinic.address}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} {clinic.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <a key={item.label} href={item.href} className="font-mono text-xs text-white/30 transition-colors hover:text-white/60">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
