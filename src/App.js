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
        <Route exact path="/" element={<Home />} />
        <Route path="product/:title" element={<Product />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
