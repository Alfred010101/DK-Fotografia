import { useState } from "react";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { RegisterFormData } from "../../types/auth"; 

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, username, password } = formData;

    if (!firstName || !lastName || !username || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error en el registro");
      }

      const data = await response.json();

      login(
        {
          firstName,
          lastName,
          username,
          role: data.role,
        }, data.token
      );
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al registrar");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Registro
        </Typography>

        {error && (
          <Typography color="error" textAlign="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Nombre(s)"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Apellidos"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Correo electrónico"
            name="username"
            type="email"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
