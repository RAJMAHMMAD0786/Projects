import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    
    {/* Import the Navbar */}
      <Navbar />

      {/* Routes yek container hota hai jaha pe sare Routes likha jata hai, jaise ki aap dekh rahe hai niche  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Import the Footer */}
      <Footer />

      {/* Ye poori application ko routing ki power deta hai. Simple Language mai BrowserRouter URL ko monitor karta hai. and batata hai ki kaun sa page render hoga and kaun sa page render nahi hoga. */}
    </BrowserRouter>
  );
}

export default App;


// Route---> ye rule banata hai , ki kaun kaise jayega etc.