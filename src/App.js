import React from "react";
import Contact from "./Pages/Contact/Contact.jsx";
import Stories from "./Pages/Stories/Stories.jsx"; // Asegúrate de que el nombre esté en mayúscula
import Footer from "./Pages/Footer/Footer.jsx"; // Asegúrate de que el nombre esté en mayúscula
import HorrorStories from "./Pages/HorrorStories/HorrorStories.jsx";

function App() {
  return (
    <div>
      <Contact />
      <Stories/>
      <HorrorStories />
      <Footer /> {/* Aquí se agrega el footer */}
    </div>
  );
}

export default App;
