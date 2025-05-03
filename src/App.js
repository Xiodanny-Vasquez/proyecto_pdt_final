import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Stories from "./Pages/Stories/Stories.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <Router>
      <Navbar /> {/* Siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/historias" element={<Stories />} />
        <Route path="/sobre nosotros" element={<About />} />
        <Route path="/carrito" element={<Shopping />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <HorrorStories />
      <Footer /> {/* Siempre visible */}
    </Router>
  );
}

export default App;
