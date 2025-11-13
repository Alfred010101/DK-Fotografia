import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from "@mui/material";
import Footer from "../components/Footer";

interface Purchase {
    id: number;
    fkUser: number;
    date: string;
    location: string;
    notes: string;
    cardNumber: string;
    cardName: string;
    expiry: string;
    cvv: string;
    packageName: string;
    price: number;
}

const ShoppingPage = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch("http://localhost:8080/api/v1/event/all", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error("Error fetching purchases");

                const data = await response.json();
                setPurchases(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPurchases();
    }, []);

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Historial de compras
                </Typography>

                <Paper elevation={3} sx={{ mt: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>Fecha</strong></TableCell>
                                <TableCell><strong>Ubicación</strong></TableCell>
                                <TableCell><strong>Paquete</strong></TableCell>
                                <TableCell><strong>Precio</strong></TableCell>
                                <TableCell><strong>Notas</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {purchases.map((p) => (
                                <TableRow key={p.id}>
                                    <TableCell>{p.id}</TableCell>
                                    <TableCell>{p.date}</TableCell>
                                    <TableCell>{p.location}</TableCell>
                                    <TableCell>{p.packageName}</TableCell>
                                    <TableCell>${p.price}</TableCell>
                                    <TableCell>{p.notes || "-"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>

            <Footer />
        </>
    );
};

export default ShoppingPage;
