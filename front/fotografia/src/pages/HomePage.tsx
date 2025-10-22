import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { eventos } from "../data/Events";
import { servicios } from "../data/Services";

const Home: React.FC = () => {

  return (
    <Box>
      {/* Hero principal */}
      <Box
        sx={{
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box sx={{ bgcolor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            DK Fotografía
          </Typography>
          <Typography variant="h5" gutterBottom>
            Capturamos los momentos más importantes de tu vida
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
            component={Link}
            to="/packages"
          >
            Ver Paquetes
          </Button>
        </Box>
      </Box>

      {/* Eventos destacados */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Eventos Destacados
        </Typography>

        <Grid container spacing={4}>
          {eventos.map((e) => (
            <Grid xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={e.image}
                  alt={e.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {e.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {e.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Servicios */}
      <Box sx={{ bgcolor: "#f9f9f9", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Nuestros Servicios
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            textAlign="center"
          >
            {servicios.map((service, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                    px: 2,
                  }}
                >
                  {service.icon}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#222", color: "#fff", py: 2, textAlign: "center" }}>
        <Typography variant="body1">
          © {new Date().getFullYear()} DK Fotografía. Todos los derechos
          reservados.
        </Typography>
        <Typography variant="body2" color="gray">
          contacto@dkfotografia.com | @dkfotografia
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
