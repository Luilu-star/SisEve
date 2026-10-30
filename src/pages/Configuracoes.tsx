import Header from "../components/Header";
import {UserRound, Bell, Globe, ShieldCheck, CircleQuestionMark, ChevronDown} from "lucide-react";
import "../styles/Configuracoes.css";
function Configuracoes() {
  return (
    <main className="configuracoes-page">
    <Header />
    <section className="configuracoes">
        <span>Configurações</span>
        <div className="opcoes">
            <div className="opcao">
                <UserRound/>
                <span>Perfil</span>
                <p>Atualize seus dados pessoais, foto de perfil e informações de contato.</p>
                <ChevronDown />
            </div>
            <div className="opcao">
                <Bell/>
                <span>Notificações</span>
                <p>Escolha quando e como deseja ser notificado sobre novidades, inscrições e lembretes.</p>
                <ChevronDown />
            </div>
            <div className="opcao">
                <ShieldCheck />
                <span>Segurança</span>
                <p>Altere sua senha, ative a autenticação em dois fatores e gerencie os dispositivos conectados.</p>
                <ChevronDown />
            </div>
            <div className="opcao">
                <Globe />
                <span>Idioma e Região</span>
                <p>Defina o idioma da interface e o formato da data e hora que você prefere.</p>
                <ChevronDown />
            </div>
            <div className="opcao">
                <CircleQuestionMark />
                <span>Ajuda e Suporte</span>
                <p>Acesse nossa central de ajuda, tire dúvidas ou entre em contato com o suporte.</p>
                <ChevronDown />
            </div>
        </div>
    </section>
    </main>
  );
}
export default Configuracoes;