import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Catalog from "./components/Pages/CatalogPage/CatalogPage";
import Favourites from "./components/Pages/Favourites/Favourites";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
