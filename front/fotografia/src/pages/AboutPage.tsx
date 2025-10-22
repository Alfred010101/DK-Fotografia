import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";

const teamMembers = [
  { name: "Ana Pérez", role: "Fotógrafa principal", img: "/team1.jpg" },
  { name: "Luis Gómez", role: "Editor creativo", img: "/team2.jpg" },
  { name: "Carla Ruiz", role: "Asistente de producción", img: "/team3.jpg" },
];

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fdf6f0, #ffffff)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container>
        {/* Título principal */}
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#333" }}
        >
          Acerca de Nosotros
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 8, color: "#555", maxWidth: 700, mx: "auto" }}
        >
          Somos un equipo apasionado por la fotografía de eventos. Capturamos momentos
          únicos con creatividad y profesionalismo, asegurando que cada recuerdo perdure
          para siempre.
        </Typography>

        {/* Sección de misión y visión */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmojiObjectsIcon sx={{ fontSize: 40, color: "#ff9800", mr: 2 }} />
                  <Typography variant="h5" fontWeight="bold">
                    Nuestra Misión
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Capturar los momentos más importantes con un enfoque creativo y profesional,
                  asegurando que cada recuerdo quede inmortalizado de manera única.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <VisibilityIcon sx={{ fontSize: 40, color: "#3f51b5", mr: 2 }} />
                  <Typography variant="h5" fontWeight="bold">
                    Nuestra Visión
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Ser líderes en servicios de fotografía para eventos, reconocidos por nuestra
                  calidad, innovación y compromiso con los clientes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Sección de equipo */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 4, color: "#333" }}
        >
          Nuestro Equipo
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
                  py: 4,
                }}
              >
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
