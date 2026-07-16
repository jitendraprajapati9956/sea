import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Courses from "./components/Courses";
import About from "./components/About";
import Featured from "./components/Featured";
import StatsCta from "./components/StatsCta";
import Enroll from "./components/Enroll";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Courses /> */}
      <About />
      <Featured />
      <StatsCta />
      {/* <Enroll /> */}
      <Footer />
    </>
    
  );
}

export default App;
