import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import ShopNow from "./pages/ShopNowWomen";
import ShoppingBag from "./pages/ShoppingBag";
import Checkout from "./pages/Checkout";
import ShopNowMen from "./pages/ShopNowMen";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/shopnowwomen" element={<ShopNow />} />
        <Route path="/shopnowmen" element={<ShopNowMen />} />
        <Route path="/shoppingBag" element={<ShoppingBag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
