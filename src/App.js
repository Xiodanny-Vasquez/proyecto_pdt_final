import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Stories from "./Pages/Stories/Stories.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import About from "./Pages/About/About.jsx";
import Shopping from "./Pages/Shopping/Shopping.jsx";
import Pago from "./Pages/Shopping/Pago.jsx";
import Confirmacion from "./Pages/Shopping/Confirmacion.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Login/Register.jsx";
import StoryDetails from "./pagina_de_historias/storyDetails.jsx"; // ← NUEVA RUTA DINÁMICA

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/historias" element={<Stories />} />
        <Route path="/historia/:slug" element={<StoryDetails />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/carrito" element={<Shopping />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
