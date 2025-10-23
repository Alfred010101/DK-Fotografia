import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Modal,
  Box,
} from "@mui/material";
import Footer from "../components/Footer";

const portfolioItems = [
  {
    title: "Boda Romántica",
    image: "https://imgs.search.brave.com/G5Rv57DucIuXAHIFpR8dUnE_kgPJnBa6gbw2dSCkm7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29y/cG9yYXRlLWV2ZW50/LTEyODAteC0xMDI0/LXdhbGxwYXBlci1x/cnZpZzRvYXJ5dHdv/cjFpLmpwZw",
    description:
      "Sesión de boda en exteriores con estilo cálido y natural. Capturamos emociones auténticas en cada momento.",
  },
  {
    title: "Fiesta de XV Años",
    image: "https://imgs.search.brave.com/J4mrsN5YMIHymHHRgEq5UZGVY1jyYtECrnbA2Wv-oVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIzNDk0/NDQuanBn",
    description:
      "Color, energía y emoción. Sesión de XV con luces vibrantes y retratos elegantes.",
  },
  {
    title: "Evento Corporativo",
    image: "https://imgs.search.brave.com/Qwt9DYa3Mlunbbxy0dmQeq0LaIqmZj1W0VDEd3OlJMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29ycG9yYXRl/LWV2ZW50LWc2bXlj/OGk4MDh5OGxsaGgu/anBn",
    description:
      "Cobertura profesional de conferencias y presentaciones para empresas.",
  },
  {
    title: "Sesión Familiar",
    image: "https://imgs.search.brave.com/JY8tNyqNNMc_hcgvtnQ28uivnHS0FkBmUciAwvjtX1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWFj/a2VuemllLWh1Z2hl/cy1mYW1pbHktcG9y/dHJhaXQtbm9odTBp/NXNtNDVkZGR6Ni5q/cGc",
    description:
      "Momentos espontáneos y naturales en una sesión familiar al aire libre.",
  },
  {
    title: "Retratos Artísticos",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description:
      "Exploramos la luz y la expresión para crear retratos únicos e inspiradores.",
  },
  {
    title: "Cobertura de Conciertos",
    image: "https://imgs.search.brave.com/SCWEFYatWNmMHMJgV8SSpZGPgxM_8ZlZARHAj3VUctc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjQ4/OTY5NS5qcGc",
    description:
      "Capturamos la energía y la pasión de los artistas sobre el escenario.",
  },
];

const mosaicItems = [
  "https://imgs.search.brave.com/gEWg_CVyAWyHYai4MuRwg0Tjtc-da5kaOTzecQVGqxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTE0Mzg1OTA5MTQt/YmMwOWZjYWFmNzdh/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UbDhmRkJs/YjNCc1pYeGxibnd3/Zkh3d2ZIeDhNQT09",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://imgs.search.brave.com/zAPIxejTLMbb47i8MP2nNDS3lMDX7gE1RcYNsBNAB4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzU3OTEx/ODg4MTAtM2EwMTc2/OGMxZTJmP2l4bGli/PXJiLTQuMS4wJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tlh4OGNHVnZj/R3hsZkdWdWZEQjhm/REI4Zkh3dyZmbT1q/cGcmcT02MCZ3PTMw/MDA",
  "https://imgs.search.brave.com/sXCdJc5WsNtCocDjY2gfWm05YthU5uN5Xr8l-xQMzsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yLzU4/L2swYUp4Ni5qcGc",
  "https://imgs.search.brave.com/_Gm7V_6CWhc5rYLZKYMi3aY-dmUc1AkwrsEgITh0udY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83L2Iv/MC8xOTY2NjItMTky/MHgxMjgyLWRlc2t0/b3AtaGQtcGFydHkt/d2FsbHBhcGVyLmpw/Zw",
  "https://imgs.search.brave.com/oU9wsZHD04t6g4PNhHkEzD06f8i31PDpxpBh80xc7oY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJnb2QuY29t/L2ltYWdlcy9oZC93/ZWRkaW5nLTE5MjBY/MTA4MC13YWxscGFw/ZXItYTBnemZndTJl/YjI1Ymh3cy5qcGVn",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://imgs.search.brave.com/Vwl_1Tz9u85UPBHbCPMXHfkoi23VzgI-eSCZPNLY5aY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTI2/NjkuanBn",
  "https://imgs.search.brave.com/kx-olG0L0V8T47USdaVrXnDkkfNj4-Zj7A_UV4Qb7hI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyNjQ3/ODg5LmpwZw",
  "https://imgs.search.brave.com/Vwl_1Tz9u85UPBHbCPMXHfkoi23VzgI-eSCZPNLY5aY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTI2/NjkuanBn",

];

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleOpen = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Container sx={{ py: 2 }}>
          {/* === SECCIÓN 1: PORTAFOLIO PRINCIPAL === */}
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Portafolio Fotográfico
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Algunos de nuestros trabajos más destacados. Cada imagen cuenta una
            historia.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {portfolioItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card
                  onClick={() => handleOpen(item)}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 4,
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: 250,
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Modal de imagen ampliada */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                borderRadius: 2,
                p: 2,
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {selectedItem && (
                <>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {selectedItem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, textAlign: "center", maxWidth: 600 }}
                  >
                    {selectedItem.description}
                  </Typography>
                </>
              )}
            </Box>
          </Modal>
        </Container>

        {/* === SECCIÓN 2: MOSAICO VISUAL === */}
        <Box sx={{ py: 10, background: "#fff" }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Galería Artística
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Una selección visual más libre, donde el arte y la espontaneidad se mezclan.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: 2,
              px: 3,
            }}
          >
            {mosaicItems.map((img, index) => (
              <Box
                key={index}
                sx={{
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: 3,
                  cursor: "pointer",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  },
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img src={img} alt={`mosaic-${index}`} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
