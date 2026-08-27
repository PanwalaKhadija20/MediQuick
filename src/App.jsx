import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Hero,
  CategorySection,
  OfferBanner,
  PopularMedicines,
  TopPharmacies,
  WhyChoose,
  CustomerReviews,
  Footer,
  Cart,
  Checkout,
  Offers
} from "./component";

import Categories from "./pages/Categories";
import TrackOrder from "./pages/TrackOrder";


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


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Categories */}
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

        {/* Track Order */}
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

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />

        {/* Offers */}
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