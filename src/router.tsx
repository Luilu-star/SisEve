import {Route, Routes, BrowserRouter,} from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;