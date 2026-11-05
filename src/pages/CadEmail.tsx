import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Cad.css";

function CadEmail() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/cadastro/verificacao");
  };

  return (
    <div className="cadastro-email-page">
      <div className="cadastro-email-card">
        <h1>Cadastre-se</h1>

        <p>
          Insira seu endereço de e-mail para que
          <br />
          possamos lhe enviar seu código de verificação.
        </p>

        <form
          className="cadastro-email-form"
          onSubmit={handleSubmit}
        >
          <div className="cadastro-email-input">
            <Mail />

            <input
              type="email"
              placeholder="E-mail"
              required
            />
          </div>

          <button
            type="submit"
            className="cadastro-email-button"
          >
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadEmail;