import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Llamado a Spring Boot
    const fakeUser = { id: 1, name: "Alfredo", email: "alfredo@email.com" };
    const fakeToken = "jwt-token-ejemplo";

    login(fakeUser, fakeToken);
    navigate("/profile");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
