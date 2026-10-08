import { useState } from "react";
import {Menu, Search, Bell, UserRound, ArrowRight} from "lucide-react";

import "./Principal.css";

import IFCE from "../../assets/IFCE.webp";
import bannerPrincipal from "../../assets/fundo.png";
import bannerLateral from "../../assets/fundo.png";

import evento1 from "../../assets/fundo.png";
import evento2 from "../../assets/fundo.png";
import evento3 from "../../assets/fundo.png";
import evento4 from "../../assets/fundo.png";
import evento5 from "../../assets/fundo.png";

function Principal() {
  const [bannerAtual, setBannerAtual] = useState(1);

  const banners = [
    bannerLateral,
    bannerPrincipal,
    bannerLateral
  ];

  const eventos = [
    { imagem: evento1, titulo: "Sustentabilidade e Inovação" },
    { imagem: evento2, titulo: "Pesquisa, Ciência e Inovação" },
    { imagem: evento3, titulo: "Gestão e Inovação no Ensino Superior" },
    { imagem: evento4, titulo: "Metodologias Ativas na Educação" },
    { imagem: evento5, titulo: "Desafios e Perspectivas na Educação" }
  ];

  return (
    <div className="home">

      <header className="header">
        <div className="header-esquerda">

          <button className="botao-menu">
            <Menu size={40} strokeWidth={1.8} />
          </button>

          <div className="logo">
            <img
              src={IFCE}
              alt="Instituto Federal Ceará"
            />
          </div>

        </div>

        <div className="header-direita">

          <div className="campo-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar..."
            />

            <Search
              size={34}
              strokeWidth={2}
            />
          </div>

          <button className="icone-header">
            <Bell
              size={39}
              strokeWidth={1.8}
            />
          </button>

          <button className="perfil">
            <UserRound
              size={35}
              strokeWidth={1.8}
            />
          </button>

        </div>
      </header>

      <section className="area-banners">

        <div className="banners">

          <button
            className="banner-lateral"
            onClick={() =>
              setBannerAtual(
                bannerAtual === 0
                  ? banners.length - 1
                  : bannerAtual - 1
              )
            }
          >
            <img
              src={
                banners[
                  bannerAtual === 0
                    ? banners.length - 1
                    : bannerAtual - 1
                ]
              }
              alt="Evento"
            />
          </button>

          <div className="banner-principal">
            <img
              src={banners[bannerAtual]}
              alt="Evento principal"
            />
          </div>

          <button
            className="banner-lateral"
            onClick={() =>
              setBannerAtual(
                bannerAtual === banners.length - 1
                  ? 0
                  : bannerAtual + 1
              )
            }
          >
            <img
              src={
                banners[
                  bannerAtual === banners.length - 1
                    ? 0
                    : bannerAtual + 1
                ]
              }
              alt="Evento"
            />
          </button>

        </div>

        <div className="indicadores">

          {banners.map((_, index) => (
            <button
              key={index}
              className={
                index === bannerAtual
                  ? "indicador ativo"
                  : "indicador"
              }
              onClick={() => setBannerAtual(index)}
            />
          ))}

        </div>

      </section>

      <section className="eventos-recentes">

        <div className="titulo-eventos">

          <h1>Recentes</h1>

          <button className="ver-todos">
            Ver todos
            <ArrowRight size={27} />
          </button>

        </div>

        <div className="lista-eventos">

          {eventos.map((evento, index) => (
            <div
              className="evento-card"
              key={index}
            >
              <img
                src={evento.imagem}
                alt={evento.titulo}
              />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Principal;