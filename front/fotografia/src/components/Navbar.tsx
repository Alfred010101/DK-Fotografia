import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#e0e0e0", color: "#000000" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo o título */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            letterSpacing: 0.5,
          }}
        >
          DK Fotografia
        </Typography>

        {/* Botones de navegación */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>

          {user ? (
            <>
              <Button color="inherit" component={Link} to="/packages">
                Paquetes
              </Button>
            </>) : (<></>)
          }

          <Button color="inherit" component={Link} to="/portfolio">
            Portaforio
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Sobre nosotros
          </Button>

          {user ? (
            <>
              <IconButton color="inherit" component={Link} to="/shopping">
                <LocalMallIcon />
              </IconButton>

              <IconButton color="inherit" component={Link} to="/profile">
                <AccountCircle />
              </IconButton>

              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ border: "1px solid white", ml: 1 }}
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Iniciar sesión
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to="/register"
              >
                Registrarse
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
