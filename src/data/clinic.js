export const clinic = {
  name: 'Clínica de Fisioterapia Raúl Fernández',
  shortName: 'Raúl Fernández Fisioterapia',
  area: 'Molina de Segura',
  province: 'Murcia',
  address: 'C. Viena, 30500 Molina de Segura, Murcia',
  phoneDisplay: '669 45 69 87',
  phoneHref: '+34669456987',
  rating: '5,0',
  reviews: '275',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20de%20Fisioterapia%20Ra%C3%BAl%20Fern%C3%A1ndez%20C.%20Viena%2030500%20Molina%20de%20Segura%20Murcia',
  whatsappMessage: 'Hola, me gustaría pedir cita en la clínica. ¿Tienen hueco esta semana?',
  hours: [
    { day: 'Lunes', time: '9:00-13:00 / 16:00-21:00' },
    { day: 'Martes', time: '9:00-13:00 / 16:00-21:00' },
    { day: 'Miércoles', time: '9:00-13:00 / 16:00-21:00' },
    { day: 'Jueves', time: '9:00-13:00 / 16:00-21:00' },
    { day: 'Viernes', time: '9:00-13:00 / 16:00-19:00' },
    { day: 'Sábado', time: 'Cerrado' },
    { day: 'Domingo', time: 'Cerrado' },
  ],
}

export const whatsappUrl = `https://wa.me/${clinic.phoneHref.replace('+', '')}?text=${encodeURIComponent(clinic.whatsappMessage)}`
