import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Modal,
  Stepper,
  Step,
  StepLabel,
  TextField,
} from "@mui/material";
import { packages } from "../data/Packages";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const steps = ["Detalles del evento", "Forma de pago", "Confirmación"];

const PackagesPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const { user, token } = useAuth();

  const [formData, setFormData] = useState({
    username: user?.username,
    date: "",
    location: "",
    notes: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    packageName: "",
    price: 0,
  });

  const handleOpen = (pkg: any) => {
    setSelectedPackage(pkg);
    setFormData((prev) => ({
      ...prev,
      packageName: pkg.title,
      price: pkg.price,
    }));
    setOpen(true);
    setActiveStep(0);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      if (!formData.date || !formData.location || !formData.cardNumber) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
      }

      const response = await fetch("http://localhost:8080/api/v1/event/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          date: formData.date,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar evento");
      }

      const data = await response.json();

      console.log("EVENTO GUARDADO:", data);

      alert("¡Compra exitosa! Te contactaremos para confirmar tu sesión.");
      setOpen(false);

    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al procesar la compra.");
    }
  };


  return (
    <>
      <Box
        sx={{
          py: 2,
          px: { xs: 2, md: 8 },
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Paquetes Fotográficos
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Elige el paquete ideal para tu evento o sesión profesional.
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {packages.map((pkg, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 320,
                  height: 460,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderTop: 4,
                  borderColor: pkg.color,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    {pkg.icon}
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                      {pkg.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    gutterBottom
                  >
                    {pkg.ideal}
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: "1.2rem",
                      marginTop: 8,
                      marginBottom: 0,
                    }}
                  >
                    {pkg.details.map((d: string, i: number) => (
                      <li key={i}>
                        <Typography variant="body2">{d}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    align="center"
                    sx={{ mt: 2, color: pkg.color }}
                  >
                    ${pkg.price.toLocaleString()} MXN
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: pkg.color,
                      "&:hover": { opacity: 0.9 },
                      borderRadius: 3,
                      px: 4,
                    }}
                    onClick={() => handleOpen(pkg)}
                  >
                    Adquirir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal de compra */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 600 },
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {selectedPackage?.title}
          </Typography>

          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Detalles del evento */}
          {activeStep === 0 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField label="Fecha del evento" type="date" name="date" value={formData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} />
              <TextField label="Ubicación" name="location" value={formData.location} onChange={handleChange} />
              <TextField label="Notas adicionales" name="notes" value={formData.notes} multiline rows={3} onChange={handleChange} />
            </Box>
          )}

          {/* Forma de pago */}
          {activeStep === 1 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Tarjeta de Crédito o Débito
              </Typography>
              <TextField label="Número de Tarjeta" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="XXXX XXXX XXXX XXXX" />
              <TextField label="Nombre en la Tarjeta" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="Como aparece en la tarjeta" />
              <Box display="flex" gap={2}>
                <TextField label="Expiración (MM/AA)" name="expiry" value={formData.expiry} onChange={handleChange} fullWidth />
                <TextField label="CVV" name="cvv" value={formData.cvv} onChange={handleChange} fullWidth />
              </Box>
            </Box>
          )}

          {/* Confirmación */}
          {activeStep === 2 && (
            <Box>
              <Typography variant="body1" mb={2}>
                Por favor, confirma los detalles de tu compra:
              </Typography>
              <Typography><strong>Cliente:</strong> {formData.firstName + " " + formData.lastName}</Typography>
              <Typography><strong>Email:</strong> {formData.username}</Typography>
              <Typography><strong>Fecha:</strong> {formData.date}</Typography>
              <Typography><strong>Ubicación:</strong> {formData.location}</Typography>
              <Typography><strong>Tarjeta terminada en:</strong> ****{formData.cardNumber.slice(-4)}</Typography>
              <Typography><strong>Paquete:</strong> {formData.packageName}</Typography>
              <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                Total: ${formData.price.toLocaleString()} MXN
              </Typography>
            </Box>
          )}

          {/* Botones */}
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ borderRadius: 3 }}>
              Atrás
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext} sx={{ borderRadius: 3 }}>
                Siguiente
              </Button>
            ) : (
              <Button variant="contained" color="success" onClick={handleSubmit} sx={{ borderRadius: 3 }}>
                Confirmar
              </Button>
            )}
          </Box>
        </Box>
      </Modal>

      <Footer />
    </>
  );
};

export default PackagesPage;
