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

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Categories Page */}
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
        {/* Track Order Page */}
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
      </Routes>

    </BrowserRouter>
  );
}

export default App;