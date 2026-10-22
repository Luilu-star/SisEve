import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Redefinir from "./pages/Redefinir";
import Cadastro from "./pages/Cadastro";
import CadEmail from "./pages/CadEmail";
import Verificacao from "./pages/Verificacao";
import Conc from "./pages/Conc";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CodRedefine from "./pages/CodRedefine";
import Principal from "./pages/Principal";
import Perfil from "./pages/Perfil";
import Espera from "./pages/Espera";
import Inscricoes from "./pages/Inscricoes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redefinicao" element={<Redefinir />} />
        <Route path="/redefinicao/verificacao" element={<CodRedefine />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/email" element={<CadEmail />} />
        <Route path="/cadastro/verificacao" element={<Verificacao />} />
        <Route path="/cadastro/conc" element={<Conc />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/espera" element={<Espera />} />
        <Route path="/inscricoes" element={<Inscricoes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);