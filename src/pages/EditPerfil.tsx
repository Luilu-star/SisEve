import HeaderEdits from "../components/HeaderEdits";
import "../styles/Configuracoes.css";

function EditPerfil() {
  return (
    <main className="edit-perfil-page">
      <HeaderEdits />

      <section className="configuracoes">
        <div>
            <div>
          <span>Perfil</span>
          <p className="subtitulo">Atualize seus dados pessoais, foto de perfil e informações de contato.</p>
            </div>
        </div>
      </section>
    </main>
  );
}

export default EditPerfil;