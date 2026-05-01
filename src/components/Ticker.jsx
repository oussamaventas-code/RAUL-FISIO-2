import { Activity, CheckCircle, Clock, Dumbbell, HeartPulse, MapPin, Phone, ShieldCheck, Star } from 'lucide-react'
import { clinic } from '../data/clinic'

const items = [
  { icon: Star,         text: `${clinic.rating}/5 en Google · ${clinic.reviews} reseñas` },
  { icon: ShieldCheck,  text: 'Fisioterapeutas colegiados · Murcia' },
  { icon: Phone,        text: clinic.phoneDisplay },
  { icon: MapPin,       text: `${clinic.area} · ${clinic.province}` },
  { icon: Clock,        text: 'Lunes a Viernes · Mañana y tarde' },
  { icon: Activity,     text: 'Dolor de espalda y cuello' },
  { icon: Dumbbell,     text: 'Lesiones deportivas' },
  { icon: HeartPulse,   text: 'Terapia manual' },
  { icon: ShieldCheck,  text: 'Rehabilitación y postoperatorio' },
  { icon: CheckCircle,  text: 'Primera valoración incluida' },
  { icon: CheckCircle,  text: 'Sin lista de espera' },
]

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-white/[0.08] bg-primary py-3"
      aria-label="Información sobre la clínica"
    >
      <div className="ticker-track flex w-max items-center gap-0">
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon
          return (
            <span
              key={i}
              className="inline-flex flex-shrink-0 items-center gap-2 px-8 text-sm font-medium text-white/70"
              aria-hidden={i >= items.length}
            >
              <Icon className="h-3.5 w-3.5 flex-shrink-0 text-accent" aria-hidden="true" />
              {item.text}
              <span className="ml-4 text-white/20" aria-hidden="true">·</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
