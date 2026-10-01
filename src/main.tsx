import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import Cadastro from "./pages/components/Cadastro";
import CadEmail from "./pages/components/CadEmail";
import Conc from "./pages/components/Conc";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/email" element={<CadEmail />} />
        <Route path="/cadastro/conc" element={<Conc />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);