import { User, Lock } from "lucide-react";
import "../styles/Cad.css";

function Conc() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aqui será realizada a finalização do cadastro.
  };

  return (
    <div className="cadastro-user-page">
      <div className="cadastro-user-card">
        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit}>
          <div className="cadastro-user-input">
            <User />

            <input
              required
              type="text"
              placeholder="Nome de Usuário"
            />
          </div>

          <div className="cadastro-user-input">
            <Lock />

            <input
              required
              type="password"
              placeholder="Senha"
            />
          </div>

          <button
            type="submit"
            className="cadastro-user-button"
          >
            Finalizar conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Conc;