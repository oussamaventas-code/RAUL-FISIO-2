const images = [
  { src: '/images/FACHADA.jpeg', alt: 'Fachada de la Clínica Raúl Fernández en Molina de Segura', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/rehab.png',          alt: 'Área de rehabilitación' },
  { src: '/images/process_therapy.png',alt: 'Sesión de fisioterapia' },
  { src: '/images/hero.png',           alt: 'Tratamiento manual en camilla' },
  { src: '/images/cervical.png',       alt: 'Terapia cervical' },
]

export default function Gallery() {
  return (
    <section id="instalaciones" className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Instalaciones</p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-primary">
            Nuestras instalaciones
          </h2>
          <p className="mt-4 text-lg text-primary/65 max-w-2xl mx-auto">
            Instalaciones cómodas y bien equipadas en el centro de Molina de Segura.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ gridTemplateRows: 'repeat(2, 280px)' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
