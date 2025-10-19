import { useAuth } from "../context/AuthContext";
import { Button, Container, Typography, Box, Paper } from "@mui/material";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Perfil del Usuario
        </Typography>

        {user ? (
          <>
            <Box sx={{ mt: 2, mb: 4 }}>
              <Typography variant="h6">
                <strong>Nombre:</strong> {user.name}
              </Typography>
              <Typography variant="h6">
                <strong>Email:</strong> {user.email}
              </Typography>
            </Box>

            <Box textAlign="center">
              <Button
                variant="contained"
                color="error"
                onClick={logout}
                sx={{ borderRadius: 2 }}
              >
                Cerrar sesión
              </Button>
            </Box>
          </>
        ) : (
          <Typography color="text.secondary" align="center">
            No hay datos de usuario disponibles.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ProfilePage;
