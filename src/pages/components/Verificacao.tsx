import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./Cad.css";

function Verificacao() {
  const navigate = useNavigate();

  const [codigo, setCodigo] = useState(["", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (valor: string, index: number) => {
    if (!/^\d?$/.test(valor)) return;

    const novoCodigo = [...codigo];
    novoCodigo[index] = valor;
    setCodigo(novoCodigo);

    if (valor && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="verificacao-email-page">
      <div className="verificacao-email-card">
        <h1>Cadastre-se</h1>

        <p className="envio-codigo">
          Código de verificação enviado.
        </p>

        {/* LOCAL DO CÓDIGO */}

        <div className="codigo-container">
          {codigo.map((numero, index) => (
            <input
            key={index}
            ref={(element) => {
              inputsRef.current[index] = element;
            }}
            className="codigo-input"
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="0"
            value={numero}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
          ))}
        </div>

        <p className="aviso-codigo">
          Verifique seu e-mail e informe o
          <br />
          código de 5 dígitos para a verificação.
        </p>

        <button
          type="button"
          className="verificacao-email-button"
          onClick={() => navigate("/cadastro/conc")}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Verificacao;