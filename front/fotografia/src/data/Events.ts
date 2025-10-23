export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const eventos: Event[] = [
  {
    id: 1,
    title: "Boda Romántica",
    description:
      "Capturamos cada detalle de tu día especial con fotografías naturales y emotivas.",
    image:
      "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2024/02/GettyImages-929904308-scaled.jpg",
  },
  {
    id: 2,
    title: "Graduación Universitaria",
    description:
      "Celebra tus logros con sesiones profesionales individuales y grupales.",
    image:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Fiesta de XV Años",
    description:
      "Cobertura completa de tu fiesta con fotografía, video y sesión pre-evento.",
    image:
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Evento Empresarial",
    description:
      "Documentamos tus conferencias, lanzamientos y reuniones con un enfoque profesional y moderno.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Sesión Familiar",
    description:
      "Fotografías naturales que capturan la esencia y unión de tu familia en escenarios únicos.",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Sesión de Retrato Profesional",
    description:
      "Imágenes ideales para portafolios, redes sociales o uso empresarial, con iluminación y retoque de nivel profesional.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
  },
];
