import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clinic } from '../data/clinic'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'Destacan por su dedicación, seriedad y buen trato. Una clínica en la que confiar durante años.',
    name: 'Ramon Fernandez',
    label: 'Reseña de Google',
  },
  {
    quote: 'Raúl explica el procedimiento en todo momento y adapta el tratamiento a las necesidades de cada paciente.',
    name: 'Alexandra Ruiz',
    label: 'Reseña de Google',
  },
  {
    quote: 'Muy buenos profesionales. Raúl y Ana se implican en los problemas de sus pacientes con amabilidad e interés.',
    name: 'Mar Vigueras Miralles',
    label: 'Reseña de Google',
  },
  {
    quote: 'Trato cercano, profesionalidad y sensación de estar en buenas manos desde la primera visita.',
    name: 'Paciente de la clínica',
    label: 'Resumen de reseñas',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${clinic.rating} de 5`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

function Avatar({ name }) {
  return (
    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent">
      {name.charAt(0)}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP removed
  }, [])

  return (
    <section id="opiniones" ref={sectionRef} className="bg-cream px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Opiniones de pacientes</p>
            <h2 className="max-w-2xl font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-primary">
              {clinic.rating}/5 en Google con {clinic.reviews} reseñas.
            </h2>
          </div>
          <div className="w-fit rounded-xl border border-primary/10 bg-white/70 px-5 py-4">
            <Stars />
            <p className="mt-2 text-sm font-medium text-primary/70">Clínica de fisioterapia en {clinic.area}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="testimonial-card group relative overflow-hidden rounded-xl border border-primary/10 bg-white/75 p-6 text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Decorative quote mark */}
              <span
                className="pointer-events-none absolute right-4 top-2 select-none font-serif text-8xl font-bold leading-none text-primary/[0.04]"
                aria-hidden="true"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "
              </span>

              <Stars />
              <blockquote
                className="relative mt-4 font-serif text-xl italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="font-heading text-sm font-bold">{t.name}</p>
                  <p className="font-mono text-xs text-primary/50">{t.label}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
