import { useState } from "react";
import { Clock, Calendar, MapPin, Users, Filter } from "lucide-react";

import Header from "../components/Header";
import "../styles/Telas.css";
import fundo from "../assets/fundo.png";

type Evento = {
  id: number;
  titulo: string;
  horario: string;
  data: string;
  local: string;
  posicao: string;
  imagem: string;
};

// Troque "fundo" pelas imagens reais de cada evento (em src/assets)
const eventosIniciais: Evento[] = [
  { id: 1, titulo: "Palestra sobre o bullying", horario: "13:00 - 15:00", data: "31 de fevereiro", local: "Laboratório 3", posicao: "20º", imagem: fundo },
  { id: 2, titulo: "Aulões para o ENEM", horario: "13:00 - 15:00", data: "29 de abril", local: "Auditório", posicao: "35º", imagem: fundo },
  { id: 3, titulo: "Segurança na Internet", horario: "15:20 - 17:20", data: "14 de março", local: "Mini 1", posicao: "25º", imagem: fundo },
  { id: 4, titulo: "Semana da Tecnologia", horario: "13:00 - 15:00", data: "21 a 27 setembro", local: "Auditório", posicao: "18º", imagem: fundo },
];

export default function Espera() {
  const [eventos, setEventos] = useState(eventosIniciais);

  const sairDaFila = (id: number) => {
    setEventos((lista) => lista.filter((e) => e.id !== id));
  };

  return (
    <div className="espera-page">
      <Header />

      <main className="espera-conteudo">
        <div className="espera-topo">
          <h1>Minha Lista de Espera</h1>

          <button type="button" className="espera-filtrar">
            <span>Filtrar</span>
            <Filter />
          </button>
        </div>

        <section className="espera-lista">
          {eventos.map((e) => (
            <article className="espera-card" key={e.id}>
              <img className="espera-imagem" src={e.imagem} alt={e.titulo} />

              <div className="espera-info">
                <h2>{e.titulo}</h2>

                <div className="espera-dados">
                  <div className="espera-dado">
                    <h3>Horário <Clock /></h3>
                    <p>{e.horario}</p>
                  </div>

                  <div className="espera-dado">
                    <h3>Data <Calendar /></h3>
                    <p>{e.data}</p>
                  </div>

                  <div className="espera-dado">
                    <h3>Local <MapPin /></h3>
                    <p>{e.local}</p>
                  </div>

                  <div className="espera-dado">
                    <h3>Posição <Users /></h3>
                    <p>{e.posicao}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="espera-sair"
                  onClick={() => sairDaFila(e.id)}
                >
                  Sair da Fila
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}