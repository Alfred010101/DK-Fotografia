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
import Footer from "../components/Footer";

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

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {eventos.map((e, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 320,
                  height: 380,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={e.image}
                  alt={e.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {e.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"justify"}
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
      <Box sx={{ bgcolor: "#f9f9f9", py: 4 }}>
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

      <Footer />

    </Box>
  );
};

export default Home;
