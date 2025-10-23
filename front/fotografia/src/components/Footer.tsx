import { Box, Container, Typography, Link, Stack, Divider, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, Email, Phone, LocationOn } from "@mui/icons-material";

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "grey.900",
                color: "grey.300",
                mt: 8,
                pt: 6,
                pb: 3,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "flex-start" }}
                    spacing={4}
                >
                    {/* Sección de información */}
                    <Box flex={1}>
                        <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                            DK Fotografía
                        </Typography>
                        <Typography variant="body2" color="grey.400" sx={{ mb: 1 }}>
                            Capturamos los momentos más importantes de tu vida con estilo y profesionalismo.
                        </Typography>
                        <Stack direction="row" spacing={1} mt={1}>
                            <IconButton color="inherit" size="small">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <Twitter />
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* Enlaces rápidos */}
                    <Box flex={1}>
                        <Typography variant="subtitle1" fontWeight="bold" color="white" gutterBottom>
                            Enlaces
                        </Typography>
                        <Stack spacing={0.5}>
                            <Link href="/" color="grey.300" underline="hover">Inicio</Link>
                            <Link href="/packages" color="grey.300" underline="hover">Paquetes</Link>
                            <Link href="/events" color="grey.300" underline="hover">Eventos</Link>
                            <Link href="/contact" color="grey.300" underline="hover">Contacto</Link>
                        </Stack>
                    </Box>

                    {/* Información de contacto */}
                    <Box flex={1}>
                        <Typography variant="subtitle1" fontWeight="bold" color="white" gutterBottom>
                            Contáctanos
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Email fontSize="small" />
                                <Typography variant="body2">contacto@dkfotografia.com</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Phone fontSize="small" />
                                <Typography variant="body2">+52 55 1234 5678</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <LocationOn fontSize="small" />
                                <Typography variant="body2">
                                    Av. Reforma 123, CDMX, México
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ my: 4, borderColor: "grey.800" }} />

                <Typography variant="body2" color="grey.500" textAlign="center">
                    © {new Date().getFullYear()} DK Fotografía — Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
}
