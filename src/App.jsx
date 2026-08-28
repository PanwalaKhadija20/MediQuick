import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Cart,
  Checkout,
  Offers,
<<<<<<< HEAD
  Login
=======
  Footer
>>>>>>> 0a598cf3dc18f566124bc75cdf06ff588ea7db8e
} from "./component";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME / INDEX ================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= CATEGORIES ================= */}
        <Route
          path="/categories"
          element={
            <>
              <Navbar />
              <Categories />
              <Footer />
            </>
          }
        />

        {/* ================= TRACK ORDER ================= */}
        <Route
          path="/track-order"
          element={
            <>
              <Navbar />
              <TrackOrder />
              <Footer />
            </>
          }
        />

        {/* ================= CART ================= */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />

        {/* ================= CHECKOUT ================= */}
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />

        {/* ================= OFFERS ================= */}
        <Route
          path="/offers"
          element={
            <>
              <Navbar />
              <Offers />
              <Footer />
            </>
          }
        />
        {/* Login */}
        <Route
          path="/login"
          element={
            <>
            <Navbar />
            <Login />
            <Footer />
            </>
        }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;