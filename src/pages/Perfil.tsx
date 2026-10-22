import "../styles/Principal.css";

import { Menu, FileText, FileCheck, CalendarCheck2, MapPin, Clock, Download, UserRound, Image as ImageIcon, } from "lucide-react";

import IFCE from "../assets/IFCE.webp";

function Perfil() {
  const certificados = [
    "Certificado de Oficina de Robótica",
    "Certificado da Semana de Inclusão",
    "Certificado da Palestra sobre IA",
  ];

  const eventos = [
    {
      titulo: "Palestra contra o bullying",
      data: "Data a definir",
      horario: "Horário a definir",
      local: "Local a definir",
    },
    {
      titulo: "Semana da Tecnologia",
      data: "Data a definir",
      horario: "Horário a definir",
      local: "Local a definir",
    },
  ];

  return (
    <div className="pagina-perfil">
      <header className="cabecalho">
        <button className="botao-menu" aria-label="Abrir menu">
          <Menu className="icone-menu" />
        </button>

        <img
          className="logo-ifce"
          src={IFCE}
          alt="Instituto Federal do Ceará"
        />
      </header>

      <main className="conteudo-principal">
        <section className="coluna-esquerda">
          <div className="card-certificados">
            <h1 className="titulo-secao">
              <FileText className="icone-titulo" />
              Meus Certificados
            </h1>

            <ul className="lista-certificados">
              {certificados.map((certificado, index) => (
                <li className="item-certificado" key={certificado}>
                  <FileCheck className="icone-certificado" />

                  <a href="#" className="link-certificado">
                    {certificado}
                  </a>

                  <button
                    className="botao-download"
                    onClick={() =>
                      alert(`Download do certificado ${index + 1}`)
                    }
                  >
                    <Download className="icone-download" />
                    Baixar Certificado
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-eventos">
            <h1 className="titulo-secao">Próximos Eventos</h1>

            <div className="lista-eventos">
              {eventos.map((evento) => (
                <article className="evento" key={evento.titulo}>
                  <h2>{evento.titulo}</h2>

                  <p>
                    <CalendarCheck2 className="icone-evento" />
                    {evento.data}
                  </p>

                  <p>
                    <Clock className="icone-evento" />
                    {evento.horario}
                  </p>

                  <p>
                    <MapPin className="icone-evento" />
                    {evento.local}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="card-perfil">
          <div className="capa-perfil">
            <ImageIcon className="icone-capa" />
          </div>

          <div className="conteudo-perfil">
            <div className="identificacao-perfil">
              <div className="avatar-perfil">
                <UserRound className="icone-usuario" />
              </div>

              <div className="dados-usuario">
                <h2>Flávio</h2>
                <p>Estudante</p>
              </div>
            </div>

            <section className="secao-descricao">
              <h3>Descrição</h3>

              <div className="caixa-descricao">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque vehicula urna non orci mattis, at laoreet
                  sem aliquam. Ut finibus sapien et lacus rutrum, euismod
                  pharetra leo sodales...
                </p>

                <a href="#" className="link-ver-mais">
                  Ver mais
                </a>
              </div>
            </section>

            <section className="secao-participados">
              <h3>Eventos participados</h3>

              <div className="imagens-eventos">
                <img
                  className="imagem-evento"
                  src={IFCE}
                  alt="Primeiro evento participado"
                />

                <img
                  className="imagem-evento"
                  src={IFCE}
                  alt="Segundo evento participado"
                />
              </div>
            </section>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Perfil;