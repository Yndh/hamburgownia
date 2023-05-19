import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/hamburgownia" element={<Home />} />
        <Route path="hamburgownia/product/:title" element={<Product />} />
        <Route path="hamburgownia/menu" element={<Menu />} />
        <Route path="hamburgownia/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
