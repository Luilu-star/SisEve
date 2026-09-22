import "../Home.css";

function FormC() {
  const parametros = new URLSearchParams(window.location.search);
  const tipo = parametros.get("tipo");

  return (
    <main className="form-cadastro">
      <form>
        <h1>Cadastre-se</h1>

        {tipo === "participante" && (
          <label>
            Diga seu e-mail:
            <input type="email" placeholder="E-Mail"/>
          </label>
        )}

        {tipo === "organizador" && (
          <label>
            Diga seu SIAP:
            <input type="text" placeholder="Matrícula"/>
          </label>
        )}

        <button type="submit">
          Continuar
        </button>
      </form>
    </main>
  );
}

export default FormC;