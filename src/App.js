import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Catalog from "./components/Pages/CatalogPage/CatalogPage";
import Favorite from "./components/Pages/FavoritePage/FavoritePage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
