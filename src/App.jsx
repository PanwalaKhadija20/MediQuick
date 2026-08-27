import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CategorySection from "./component/CategorySection";
import OfferBanner from "./component/OfferBanner";
import PopularMedicines from "./component/PopularMedicines";
import TopPharmacies from "./component/TopPharmacies";
import WhyChoose from "./component/WhyChoose";
import CustomerReviews from "./component/CustomerReviews";
import Footer from "./component/Footer";

import Categories from "./pages/Categories";
import TrackOrder from "./pages/TrackOrder";

import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Offers from "./component/Offers";


// ================= HOME PAGE =================

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <CategorySection />

      <OfferBanner />

      <PopularMedicines />

      <TopPharmacies />

      <WhyChoose />

      <CustomerReviews />

      <Footer />
    </>
  );
}


// ================= APP =================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME PAGE ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= CATEGORIES PAGE ================= */}

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


        {/* ================= TRACK ORDER PAGE ================= */}

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


        {/* ================= CART PAGE ================= */}

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />


        {/* ================= CHECKOUT PAGE ================= */}

        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />


        {/* ================= OFFERS PAGE ================= */}

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;