import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CategorySection from "./component/CategorySection";
import OfferBanner from "./component/OfferBanner";
import PopularMedicines from "./component/PopularMedicines";
import TopPharmacies from "./component/TopPharmacies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
       <OfferBanner />
       <PopularMedicines />
      <TopPharmacies />
       
    </>
  );
}

export default App;