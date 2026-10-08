import { useNavigate, useSearchParams } from "react-router-dom";
import { Mail, User } from "lucide-react";
import google from "../../assets/google.png";
import "./Cad.css";

function Cadastro() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const tipo = searchParams.get("tipo") || "participante";

    const metodo: "email" | "siap" | "matricula" =
        tipo === "participante"
            ? "email"
            : tipo === "organizador"
            ? "siap"
            : tipo === "aluno"
            ? "matricula"
            : "email";

    return (
        <div className="cadastro-page">
            <div className="cadastro-card">
                <h1>Cadastre-se</h1>

                <div className="cadastro-input">
                    {metodo === "email" ? <Mail /> : <User />}

                    <input
                        type="text"
                        placeholder={
                            metodo === "email"
                                ? "E-mail"
                                : metodo === "siap"
                                ? "SIAP"
                                : "Matrícula"
                        }
                    />
                </div>

                <div className="cadastro-metodos">

                    {/* GOOGLE */}
                    <button
                        type="button"
                        className="cadastro-metodo"
                        onClick={() =>
                            navigate("/cadastro?tipo=participante")
                        }
                    >
                        <img src={google} alt="Google" />
                    </button>

                    {/* ORGANIZADOR */}
                    <button
                        type="button"
                        className="cadastro-metodo"
                        onClick={() =>
                            navigate("/cadastro?tipo=organizador")
                        }
                    >
                        <span>S</span>
                    </button>

                    {/* ALUNO */}
                    <button
                        type="button"
                        className="cadastro-metodo"
                        onClick={() =>
                            navigate("/cadastro?tipo=aluno")
                        }
                    >
                        <span>Q</span>
                    </button>

                </div>

                <button
                    type="button"
                    className="cadastro-continuar"
                    onClick={() => {
                        if (tipo === "participante" || tipo === "organizador" || tipo === "aluno") {
                            navigate("/cadastro/email");
                        }
                    }}
                >
                    Continuar
                </button>

                <label className="cadastro-termos">
                    <input type="checkbox" />

                    <span>
                        Li e concordo com os{" "}
                        <a href="#">termos de uso de dados</a> e{" "}
                        <a href="#">
                            as configurações de privacidade do sistema.
                        </a>
                    </span>
                </label>
            </div>
        </div>
    );
}

export default Cadastro;