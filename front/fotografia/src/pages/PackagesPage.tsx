import { Container, Typography } from "@mui/material";

const PackagesPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Aqui va info sobre nuestros paquetes
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Paquetes ---
      </Typography>
    </Container>
  );
};

export default PackagesPage;
