// src/pages/Home.jsx

import React from 'react';
import './Home.css';
import { Carousel, Carousel1 } from './Carousel'; // Asegúrate de tener este componente creado

const Home = () => {
  return (
    <div>
      {/* Hero principal */}
      <section className="hero-section">
        <h2>PORTAL DEL TERROR</h2>
        <p>Relatos que te helarán la sangre… ¿te atreves a entrar?</p>
        <p className="subtext">No apto para almas Sensibles 💀</p>
        <Carousel />
      </section>

      {/* Promoción con imágenes laterales y botón de suscripción */}
      <section className="promo-section">
        <img src="/Assets/3brujas.jpg" alt="" className="promo-img" />

        <div className="promo-text">
          <p>
            “Cada historia es un susurro desde la oscuridad... 
            y ya es demasiado tarde para taparte los oídos.”
          </p>
          <button>SUSCRÍBETE</button>
        </div>

        <img src="/Assets/monjas1.jpg" alt="MIEDO" className="promo-img" />
      </section>

      {/* Carrusel de historias destacadas */}
      <section className="carousel-section">
        <h3>¿Qué clase de horror quieres vivir hoy?</h3>
        <Carousel1 />
      </section>

      {/* Texto final oscuro y misterioso */}
      <section className="final-text">
        “"Cada historia en nuestra colección es una puerta entreabierta
         hacia lo desconocido. Sumérgete en relatos donde cada palabra 
         está empapada de oscuridad, cada línea susurra secretos prohibidos, 
         y cada final deja una marca que jamás podrás borrar. 
         Porque aquí, las historias no se cuentan... se sufren."”
      </section>

    </div>
  );
};

export default Home;
