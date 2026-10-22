import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Header from "../components/Header";
import "../styles/Principal.css";
import fundo from "../assets/fundo.png";

const banners = [fundo, fundo, fundo];

const eventos = [
  "Sustentabilidade e Inovação",
  "Pesquisa, Ciência e Inovação",
  "Gestão e Inovação no Ensino Superior",
  "Metodologias Ativas na Educação",
  "Desafios e Perspectivas na Educação"
].map((titulo) => ({ titulo, imagem: fundo }));

export default function Principal() {
  const [atual, setAtual] = useState(1);

  const n = banners.length;
  const posicoes = [(atual - 1 + n) % n, atual, (atual + 1) % n];

  return (
    <div className="home">

      <Header />

      {/* BANNERS */}
      <section className="area-banners">
        <div className="banners">
          {posicoes.map((i, pos) => (
            <button key={pos} className="banner" onClick={() => setAtual(i)}>
              <img src={banners[i]} alt="" />
            </button>
          ))}
        </div>

        <div className="indicadores">
          {banners.map((_, i) => (
            <button
              key={i}
              className={i === atual ? "indicador ativo" : "indicador"}
              onClick={() => setAtual(i)}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* RECENTES */}
      <section className="recentes">
        <div className="titulo-recentes">
          <h1>Recentes</h1>
          <button className="ver-todos">
            Ver todos <ArrowRight />
          </button>
        </div>

        <div className="lista-eventos">
          {eventos.map((e) => (
            <div className="evento-card" key={e.titulo}>
              <img src={e.imagem} alt={e.titulo} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}