import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Cad.css";

function Cadastro() {
const [searchParams] = useSearchParams();
const tipo = searchParams.get("tipo") || "participante";

const [metodo, setMetodo] = useState<"email" | "siap" | "matricula">(
tipo === "professor" ? "siap" : "email"
);

return (
<div className="cadastro-page">
<div className="cadastro-card">
<h1>Cadastre-se</h1>

<div className="cadastro-input">
<i className={
metodo === "email"
? "fa-regular fa-envelope"
: "fa-solid fa-id-card"
}></i>

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

<button
className={`cadastro-metodo ${metodo === "email" ? "selecionado" : ""}`}
onClick={() => setMetodo("email")}
>
<img src="/src/assets/google.png" alt="Google" />
</button>

<button
className={`cadastro-metodo ${metodo === "siap" ? "selecionado" : ""}`}
onClick={() => setMetodo("siap")}
>
<span>S</span>
</button>

<button
className={`cadastro-metodo ${metodo === "matricula" ? "selecionado" : ""}`}
onClick={() => setMetodo("matricula")}
>
<span>Q</span>
</button>

</div>

<button className="cadastro-continuar">
Continuar
</button>

<label className="cadastro-termos">
<input type="checkbox" />
<span>
Li e concordo com os <a>termos de uso de dados e as configurações de privacidade do sistema.</a>
</span>
</label>

</div>
</div>
);
}

export default Cadastro;