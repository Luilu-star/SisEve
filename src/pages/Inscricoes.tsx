import { useState } from "react";
import { Clock, CalendarDays, MapPin, Lock, Filter } from "lucide-react";

import Header from "../components/Header";
import "../styles/Telas.css";
import fundo from "../assets/fundo.png";

type Inscricoes = {
  id: number;
  titulo: string;
  horario: string;
  data: string;
  local: string;
  codigo: string;
  imagem: string;
};

// Troque "fundo" pelas imagens reais de cada evento (em src/assets)
const inscricoesIniciais: Inscricoes[] = [
  { id: 1, titulo: "Oficina de Robótica", horario: "13:00 - 15:00", data: "15 a 18 setembro", local: "Auditório", codigo: "SHDE-283", imagem: fundo },
  { id: 2, titulo: "Semana de Inclusão", horario: "9:40 - 11:40", data: "16 de outubro", local: "Auditório", codigo: "FKHO-376", imagem: fundo },
  { id: 3, titulo: "Palestra sobre IA", horario: "15:20 - 17:20", data: "18 de agosto", local: "Mini 1", codigo: "DHFW-234", imagem: fundo },
  { id: 4, titulo: "Setembro Amarelo", horario: "13:00 - 15:00", data: "30 de setembro", local: "Auditório", codigo: "FKHO-376", imagem: fundo },
];

export default function Inscricoes() {
  const [inscricoes, setInscricoes] = useState(inscricoesIniciais);

  const cancelar = (id: number) => {
    setInscricoes((lista) => lista.filter((i) => i.id !== id));
  };

  return (
    <div className="inscricoes-page">
      <Header />

      <main className="inscricoes-conteudo">
        <div className="inscricoes-topo">
          <h1>Minhas Inscrições</h1>

          <button type="button" className="inscricoes-filtrar">
            <span>Filtrar</span>
            <Filter />
          </button>
        </div>

        <section className="inscricoes-lista">
          {inscricoes.map((i) => (
            <article className="inscricoes-card" key={i.id}>
              <img className="inscricoes-imagem" src={i.imagem} alt={i.titulo} />

              <div className="inscricoes-info">
                <h2>{i.titulo}</h2>

                <div className="inscricoes-dados">
                  <div className="inscricoes-dado">
                    <h3>Horário <Clock /></h3>
                    <p>{i.horario}</p>
                  </div>

                  <div className="inscricoes-dado">
                    <h3>Data <CalendarDays /></h3>
                    <p>{i.data}</p>
                  </div>

                  <div className="inscricoes-dado">
                    <h3>Local <MapPin /></h3>
                    <p>{i.local}</p>
                  </div>

                  <div className="inscricoes-dado">
                    <h3>Código A. <Lock /></h3>
                    <p className="inscricoes-codigo">{i.codigo}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inscricoes-cancelar"
                  onClick={() => cancelar(i.id)}
                >
                  Cancelar Inscrição
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}