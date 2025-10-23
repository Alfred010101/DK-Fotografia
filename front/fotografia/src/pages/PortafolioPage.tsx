import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";

const PortafolioPage = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Aqui va info sobre nuestros portafolio
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Portafolio ---
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default PortafolioPage;
