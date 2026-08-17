import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CategorySection from "./component/CategorySection";
import OfferBanner from "./component/OfferBanner";
import PopularMedicines from "./component/PopularMedicines";
import TopPharmacies from "./component/TopPharmacies";
import WhyChoose from "./component/WhyChoose";
import CustomerReviews from "./component/CustomerReviews";
import Footer from "./component/Footer";

function App() {
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

export default App;