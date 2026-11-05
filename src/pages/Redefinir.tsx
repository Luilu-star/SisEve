import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Redefinir() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/redefinicao/verificacao");
  };

  return (
    <div className="redefinir-page">
      <div className="redefinir-card">
        <h1>Esqueceu a senha?</h1>

        <p>
          Redefina a senha em duas etapas
        </p>

        <h2>Insira o e-mail para o envio do código</h2>

        <form
          className="redefinir-senha-input"
          onSubmit={handleSubmit}
        >
          <Mail />

          <input
            required
            type="email"
            placeholder="E-mail"
          />

          <button
            type="submit"
            className="redefinir-button"
          >
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
}

export default Redefinir;