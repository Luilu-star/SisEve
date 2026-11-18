import HeaderCertificado from "../components/HeaderCertificado";
import { useMemo, useState } from "react";
import {
  FileCheck,
  Search,
  ChevronDown,
  Calendar,
  Download,
  Image as ImageIcon,
} from "lucide-react";
import "../styles/Telas.css";

type StatusCertificado = "Disponível" | "Em processamento" | "Indisponível";
type Ordenacao = "Recentes" | "Relevantes" | "A-Z";

interface Certificado {
  id: number;
  titulo: string;
  local: string;
  dataExibicao: string; // texto mostrado na tabela
  dataOrdem: string; // ISO, usado para ordenar
  cargaHoraria: number;
  status: StatusCertificado;
  imagem?: string;
  urlDownload?: string;
}

// TODO: substituir por dados vindos da API
const CERTIFICADOS: Certificado[] = [
  {
    id: 1,
    titulo: "Palestra sobre IA",
    local: "Auditório",
    dataExibicao: "18 de ago",
    dataOrdem: "2026-08-18",
    cargaHoraria: 20,
    status: "Disponível",
  },
  {
    id: 2,
    titulo: "Semana da Tec.",
    local: "Auditório",
    dataExibicao: "22 a 27 de set",
    dataOrdem: "2026-09-22",
    cargaHoraria: 40,
    status: "Em processamento",
  },
];

function Certificados() {
  const [busca, setBusca] = useState("");
  const [statusSelecionado, setStatusSelecionado] = useState("");
  const [ordenacao, setOrdenacao] = useState<Ordenacao>("Recentes");

  const certificadosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    const lista = CERTIFICADOS.filter((c) => {
      const bateBusca = c.titulo.toLowerCase().includes(termo);
      const bateStatus = !statusSelecionado || c.status === statusSelecionado;
      return bateBusca && bateStatus;
    });

    return [...lista].sort((a, b) => {
      if (ordenacao === "A-Z") return a.titulo.localeCompare(b.titulo, "pt-BR");
      if (ordenacao === "Relevantes") return b.cargaHoraria - a.cargaHoraria;
      return b.dataOrdem.localeCompare(a.dataOrdem); // Recentes
    });
  }, [busca, statusSelecionado, ordenacao]);

  function handleBaixar(certificado: Certificado) {
    if (certificado.urlDownload) {
      window.open(certificado.urlDownload, "_blank");
    }
    // TODO: chamar endpoint de download do certificado
  }

  return (
    <div className="certificados-page">
      <HeaderCertificado />

      <main className="certificados-main">
        <h1>Meus Certificados</h1>

        <section className="certificados-grid">
          {/* Banner */}
          <div className="certificado-resgate">
            <FileCheck size={44} strokeWidth={1.5} />
            <div>
              <h2 className="titulo-certificado">Resgate seu certificado</h2>
              <p className="descricao-certificado">
                Aqui você pode visualizar e baixar os certificados dos eventos
                <br />
                que participou e que já estão disponíveis para resgate.
              </p>
            </div>
          </div>

          {/* Filtros */}
          <div className="certificado-filtros">
            <label className="campo-pesquisa-certificado">
              <input
                type="text"
                placeholder="Pesquisar evento..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                aria-label="Pesquisar evento"
              />
              <Search />
            </label>

            <div className="campo-select">
              <select
                value={statusSelecionado}
                onChange={(e) => setStatusSelecionado(e.target.value)}
                aria-label="Filtrar por status"
              >
                <option value="">Status</option>
                <option value="Disponível">Disponível</option>
                <option value="Em processamento">Em processamento</option>
                <option value="Indisponível">Indisponível</option>
              </select>
              <ChevronDown />
            </div>

            <div className="campo-select">
              <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value as Ordenacao)}
                aria-label="Ordenar certificados"
              >
                <option value="Recentes">Mais Recentes</option>
                <option value="Relevantes">Mais Relevantes</option>
                <option value="A-Z">A-Z</option>
              </select>
              <ChevronDown />
            </div>
          </div>

          {/* Tabela */}
          <div className="certificado-tabela">
            <div className="tabela-cabecalho">
              <span>Evento</span>
              <span>Data do evento</span>
              <span>Carga Horária</span>
              <span>Status</span>
              <span>Ações</span>
            </div>

            {certificadosFiltrados.length === 0 ? (
              <p className="tabela-vazia">
                Nenhum certificado encontrado para esses filtros.
              </p>
            ) : (
              certificadosFiltrados.map((c) => (
                <div className="tabela-linha" key={c.id}>
                  <div className="celula-evento">
                    <div className="evento-imagem">
                      {c.imagem ? (
                        <img src={c.imagem} alt="" />
                      ) : (
                        <ImageIcon size={26} />
                      )}
                    </div>
                    <div>
                      <strong>{c.titulo}</strong>
                      <span>{c.local}</span>
                    </div>
                  </div>

                  <div className="celula-data">
                    <Calendar size={20} />
                    <span>{c.dataExibicao}</span>
                  </div>

                  <div className="celula-carga">{c.cargaHoraria}h</div>

                  <div className="celula-status">
                    <span
                      className={`status status-${c.status
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "-")}`}
                    >
                      {c.status}
                    </span>
                  </div>

                  <div className="celula-acoes">
                    {c.status === "Disponível" ? (
                      <button
                        type="button"
                        className="botao-baixar"
                        onClick={() => handleBaixar(c)}
                      >
                        Baixar
                        <Download size={16} />
                      </button>
                    ) : (
                      <span className="acao-indisponivel" aria-label="Sem ações">
                        —
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Certificados;