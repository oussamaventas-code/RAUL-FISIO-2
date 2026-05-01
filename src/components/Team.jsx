import { useEffect, useRef } from 'react'
import { Phone, ShieldCheck, UsersRound } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clinic } from '../data/clinic'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Raúl',
    role: 'Fisioterapeuta',
    badge: 'Colegiado CORM',
    bio: 'Los pacientes destacan su forma de explicar el tratamiento, la seriedad en consulta y la adaptación a cada necesidad.',
    img: '/images/RAUL .jpeg',
  },
  {
    name: 'Ana',
    role: 'Fisioterapeuta',
    badge: 'Colegiada CORM',
    bio: 'Mencionada por pacientes por su trato agradable, implicación y acompañamiento durante el proceso de recuperación.',
    img: '/images/ANA FALAS.jpeg',
  },
]

export default function Team() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP removed to guarantee visibility
  }, [])

  return (
    <section id="equipo" ref={sectionRef} className="bg-cream px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Equipo</p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-primary">
              Trato cercano de Raúl y Ana.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary/65">
              Llevan años tratando a pacientes de Molina de Segura. Lo que más repiten en sus reseñas: que explican bien, que se implican y que se nota en los resultados.
            </p>
          </div>
          <div className="flex w-fit items-center gap-3 rounded-xl border border-primary/10 bg-white/70 px-5 py-4 text-primary">
            <UsersRound className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-sm font-semibold">Equipo mencionado en reseñas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="team-card group overflow-hidden rounded-2xl border border-primary/10 bg-white/75 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/8"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={member.img}
                  alt={`Foto de ${member.name}, fisioterapeuta`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{member.role}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-mono text-[10px] font-medium text-primary/60">
                    <ShieldCheck className="h-3 w-3 text-primary/50" aria-hidden="true" />
                    {member.badge}
                  </span>
                </div>
                <h3 className="mt-1.5 font-heading text-2xl font-bold text-primary">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/65">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-primary/10 bg-primary/5 p-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">¿Quieres preguntar antes de pedir cita?</h3>
            <p className="mt-1 text-sm text-primary/65">Llama y te orientamos sin compromiso. Sin formularios, sin esperas.</p>
          </div>
          <a
            href={`tel:${clinic.phoneHref}`}
            className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(204,88,51,0.25)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
