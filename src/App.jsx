import Navbar from "./Navbar";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <img src={heroImg} alt="Hero" className="hero-img" />

        <h1>Welcome </h1>

        <p> React.</p>
      </div>
    </>
  );
}

export default App;