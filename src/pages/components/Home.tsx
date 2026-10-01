import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { User, Lock } from "lucide-react";
import logo from "../../assets/logo.png";
import Google from "../../assets/google.png";

function Home() {
  const navigate = useNavigate();
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (

    <div className="home">
      <header className="menu">
        <nav>
          <a className="ativo">Home</a>
          <a>About us</a>
          <a>Support</a>
        </nav>
      </header>

      <main className="home-conteudo">
        <section className="login-card">
          <h1>LOGIN</h1>

          <div className="campo">
            <User />
            <input
              type="text"
              placeholder="E-mail ou SIAPE"
            />
          </div>

          <div className="campo">
            <Lock />
            <input
              type={senhaVisivel ? "text" : "password"}
              placeholder="Senha"
            />

            <button
              type="button"
              className="olho"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
            >
              <i
                className={
                  senhaVisivel
                    ? "fa-solid fa-eye-slash"
                    : "fa-solid fa-eye"
                }
              ></i>
            </button>
          </div>

          <div className="links-login">
            <a href="#">Esqueci a senha</a>
          </div>

          <button
            type="button"
            className="google-login"
          >
            <img src={Google} alt="Google" />
            <span>Google</span>
          </button>

          <button
            type="button"
            className="login-button"
          >
            Login
          </button>
        </section>


        
        <section className="apresentacao">
          <img
            src={logo}
            alt="SisEve IFCE"
            className="logo"
          />

          <p>
            O SisEve é uma plataforma desenvolvida
            <br />
            para facilitar a organização, o planejamento
            <br />
            e o gerenciamento de eventos do IFCE.
          </p>

          <button
            type="button"
            className="cadastro-button"
            onClick={() => navigate("/cadastro?tipo=participante")}
          >
            Cadastre-se
          </button>

          <h2>Sistema de eventos do IFCE</h2>
        </section>
      </main>
    </div>
  );
}

export default Home;