import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <section className="about-header">
                <h1 className="about-title">Sobre<br />Nosotros</h1>
                <p className="about-subtext">conoce más sobre este macabro rincón</p>
            </section>

            <section className="about-intro">
                <p className="about-description">
                    Bienvenido a <strong>Portal del Terror</strong>, un espacio dedicado a las historias más oscuras y profundas
                    que estremecerán hasta la médula. Nuestro propósito es ofrecer relatos que te mantendrán al borde
                    del asiento, mientras exploras los rincones más perturbadores de la mente humana.
                </p>

                <img src="/Assets/horrorportal.jpg" alt="Logo Terror" className="about-logo" />

                <p className="about-description">
                    Cada historia disponible en nuestro portal ha sido cuidadosamente seleccionada para brindarte una experiencia
                    única. Aquí no solo leerás... vivirás el miedo. Nuestro equipo trabaja con pasión para asegurarse de que cada historia
                    te haga sentir algo inolvidable.
                </p>

                <blockquote className="about-quote">
                    “Descubre en las tinieblas no solo el miedo,<br />
                    sino la verdad brutal de nuestra alma desbordada por el horror.”
                </blockquote>
            </section>

            <section className="about-team">
                <h2 className="team-title">TEAM DEVELOPER</h2>
                <div className="team-members">
                    <div className="member">Xiodanny</div>
                    <div className="member">Alejogto</div>
                    <div className="member">Andrea</div>
                </div>
                <p className="team-note">
                    Juntos han dado vida a esta pesadilla interactiva con la ilusión de que quienes se atrevan a explorarla no salgan ilesos.
                </p>
            </section>

            <footer className="about-footer">
                <div>PORTAL DEL TERROR</div>
                <div>Teléfono: privativo</div>
                <div>Correo: direccioncorreo@portalditerror.com</div>
            </footer>
        </div>
    );
};

export default About;
