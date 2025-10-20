import { Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Aqui va info sobre nosotros
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Sobre nosotros ---
      </Typography>
    </Container>
  );
};

export default AboutPage;
