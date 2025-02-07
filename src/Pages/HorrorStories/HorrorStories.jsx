import React from "react";
import "./HorrorStories.css"; 
const HorrorStories = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="title">Las Herederas de la Oscuridad</h1>
      </header>

      <main className="content">
        <div className="image-container">
      <img src="/Assets/3brujas.jpg" alt="las herederas" />
        </div>
        <p className="paragraph">
          La historia de las Herederas de la Oscuridad comienza con un misterioso linaje que ha sobrevivido durante siglos en las sombras. Estas mujeres, dotadas de poderes antiguos y conocimientos prohibidos, han mantenido un delicado equilibrio entre la luz y la oscuridad.
        </p>
        <p className="paragraph">
          Cada generación ha enfrentado sus propios desafíos, luchando contra fuerzas que buscan destruir el legado que protegen. Desde los bosques encantados hasta las ciudades modernas, las Herederas han dejado su huella, siempre ocultas a simple vista.
        </p>
        <h2 className="chapter-title">Capítulo 1: Despertar</h2>
        <p className="paragraph">
          En la penumbra de una antigua mansión, Amelia descubrió un libro que parecía estar vivo. Al abrirlo, las palabras se transformaron en sombras danzantes que le susurraban secretos olvidados...
        </p>
        <h2 className="chapter-title">Capítulo 2: La Profecía</h2>
        <p className="paragraph">
          Mientras el mundo parecía seguir su curso habitual, las Herederas sabían que el tiempo se agotaba. Una antigua profecía había comenzado a cumplirse, y el destino de todos dependía de sus decisiones.
        </p>
      </main>


    </div>
  );
};

export default HorrorStories;
