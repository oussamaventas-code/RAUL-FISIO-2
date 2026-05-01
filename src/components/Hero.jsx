import { useEffect, useRef } from 'react'
import { MapPin, MessageCircle, Navigation, Phone, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { clinic, whatsappUrl } from '../data/clinic'

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: 'power3.out',
      })

      gsap.from(imageRef.current, {
        x: 36,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 pb-16 pt-28 md:px-12 lg:px-20"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col gap-6">
          <p className="hero-item font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Clínica de fisioterapia · {clinic.area}
          </p>

          <div className="hero-item inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm text-primary/75 shadow-sm">
            <div className="flex text-amber-400" aria-label={`${clinic.rating} de 5 en Google`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <strong className="text-primary">{clinic.rating}</strong>
            <span className="text-primary/60">{clinic.reviews} reseñas en Google</span>
          </div>

          <div className="hero-item">
            <h1 className="max-w-3xl font-heading text-[clamp(2.7rem,6vw,5.4rem)] font-bold leading-[0.97] tracking-tight text-primary">
              Fisioterapia en Molina de Segura
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-accent/90" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {clinic.name}
            </p>
          </div>

          <p className="hero-item max-w-xl font-sans text-base leading-relaxed text-primary/65 md:text-lg">
            ¿Tienes dolor de espalda, cuello o una lesión que no termina de mejorar? Analizamos tu caso desde cero, tratamos la causa y hacemos seguimiento real hasta que te encuentres bien.
          </p>

          <div className="hero-item flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(204,88,51,0.30)]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`tel:${clinic.phoneHref}`}
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-white/50 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-white/80"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar
            </a>
            <a
              href={clinic.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-white/50 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-white/80"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Cómo llegar
            </a>
          </div>

          <div className="hero-item flex max-w-xl flex-col gap-3 rounded-xl border border-primary/10 bg-white/60 p-4 text-sm text-primary/70 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
              {clinic.address}
            </span>
            <span className="font-semibold text-primary">{clinic.phoneDisplay}</span>
          </div>
        </div>

        <div ref={imageRef} className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(46,64,54,0.22)]">
            <img
              src="/images/hero.png"
              alt="Fisioterapeuta realizando tratamiento en la espalda de un paciente"
              className="h-[620px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Floating trust badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15 text-amber-500">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-primary">{clinic.rating} · {clinic.reviews} reseñas</p>
              <p className="font-mono text-[10px] text-primary/50">Valoración en Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
