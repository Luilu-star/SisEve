import "../Home.css";
import { useSearchParams } from "react-router-dom";
import { User } from 'lucide-react';

function Login() {
  const [searchParams] = useSearchParams();
  const tipo = searchParams.get("tipo");

  return (
    <div className="login-form">
      <h1>Login</h1>

      {tipo === "organizador" ? (
        <div className="campo">
          <User/>
          <input
            type="text"
            placeholder="SIAP"
          />
        </div>
      ) : (
        <div className="campo">
          <span className="icone">
            <i className="fa-solid fa-envelope"></i>
          </span>

          <input
            type="email"
            placeholder="E-mail"
          />
        </div>
      )}

      <div className="campo">
        <span className="icone">
          <i className="fa-solid fa-lock"></i>
        </span>

        <input
          type="password"
          placeholder="Senha"
        />

        <span className="olho">
          <i className="fa-solid fa-eye"></i>
        </span>
      </div>
    </div>
  );
}

export default Login;