import React from "react";
import { Grid, Card, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import { packages } from "../data/Packages";
import Footer from "../components/Footer";

const PackagesPage: React.FC = () => {
  return (
    <>
      <Box sx={{ py: 2, px: { xs: 2, md: 8 }, backgroundColor: "#fafafa", minHeight: "100vh" }}>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Paquetes Fotográficos
        </Typography>

        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "text.secondary" }}>
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
                    💲{pkg.price.toLocaleString()} MXN
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
                  >
                    Adquirir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />

    </>
  );
};

export default PackagesPage;
