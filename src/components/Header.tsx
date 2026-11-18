import { useEffect, useState } from "react";
import {Menu, Search, Bell, UserRound, House, CalendarClock, CircleCheckBig, FileText, Settings, LogOut} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/Global.css";
import IFCE from "../assets/IFCE.webp";

// Rotas do menu lateral
const itensMenu = [
  { rotulo: "Início", Icone: House, rota: "/principal" },
  { rotulo: "Minhas Inscrições", Icone: CircleCheckBig, rota: "/Inscricoes" },
  { rotulo: "Listas de espera", Icone: CalendarClock, rota: "/Espera" },
  { rotulo: "Meus Certificados", Icone: FileText, rota: "/Certificados" }
];

// Props opcionais: só a tela que quiser usar a pesquisa do header precisa passá-las.
// As demais telas continuam usando <Header /> exatamente como antes.
interface HeaderProps {
  busca?: string;
  onBuscaChange?: (valor: string) => void;
}

function Header({ busca, onBuscaChange }: HeaderProps) {
  // Foto salva em EditPerfil (null se ainda não existir)
  const fotoPerfil = localStorage.getItem("fotoPerfil");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (!menuAberto) return;
    const fechar = (e: KeyboardEvent) => e.key === "Escape" && setMenuAberto(false);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [menuAberto]);

  const irPara = (rota: string) => {
    setMenuAberto(false);
    navigate(rota);
  };

  return (
    <>
      {/* MENU LATERAL */}
      <div
        className={menuAberto ? "menu-fundo aberto" : "menu-fundo"}
        onClick={() => setMenuAberto(false)}
      />

      <aside className={menuAberto ? "menu-lateral aberto" : "menu-lateral"}>
        <div className="menu-topo">
          <button className="botao-menu" onClick={() => setMenuAberto(false)} aria-label="Fechar menu">
            <Menu />
          </button>
          <span className="Sis">Sis<span className="Eve">Eve</span></span>
        </div>

        <nav>
          {itensMenu.map(({ rotulo, rota, Icone }) => (
            <button
              key={rota}
              className={pathname === rota ? "menu-item ativo" : "menu-item"}
              onClick={() => irPara(rota)}
            >
              <Icone />
              <span>{rotulo}</span>
            </button>
          ))}

          <hr />

          <button className="menu-item pequeno" onClick={() => irPara("/EditPerfil")}>
            <Settings />
            <span>Configurações</span>
          </button>
        </nav>

        <button className="menu-item pequeno sair" onClick={() => irPara("/")}>
          <LogOut />
          <span>Sair</span>
        </button>
      </aside>

      {/* HEADER */}
      <header className="header">
        <div className="header-grupo">
          <button className="botao-menu" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
            <Menu />
          </button>
          <div className="logo">
            <img src={IFCE} alt="Instituto Federal Ceará" />
          </div>
        </div>

        <div className="header-grupo">
          <label className="campo-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar..."
              // Controlado só quando a tela passa onBuscaChange; senão, fica como antes
              value={onBuscaChange ? busca ?? "" : undefined}
              onChange={onBuscaChange ? (e) => onBuscaChange(e.target.value) : undefined}
            />
            <Search />
          </label>
          <button className="icone-header" aria-label="Notificações">
            <Bell />
          </button>
          <button className="perfil" onClick={() => navigate("/perfil")} aria-label="Perfil">
            {fotoPerfil ? (
              <img className="icone-usuario" src={fotoPerfil} alt="Foto de perfil" />
            ) : (
              <UserRound />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;