import { Award, BadgeCheck, GraduationCap, Shield, ShieldCheck, Zap } from 'lucide-react'

const certs = [
  {
    icon: ShieldCheck,
    title: 'Colegiados CORM',
    detail: 'Colegio Oficial de Fisioterapeutas · Región de Murcia',
  },
  {
    icon: GraduationCap,
    title: 'Grado en Fisioterapia',
    detail: 'Titulación universitaria oficial',
  },
  {
    icon: BadgeCheck,
    title: 'Terapia Manual Ortopédica',
    detail: 'Formación avanzada certificada',
  },
  {
    icon: Zap,
    title: 'Punción Seca',
    detail: 'Técnica invasiva acreditada',
  },
  {
    icon: Award,
    title: 'RPG · Cadenas Musculares',
    detail: 'Reeducación Postural Global',
  },
  {
    icon: Shield,
    title: 'R.C. Profesional',
    detail: 'Seguro de responsabilidad civil activo',
  },
]

export default function Certifications() {
  return (
    <section className="bg-cream px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Formación y acreditaciones
            </p>
            <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-primary">
              Fisioterapeutas titulados, colegiados y formados.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-primary/65">
              Todos los tratamientos los realizan profesionales con titulación oficial, colegiación activa en la Región de Murcia y formación continuada en técnicas específicas.
            </p>
          </div>

          {/* Verified badge */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-primary/15 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-primary">Verificado</p>
              <p className="font-mono text-[10px] text-primary/45">Colegiación activa · 2026</p>
            </div>
          </div>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:border-accent/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/6 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base font-bold leading-snug text-primary">
                    {cert.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-primary/50">
                    {cert.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
