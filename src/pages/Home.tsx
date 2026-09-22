import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [professor, setProfessor] = useState(false);

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
            <i className="fa-solid fa-envelope"></i>
            <input
              type={professor ? "text" : "email"}
              placeholder={professor ? "SIAP" : "E-mail"}
            />
          </div>

          <div className="campo">
            <i className="fa-solid fa-lock"></i>
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
            <button
              type="button"
              onClick={() => setProfessor(!professor)}
            >
              {professor ? "Sou aluno" : "Sou professor"}
            </button>

            <a>Esqueci a senha</a>
          </div>

          {!professor && (
            <div className="google-login">
              <button className="google-circle">G</button>
              <span>Google</span>
            </div>
          )}

          <button className="login-button">Login</button>
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