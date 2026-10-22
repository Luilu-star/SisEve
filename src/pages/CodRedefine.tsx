import { useRef, useState } from "react";
import "../styles/Home.css";

function CodRedefine() {
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
    <div className="recuperacao-senha-page">
      <div className="recuperacao-senha-card">

        <h1 className="recuperacao-senha-titulo">
          Verifique o código enviado
        </h1>

        <p className="recuperacao-senha-aviso">
          Verifique seu e-mail e informe o código
          <br />
          de 5 dígitos para a recuperação de
          <br />
          senha.
        </p>

        <div className="codigo-container">
        <div className="codigo-inputs">
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

        <a href="#" className="reenviar-codigo">
            Reenviar código
        </a>
        </div>
        <button
          type="button"
          className="recuperacao-senha-button"
        >
          Enviar
        </button>

      </div>
    </div>
  );
}

export default CodRedefine;