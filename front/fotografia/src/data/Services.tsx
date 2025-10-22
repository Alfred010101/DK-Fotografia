import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EventIcon from "@mui/icons-material/Event";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";

export interface Service {
  icon:  React.ReactNode;
  title: string;
  text: string;
}

export const servicios: Service[] = [
  {
    icon: <CameraAltIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
    title: "Fotografía Profesional",
    text: "Sesiones personalizadas con equipo de alta calidad y personal especializado.",
  },
  {
    icon: <EventIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
    title: "Cobertura de Eventos",
    text: "Desde bodas hasta eventos empresariales, cubrimos todo tipo de ocasión.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
    title: "Edición Creativa",
    text: "Retoque profesional y edición artística para resultados únicos.",
  },
  {
    icon: <PhotoAlbumIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
    title: "Álbumes y Entregables",
    text: "Diseños personalizados en álbum físico y formato digital de alta resolución.",
  },
];
