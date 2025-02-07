import React from "react";
import "./Stories.css";
import { motion } from "framer-motion";

const Story = ({ title, image, description }) => {
  return (
    <motion.div className="Stories-card" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="Stories-image" />
      <div className="Stories-content">
        <h2 className="Stories-title">{title}</h2>
        <p className="Stories-text">{description}</p>
        <button className="Stories-button">Leer más</button>
      </div>
    </motion.div>
  );
};

const StoriesList = () => {
  const stories = [
    {
      title: "El Susurro en la Oscuridad",
      image: "/images/horror1.jpg",
      description: "Una historia que te hará dudar si realmente estás solo...",
    },
    {
      title: "Sombras en el Pasillo",
      image: "/images/horror2.jpg",
      description: "A veces, lo que creemos ver puede ser más real de lo que imaginamos...",
    },
  ];

  return (
    <div className="horror-container">
      <h1 className="horror-heading">Historias de Terror</h1>
      <div className="horror-grid">
        {stories.map((story, index) => (
          <Story key={index} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
