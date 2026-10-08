import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import Redefinir from "./pages/components/Redefinir";
import Cadastro from "./pages/components/Cadastro";
import CadEmail from "./pages/components/CadEmail";
import Verificacao from "./pages/components/Verificacao";
import Conc from "./pages/components/Conc";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CodRedefine from "./pages/components/CodRedefine";
import Principal from "./pages/components/Principal";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);