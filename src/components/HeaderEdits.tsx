import { useEffect, useState } from "react";
import {Menu, UserRound, Bell, Globe, ShieldCheck, CircleQuestionMark, ChevronLeft} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/Global.css";


// Rotas do menu lateral
const itensMenu = [
  { rotulo: "Perfil", Icone: UserRound, rota: "/EditPerfil" },
  { rotulo: "Notificações", Icone: Bell, rota: "/" },
  { rotulo: "Segurança", Icone: ShieldCheck, rota: "/" },
  { rotulo: "Idioma e Região", Icone: Globe, rota: "/" },
  { rotulo: "Ajuda e Suporte", Icone: CircleQuestionMark, rota: "/" }
];

function HeaderConfig() {
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
        </div>

        <nav>
          {itensMenu.map(({ rotulo, Icone, rota }) => (
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

        </nav>

        <button className="menu-item pequeno inicio" onClick={() => irPara("/principal")}>
          <ChevronLeft />
          <span>Início</span>
        </button>
      </aside>

      {/* HEADER */}
      <header className="header-edit">
        <div className="header-grupo">
          <button className="botao-menu" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
            <Menu />
          </button>
        </div>
        <div className="edit-topo">
          <h1>Perfil</h1>
          <p className="subtitulo">
            Atualize seus dados pessoais, foto de perfil e informações de contato.
          </p>
        </div>
      </header>
    </>
  );
}

export default HeaderConfig;