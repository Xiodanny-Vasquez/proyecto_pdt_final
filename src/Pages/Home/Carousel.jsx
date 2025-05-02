import { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  '/Assets/3brujas.jpg',
  '/Assets/cementerio.jpg',
  '/Assets/diablo.jpg',
  '/Assets/Y.jpg',
  '/Assets/1.jpg',
  '/Assets/4.jpg',
  '/Assets/5.jpg',
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
    { title: 'titulo', content: 'brujas', image: '/Assets/Y.jpg' },
    { title: 'Slide 2', content: 'Facere magni sapiente veniam, repellendus.', image: '/Assets/Y.jpg' },
    { title: 'Slide 3', content: 'Expedita labore voluptas in saepe.', image: '/Assets/Y.jpg' },
    { title: 'Slide 4', content: 'Beatae voluptatem quasi accusamus.', image: '/Assets/Y.jpg' },
    { title: 'Slide 5', content: 'Voluptas laborum excepturi possimus nam.', image: '/Assets/Y.jpg' },
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
