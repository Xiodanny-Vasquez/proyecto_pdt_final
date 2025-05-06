import { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  '/Assets/casaCementerio.jpg',
  '/Assets/portal.jpg',
  '/Assets/diablo.jpg',
  '/Assets/Ñ.jpg',
  '/Assets/U.jpg',
  '/Assets/M.png',
  '/Assets/bb.png',
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prevSlide}>‹</button>
      <div className="carousel-slide-wrapper">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`carousel-image ${i === index ? 'active' : ''}`}
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>›</button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};


// === Carrusel Cover Flow 3D (tipo imagen que enviaste) ===
export const Carousel1 = () => {
  const cards = [
    { title: 'El Silente', image: '/Assets/Y.jpg', content:'En la mansión olvidada de las colinas, una joven médium invoca sin saberlo a "El Silente", un demonio ancestral que se alimenta del alma de quienes osan llamarlo.  Las sombras cobran vida, y el ritual jamás se detiene… incluso después de la muerte.',},
    { title: 'Lirak', image: '/Assets/K.jpeg', content:'Cada noche de luna roja, Lirak despierta en el cementerio de los condenados, afilando la hoja con la sangre de su próxima víctima. No busca venganza, sino arte: su lienzo favorito es la carne humana.', },
    { title: 'El Devorador', image: '/Assets/CC.png', content:'Desde el abismo se alzó un demonio que no olvida: el Devorador de Lamentos. Quien ose pronunciar su nombre frente a su tumba, será cazado, no por venganza… sino para unirse a su legión de sombras.', },
    { title: 'Cripta de Hollowridge', image: '/Assets/cementerio.jpg', content:'La vieja capilla de Hollowridge nunca fue abandonada… solo sellada. Cada noche de luna llena, un canto gutural emana desde las criptas, llamando a los muertos a marchar. Y quien lo escuche, ya no pertenece al mundo de los vivos.', },
    { title: 'Demonio Infernal', image: '/Assets/C.jpeg', content:'Una criatura ancestral con ojos como llamas y un aura de sangre maldita acecha las sombras. Su presencia desata caos y horror, dejando un rastro de muerte y desesperación a su paso. Cada mirada que captura condena a su víctima a un destino de sufrimiento eterno.', },
  ];

  const [current, setCurrent] = useState(2);

  const prevSlide = () => {
    setCurrent((current - 1 + cards.length) % cards.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="coverflow-carousel">
      <button className="nav left" onClick={prevSlide}>‹</button>
      <div className="slides">
        {cards.map((card, i) => {
          const offset = i - current;
          let className = 'slide';
          if (offset === 0) className += ' active';
          else if (offset === -1 || offset === cards.length - 1) className += ' left';
          else if (offset === 1 || offset === -(cards.length - 1)) className += ' right';
          else className += ' hidden';

          return (
            <div key={i} className={className}>
             <img src={card.image} alt={card.title} className="carousel1-img" />
             <h3>{card.title}</h3>
             <p>{card.content}</p>  
            </div>
          );
        })}
      </div>
      <button className="nav right" onClick={nextSlide}>›</button>
    </div>
  );
};
