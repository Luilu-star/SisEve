import { useState } from "react";
import { User, FileText, Camera, UserRound, CircleMinus, Plus } from "lucide-react";

import HeaderEdits from "../components/HeaderEdits";
import imagemEvento from "../assets/Evento_2.png";
import "../styles/Configuracoes.css";

const TAMANHO_MAXIMO = 2 * 1024 * 1024; // 2 MB

function EditPerfil() {
  const [foto, setFoto] = useState<string | null>(
    localStorage.getItem("fotoPerfil")
  );
  const [erro, setErro] = useState<string>("");

  const evento = {
    titulo: "Desafios e Perspectivas na Educação",
    imagem: imagemEvento,
  };

  function trocarFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const arquivo = e.target.files?.[0];
    if (!arquivo) return;

    if (arquivo.size > TAMANHO_MAXIMO) {
      setErro("A imagem deve ter no máximo 2 MB.");
      return;
    }

    const leitor = new FileReader();
    leitor.onloadend = () => {
      const base64 = leitor.result as string;
      try {
        localStorage.setItem("fotoPerfil", base64);
        setFoto(base64);
        setErro("");
      } catch {
        setErro("Não foi possível salvar a imagem. Tente uma menor.");
      }
    };
    leitor.readAsDataURL(arquivo);
  }

  return (
    <div className="edit-page">
      <HeaderEdits />

      <main className="edit-main">
        <div className="edit-grid">
          {/* ===== COLUNA ESQUERDA ===== */}
          <section className="edit-dados">
            <h2 className="edit-titulo-secao">
              <User /> Dados Pessoais
            </h2>

            <form id="form-perfil" className="edit-dados-form">
              <div className="edit-campo">
                <label htmlFor="nome">Nome completo</label>
                <input type="text" id="nome" />
              </div>

              <div className="edit-campo">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" />
              </div>

              <div className="edit-campo">
                <label htmlFor="matricula">Matrícula/SIAPE</label>
                <input type="text" id="matricula" />
              </div>

              <div className="edit-campo">
                <label htmlFor="tipo">Tipo de usuário</label>
                <input type="text" id="tipo" />
              </div>
            </form>
          </section>

          <section className="edit-descricao">
            <h2 className="edit-titulo-secao">
              <FileText /> Informações adicionais
            </h2>

            <div className="edit-campo edit-campo-descricao">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" form="form-perfil" />
            </div>

            <div className="edit-botoes">
              <button type="button" className="botao-cancelar">
                Cancelar
              </button>
              <button type="submit" form="form-perfil" className="botao-salvar">
                Salvar alterações
              </button>
            </div>
          </section>

          {/* ===== COLUNA DIREITA ===== */}
          <aside className="edit-lateral">
            <div className="edit-foto">
              <div className="edit-foto-circulo">
                {foto ? <img src={foto} alt="Foto de perfil" /> : <UserRound />}
              </div>

              <label htmlFor="arquivo-foto" className="botao-alterar-foto">
                <Camera /> Alterar foto
              </label>
              <input
                id="arquivo-foto"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={trocarFoto}
                hidden
              />

              <p className="edit-foto-info">
                Formatos aceitos: JPG, PNG ou WEBP.
                <br />
                Tamanho máximo: 2MB
              </p>

              {erro && <p className="erro-foto">{erro}</p>}
            </div>

            <div className="edit-eventos">
              <h3>Eventos a mostra</h3>

              <div className="edit-evento">
                <img
                  className="edit-evento-imagem"
                  src={evento.imagem}
                  alt={evento.titulo}
                />

                <div className="edit-evento-info">
                  <span className="edit-evento-titulo">{evento.titulo}</span>
                </div>

                <button
                  type="button"
                  className="botao-remover"
                  aria-label={`Remover ${evento.titulo}`}
                >
                  <CircleMinus />
                </button>
              </div>

              <div className="edit-evento">
                <button
                  type="button"
                  className="edit-evento-add"
                  aria-label="Adicionar evento"
                >
                  <Plus />
                </button>
                <span className="edit-evento-titulo">
                  Adicione um novo evento ao perfil
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default EditPerfil;