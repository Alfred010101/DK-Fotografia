import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";

const ShoppingPage = () => {
    return (
        <>
            <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>
                    Aqui va info sobre compras del usuario
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    Compras xD ---
                </Typography>
            </Container>
            <Footer />
        </>

    );
};

export default ShoppingPage;