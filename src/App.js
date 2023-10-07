import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Favourites from "./components/Pages/Favourites/Favourites";
import Home from "./components/Pages/Home/Home";
import Catalog from "./components/Pages/Catalog/Catalog";
// import LoaderSpiner from "./components/LoaderSpiner/LoaderSpiner";

function App() {
  return (
    <>
      {/* <LoaderSpiner /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
