import React from "react";
import { PhotoCamera, Star, Business, Favorite } from "@mui/icons-material";

export interface Package {
  title: string;
  color: string;
  icon: React.ReactNode;
  ideal: string;
  details: string[];
  price: number;
}

export const packages: Package[] = [
  {
    title: "Recuerdo Express",
    color: "success.main",
    icon: <PhotoCamera fontSize="large" />,
    ideal: "Eventos pequeños, cumpleaños, reuniones familiares.",
    details: [
      "Cobertura de hasta 1 hora",
      "20 fotografías digitales editadas",
      "1 fotógrafo profesional",
      "Entrega digital en 48 horas",
      "Galería privada online",
    ],
    price: 1000,
  },
  {
    title: "Momentos Especiales",
    color: "info.main",
    icon: <PhotoCamera fontSize="large" />,
    ideal: "Eventos sociales, bautizos, fiestas infantiles.",
    details: [
      "Cobertura de hasta 3 horas",
      "50 fotografías digitales editadas",
      "1 fotógrafo profesional",
      "10 fotos impresas (15×20 cm)",
      "Galería privada online",
    ],
    price: 2500,
  },
  {
    title: "Recuerdos de Oro",
    color: "secondary.main",
    icon: <Star fontSize="large" />,
    ideal: "XV años, graduaciones, aniversarios.",
    details: [
      "Cobertura de hasta 5 horas",
      "100 fotografías digitales editadas",
      "1 fotógrafo + asistente",
      "Álbum digital en PDF",
      "USB personalizada con entrega",
    ],
    price: 4000,
  },
  {
    title: "Evento Completo",
    color: "warning.main",
    icon: <Favorite fontSize="large" />,
    ideal: "Bodas o eventos grandes.",
    details: [
      "Cobertura de hasta 8 horas",
      "200 fotos editadas + originales",
      "2 fotógrafos profesionales",
      "Video resumen (3-5 min)",
      "Álbum físico profesional (20 páginas)",
    ],
    price: 6500,
  },
  {
    title: "Cine de Bodas",
    color: "error.main",
    icon: <Favorite fontSize="large" />,
    ideal: "Bodas premium o eventos corporativos.",
    details: [
      "Cobertura todo el día (12 horas)",
      "3 fotógrafos + camarógrafo",
      "400 fotos editadas + originales",
      "Video completo + tráiler cinematográfico",
      "Álbum de lujo (30 páginas, tapa dura)",
    ],
    price: 10000,
  },
  {
    title: "Imagen Profesional",
    color: "text.primary",
    icon: <Business fontSize="large" />,
    ideal: "Empresas, productos o retratos ejecutivos.",
    details: [
      "Sesión de 2 horas",
      "15 fotografías editadas profesionalmente",
      "Fondo e iluminación de estudio",
      "Entrega digital en 48 horas",
      "Derechos de uso comercial incluidos",
    ],
    price: 1800,
  },
];
