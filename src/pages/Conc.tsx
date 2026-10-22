import { User } from 'lucide-react';
import { Lock } from 'lucide-react';
import "../styles/Cad.css";

function Conc() {
  return (
    <div className="cadastro-user-page">
      <div className="cadastro-user-card">
        <h1>Cadastre-se</h1>

        <div className="cadastro-user-input">
          <User />
          <input
            type="text"
            placeholder="Nome de Usuário"
          />
        </div>

        <div className="cadastro-user-input">
          <Lock />
          <input
            type="password"
            placeholder="Senha"
          />
        </div>
        <button
          type="button"
          className="cadastro-user-button"
        >
          Finalizar conta
        </button>
      </div>
    </div>
  );
}

export default Conc;