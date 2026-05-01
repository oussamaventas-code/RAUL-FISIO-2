import { useEffect, useRef } from 'react'
import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clinic, whatsappUrl } from '../data/clinic'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-item', {
        y: 34,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=40',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/FACHADA.jpeg"
          alt="Clínica de fisioterapia moderna" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[0.95fr_1.05fr] md:px-12 lg:px-20">
        <div className="relative overflow-hidden rounded-2xl p-8 text-white md:p-10">
          <div className="relative z-20">
            <p className="cta-item mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Pedir cita</p>
            <h2 className="cta-item font-heading text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-tight">
              Contacta directamente con la clínica.
            </h2>
            <p className="cta-item mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Llamar o escribir por WhatsApp es lo más rápido. En menos de un minuto sabes si hay hueco y cuándo puedes venir. Sin formularios ni esperas.
            </p>

            <div className="cta-item mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(204,88,51,0.35)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${clinic.phoneHref}`}
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.25] backdrop-blur-md px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Llamar
              </a>
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.25] backdrop-blur-md px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Navigation className="h-5 w-5" aria-hidden="true" />
                Cómo llegar
              </a>
            </div>

            <div className="cta-item mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-md p-4">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold">{clinic.address}</p>
                <p className="mt-1 text-sm text-white/60">{clinic.area}, {clinic.province}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/10 bg-white/75 p-8 md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Horario</p>
              <h3 className="font-heading text-2xl font-bold text-primary">Atención en consulta</h3>
            </div>
          </div>

          <div className="divide-y divide-primary/10">
            {clinic.hours.map((item) => (
              <div key={item.day} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="font-semibold text-primary">{item.day}</span>
                <span className={item.time === 'Cerrado' ? 'text-primary/40' : 'text-primary/70'}>{item.time}</span>
              </div>
            ))}
          </div>

          <a
            href={clinic.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex min-h-[180px] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary/10 bg-primary/5 p-6 text-center transition-all duration-300 hover:border-primary/20 hover:bg-primary/8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <strong className="block font-heading text-lg text-primary">Abrir en Google Maps</strong>
              <span className="mt-1 block text-sm text-primary/60">{clinic.address}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent">
              Ver ubicación <Navigation className="h-3 w-3" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
