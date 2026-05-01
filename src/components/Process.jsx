import { useEffect, useRef } from 'react'
import { ChevronRight, ClipboardCheck, HandHeart, RefreshCw } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Valoración individual',
    description: 'Antes de nada, Raúl o Ana escuchan qué te pasa, desde cuándo y cuánto te limita. Sin prisa. Sin saltarse pasos.',
    icon: ClipboardCheck,
    image: '/images/cervical.png',
  },
  {
    title: 'Tratamiento personalizado',
    description: 'Se aplican las técnicas más adecuadas a tu caso y se te explica cada paso. Sin tecnicismos, con resultados desde las primeras sesiones.',
    icon: HandHeart,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Seguimiento y prevención',
    description: 'Te damos pautas y ejercicios para que los avances no se queden en consulta. El objetivo: que no necesites volver por el mismo motivo.',
    icon: RefreshCw,
    image: '/images/rehab.png',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP removed to ensure content is always fully visible
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary px-6 py-24 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Método de trabajo</p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight text-white">
            Un proceso sencillo, explicado y centrado en tu recuperación.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="process-step group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-accent/40">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/40 z-10 transition-opacity duration-300 group-hover:bg-primary/20" />
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20">
                    <span className="font-mono text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">{step.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
