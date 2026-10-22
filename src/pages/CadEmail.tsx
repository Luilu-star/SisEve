import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Cad.css";

function CadEmail() {
  const navigate = useNavigate();
  return (
    <div className="cadastro-email-page">
      <div className="cadastro-email-card">
        <h1>Cadastre-se</h1>
        <p>
          Insira seu endereço de e-mail para que
          <br />
          possamos lhe enviar seu código de verificação.
        </p>
        <form className="cadastro-email-input">
          <Mail />
          <input
            type="email"
            placeholder="E-mail"
          />
        </form>
        <button
          type="button"
          className="cadastro-email-button"
          onClick={() => navigate("/cadastro/verificacao")}
        >
          Enviar código
        </button>
      </div>
    </div>
  );
}

export default CadEmail;