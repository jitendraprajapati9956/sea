import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Featured from "./components/Featured";
import StatsCta from "./components/StatsCta";
import Footer from "./components/Footer";

import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Featured />
      <StatsCta />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;