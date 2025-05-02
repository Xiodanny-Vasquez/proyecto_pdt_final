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
        <p className="subtext">No apto para almas LIGTHSENSITIVE 💀</p>
        <Carousel />
      </section>

      {/* Promoción con imágenes laterales y botón de suscripción */}
      <section className="promo-section grid grid-cols-1 md:grid-cols-3">
        <img src="/img/promo1.jpg" alt="Mujer sombra" />
        
        <div className="promo-text">
          <p>
            “Cada historia es un tormento donde lo escondido… 
            se transforma en terror palpable. Suscríbete para
            no perderte ningún capítulo.”
          </p>
          <button>SUSCRÍBETE</button>
        </div>

        <img src="/img/promo2.jpg" alt="Monja terrorífica" />
      </section>

      {/* Carrusel de historias destacadas */}
      <section className="carousel-section">
        <h3>¿Qué clase de horror quieres vivir hoy?</h3>
        <Carousel1 />
      </section>

      {/* Texto final oscuro y misterioso */}
      <section className="final-text">
        “Cada historia en nuestra colección es una puerta 
        encantadora hacia lo inexplicable. Sumérgete leyendo 
        donde cada palabra deja una cicatriz, donde cada página 
        grita por justicia fantasmal, y los ecos continúan mucho 
        después de que hayas cerrado el portal…”
      </section>
    </div>
  );
};

export default Home;
