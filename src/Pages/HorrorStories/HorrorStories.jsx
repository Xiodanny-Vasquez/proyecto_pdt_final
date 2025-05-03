import React, { useState } from "react";
import "./HorrorStories.css";

const HorrorStories = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Aquí va la lógica para añadir al carrito
    alert(`Agregaste ${quantity} unidad(es) al carrito`);
  };

  return (
    <div className="story-container">
      <header className="story-header">
        <h1>Historias de Terror</h1>
        <h2 className="story-subtitle">Las Herederas de la Oscuridad</h2>
      </header>

      <div className="story-image">
        <img src="/Assets/3brujas.jpg" alt="Las Herederas" />
      </div>

      <div className="story-text">
        <p>Cada noche de luna llena, los aldeanos evitaban pasar cerca del cementerio viejo. No por superstición, sino por supervivencia. Se decía que un ente oscuro —una sombra encapuchada con garras de hierro y una guadaña oxidada— descendía del cielo cuando la luna alcanzaba su punto más alto.
Una noche, Julián, un joven escéptico y curioso, decidió entrar al cementerio con su cámara. Quería pruebas, likes, fama. Al llegar, el ambiente cambió: el aire era espeso, las velas se encendian solas y parpadeaban sin viento, y un hedor putrefacto lo envolvió.
Avanzó entre lápidas rotas y cruces inclinadas, hasta encontrar dos cuerpos envueltos en sudarios, medio descompuestos, tirados frente a una linterna encendida. Uno de los cadáveres... respiraba.
Julián se acercó con cautela, pero al dar el primer paso, un murmullo gutural surgió del suelo. Las lápidas comenzaron a temblar. Entonces la luna se ocultó tras una nube, y un grito inhumano desgarró la noche. Desde el cielo, como caído del infierno, descendió él.
La criatura no tocó el suelo. Flotaba. Su manto se arrastraba como si tuviera vida propia, y su cara... no tenía ojos, solo un agujero negro que absorbía la luz. Julián quiso correr, pero sus piernas no respondían. El ente lo miró —o eso sintió— y con un alarido, le cortó el alma. No el cuerpo. El alma.
A la mañana siguiente, los aldeanos encontraron la cámara de Julián grabando en bucle… pero en el video solo se veía la linterna encendida y, al fondo, una tercera figura envuelta en sudarios.
Desde entonces, en cada luna llena, tres cuerpos reposan frente a la linterna. Y la criatura... siempre vuelve por uno más.
</p>
      </div>

      <div className="story-callout">
        <p>
          Esto fue solo el comienzo... ¡Llévate el libro con las 10 historias más oscuras del <span>“Portal del Terror”</span>!
        </p>
      </div>

      <div className="story-purchase">
        <div className="price">
          <strong>Unidad</strong>
          <p>$13.000</p>
        </div>
        <div className="quantity">
          <strong>Cantidad:</strong>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Añadir al carrito 🛒
        </button>
      </div>

    </div>
  );
};

export default HorrorStories;
