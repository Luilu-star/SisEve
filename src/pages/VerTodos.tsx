import { useState } from "react";
import { ChevronRight, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import "../styles/Complement.css";
import fundo from "../assets/fundo.png";

const eventos = [
  "Semana da Inclusão",
  "Bullying e seus impactos emocionais",
  "Metodologias Ativas na Educação",
  "Semana de Iniciação Científica",
  "Sobre o Bullying",
  "Semana da Tecnologia",
  "O Perigo das Redes Sociais",
  "Oficina de Robótica",
  "Pesquisa, Ciência e Inovação",
  "Gestão e Inovação no Ensino Superior",
  "Metodologias Ativas na Educação",
  "Desafios e Perspectivas na Educação"
].map((titulo, i) => ({ id: i, titulo, imagem: fundo }));

const ordenacoes = ["Relevância", "Mais recentes", "A – Z"] as const;
type Ordenacao = (typeof ordenacoes)[number];

export default function VerTodos() {
  const navigate = useNavigate();
  const [ordem, setOrdem] = useState<Ordenacao>("Relevância");
  const [menuAberto, setMenuAberto] = useState(false);

  const lista = [...eventos].sort((a, b) => {
    if (ordem === "A – Z") return a.titulo.localeCompare(b.titulo, "pt-BR");
    if (ordem === "Mais recentes") return b.id - a.id;
    return a.id - b.id; // Relevância
  });

  return (
    <div className="pagina-todos">

      <Header />

      <section className="todos">
        <div className="titulo-todos">
          <div className="titulo-esquerda">
            <h1>Todos</h1>
            <button className="principais" onClick={() => navigate("/Principal")}>
              Principais resultados <ChevronRight />
            </button>
          </div>

          <div className="ordenar">
            <button
              className="ordenar-botao"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
            >
              <span>{ordem}</span>
              <Filter />
            </button>

            {menuAberto && (
              <ul className="ordenar-menu">
                {ordenacoes.map((o) => (
                  <li key={o}>
                    <button
                      className={o === ordem ? "ativo" : ""}
                      onClick={() => {
                        setOrdem(o);
                        setMenuAberto(false);
                      }}
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grade-eventos">
          {lista.map((e) => (
            <div className="evento-card" key={e.id}>
              <img src={e.imagem} alt={e.titulo} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}