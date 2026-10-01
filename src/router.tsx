import {Route, Routes, BrowserRouter,} from "react-router-dom";

import Home from "./pages/components/Home";
import Cadastro from "./pages/components/Cadastro";
import CadEmail from "./pages/components/CadEmail";
import Conc from "./pages/components/Conc";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cadastro" element={<Cadastro />} />
  <Route path="/cadastro/email" element={<CadEmail />} />
  <Route path="/cadastro/conc" element={<Conc />} />
</Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;