import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Cart,
  Checkout,
  Offers,
  Login,
  Footer
} from "./component";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import TrackOrder from "./pages/TrackOrder";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}
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


        {/* ================= LOGIN ================= */}
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