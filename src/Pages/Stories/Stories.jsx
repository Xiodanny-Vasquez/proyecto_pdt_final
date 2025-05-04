import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Stories.css";

// Configuración del carrusel
const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    }
  ]
};

// Datos por categoría
const terror = [
  { title: "El Cementerio", slug: "el-cementerio", img: "/Assets/el-cementerio.jpg" },
  { title: "Lucifer", slug: "lucifer", img: "/Assets/lucifer.jpg" },
  { title: "Pacto Oscuro", slug: "pacto-oscuro", img: "/Assets/pacto-oscuro.jpg" },
  { title: "El Cementerio", slug: "el-cementerio", img: "/Assets/el-cementerio.jpg" },
  { title: "El Cementerio", slug: "el-cementerio", img: "/Assets/el-cementerio.jpg" },
  { title: "El Cementerio", slug: "el-cementerio", img: "/Assets/el-cementerio.jpg" },
];

const fantasmas = [
  { title: "Almas Errantes", slug: "almas-errantes", img: "/Assets/almas.jpg" },
  { title: "Voces del Más Allá", slug: "voces-del-mas-alla", img: "/Assets/voces.jpg" },
  { title: "La Niña Blanca", slug: "la-nina-blanca", img: "/Assets/nina-blanca.jpg" },
];

const urbanas = [
  { title: "El Hombre en Llamas", slug: "hombre-en-llamas", img: "/Assets/hombre en llamas.jpg" },
  { title: "Slenderman", slug: "slenderman", img: "/Assets/slenderman.jpg" },
  { title: "El Cura sin Cabeza", slug: "cura-sin-cabeza", img: "/Assets/cura-sin-cabeza.jpg" },
  { title: "El Hombre en Llamas", slug: "hombre-en-llamas", img: "/Assets/hombre en llamas.jpg" },
  { title: "El Hombre en Llamas", slug: "hombre-en-llamas", img: "/Assets/hombre en llamas.jpg" },
];

// Sección reutilizable
const Section = ({ title, stories }) => (
  <section className="story-section">
    <h2 className="section-title">{title}</h2>
    <Slider {...sliderSettings}>
      {stories.map(({ slug, title, img }) => (
        <div key={slug} className="story-card">
          <Link to={`/historia/${slug}`}>
            <img src={img} alt={title} />
            <span className="story-subtitle">{title}</span>
          </Link>
        </div>
      ))}
    </Slider>
  </section>
);

// Componente principal
const Stories = () => {
  return (
    <div className="stories-wrapper">
      {/* Imagen de bienvenida tipo carrusel */}
      <section className="stories-hero">
        <img src="/Assets/hombre en llamas.jpg" alt="Carrusel Terror" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Historias de Terror</h1>
          <p className="hero-subtext">¿Te atreves a descubrir lo que hay más allá?</p>
        </div>
      </section>

      {/* Buscador (solo visual por ahora) */}
      <div className="search-box">
        <input type="text" placeholder="Buscar historia..." />
      </div>

      {/* Secciones */}
      <Section title="Historias de Terror" stories={terror} />
      <Section title="Historias de Fantasmas" stories={fantasmas} />
      <Section title="Leyendas urbanas" stories={urbanas} />
    </div>
  );
};

export default Stories;
