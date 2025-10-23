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
import GroupIcon from "@mui/icons-material/Group";
import Footer from "../components/Footer";

const teamMembers = [
  { name: "Ana Pérez", role: "Fotógrafa principal", img: "/team1.jpg" },
  { name: "Luis Gómez", role: "Editor creativo", img: "/team2.jpg" },
  { name: "Carla Ruiz", role: "Asistente de producción", img: "/team3.jpg" },
];

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ pt: 4 }}>
      <Container>
        {/* Sección de misión y visión */}
        <Grid container spacing={6} sx={{ mb: 8 }} justifyContent="center">
          <Grid item>
            <Card
              sx={{
                height: 150,
                width: 1000,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "none",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <GroupIcon sx={{ fontSize: 40, color: "#ff9800", mr: 2 }} />
                  <Typography variant="h5" fontWeight="bold">
                    Sobre Nosotros
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Somos un equipo apasionado por la fotografía de eventos. Capturamos momentos
                  únicos con creatividad y profesionalismo, asegurando que cada recuerdo perdure
                  para siempre.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card
              sx={{
                height: 150,
                width: 1000,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "none",
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

          <Grid item>
            <Card
              sx={{
                height: 150,
                width: 1000,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "none",
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

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: "wrap",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {teamMembers.map((member) => (
            <Grid
              item
              key={member.name}
              xs={12}
              sm={6}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 3,
                  width: 250,
                  height: 320,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 4,
                }}
              >
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: "3px solid #f5f5f5",
                  }}
                />
                <Typography variant="h6" fontWeight="bold" color="text.primary">
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

      <Footer />

    </Box>
  );
};

export default AboutPage;
