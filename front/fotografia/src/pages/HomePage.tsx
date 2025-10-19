import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a la Tienda Virtual 👕
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Personaliza, compra y gestiona tus productos fácilmente.
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          Iniciar Sesión
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/profile"
        >
          Ir al Perfil
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
