import { useEffect, useRef } from 'react'
import { Activity, ArrowRight, Dumbbell, HeartPulse, ShieldCheck, UserRoundCheck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const treatments = [
  {
    title: 'Dolor cervical y lumbar',
    text: 'Cuello cargado, espalda resentida, ciática o rigidez muscular. Identificamos la causa y trabajamos desde ahí, no solo el síntoma.',
    icon: Activity,
    image: '/images/cervical.png',
  },
  {
    title: 'Lesiones deportivas',
    text: 'Recuperación guiada para volver a tu deporte lo antes posible y con el menor riesgo de recaer. Planificada según tu nivel y tu ritmo.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Rehabilitación funcional',
    text: 'Postoperatorio, lesión de larga duración o dolor que no cede. Seguimiento paso a paso para recuperar la función completa.',
    icon: ShieldCheck,
    image: '/images/rehab.png',
  },
  {
    title: 'Terapia manual',
    text: 'Movilización articular, masaje terapéutico y técnicas manuales aplicadas con precisión. Objetivos concretos y tiempos realistas.',
    icon: HeartPulse,
    image: '/images/process_therapy.png',
  },
  {
    title: 'Ejercicio terapéutico',
    text: 'Ejercicios diseñados para ti que consolidan la mejora y te dan autonomía. El objetivo: que no necesites volver por el mismo motivo.',
    icon: UserRoundCheck,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP removed to prevent animation bugs and ensure content is always visible
  }, [])

  return (
    <section id="tratamientos" ref={sectionRef} className="bg-cream px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Tratamientos</p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-primary">
            Fisioterapia personalizada, clara y cercana.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/65">
            Tanto si tienes una lesión reciente como un dolor que llevas meses arrastrando, analizamos tu caso desde cero y trabajamos con un plan claro y adaptado a ti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="feature-card group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 transition-opacity duration-300 group-hover:opacity-0 z-10" />
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm backdrop-blur-md">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-primary/70">{item.text}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-300 group-hover:text-primary">
                    Consultar tratamiento <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
