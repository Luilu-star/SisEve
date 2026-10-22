import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Redefinir() {
  const navigate = useNavigate();

  return (
    <div className="redefinir-page">
      <div className="redefinir-card">
        <h1>Esqueceu a senha?</h1>

        <p>
          Redefina a senha em duas etapas
        </p>

        <h2>Insira o e-mail para o envio do código</h2>

        <form className="redefinir-senha-input">
          <Mail />
          <input
            type="email"
            placeholder="E-mail"
          />
        </form>

        <button
          type="button"
          className="redefinir-button"
          onClick={() => navigate("/redefinicao/verificacao")}
        >
          Enviar código
        </button>
      </div>
    </div>
  );
}

export default Redefinir;