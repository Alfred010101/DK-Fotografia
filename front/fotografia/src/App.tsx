import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import PortafolioPage from "./pages/PortafolioPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Páginas accesibles para todos */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Solo visible si NO esta logueado */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* Solo visible si esta logueado */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/packages" 
            element={
              <ProtectedRoute>
                <PackagesPage />
              </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
