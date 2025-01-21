import React from 'react';  // Importa React para crear el componente de pie de página
import './Footer.css';  // Importa los estilos CSS específicos para el pie de página
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  // Importa los íconos de redes sociales desde react-icons/fa

// Componente funcional Footer
function Footer() {
  return (
    // Elemento <footer> que contiene todo el pie de página
    <footer className="footer">
      {/* Contenedor principal que agrupa todo el contenido del pie de página */}
      <div className="footer-content">
        
        {/* Imagen del logo del sitio */}
        <img src="/logopdt.jpg" alt="Logo Portal del Terror" className="footer-logo" />

        {/* Texto de copyright que indica que la página es de 2025 */}
        <p>&copy; 2025 Página Portal del Terror, todos los derechos reservados.</p>

        {/* Sección de enlaces legales */}
        <div className="footer-links">
          {/* Enlace a la página de política de privacidad */}
          <a href="/privacy-policy" className="footer-link">Política de Privacidad</a>
          
          {/* Enlace a la página de términos y condiciones */}
          <a href="/terms" className="footer-link">Términos y Condiciones</a>
          
          {/* Enlace a la página de contacto */}
          <a href="/contact" className="footer-link">Contacto</a>
        </div>

        {/* Sección de enlaces de redes sociales */}
        <div className="footer-social">
          {/* Enlace a la página de Facebook con su respectivo ícono */}
          <a href="https://facebook.com" className="social-icon">
            <FaFacebook size={30} /> {/* Ícono de Facebook con tamaño de 30px */}
          </a>
          
          {/* Enlace a la página de Twitter con su respectivo ícono */}
          <a href="https://twitter.com" className="social-icon">
            <FaTwitter size={30} /> {/* Ícono de Twitter con tamaño de 30px */}
          </a>
          
          {/* Enlace a la página de Instagram con su respectivo ícono */}
          <a href="https://instagram.com" className="social-icon">
            <FaInstagram size={30} /> {/* Ícono de Instagram con tamaño de 30px */}
          </a>
        </div>

        {/* Enlace para volver al principio de la página */}
        <a href="#top" className="scroll-top">
          &#8593; Subir {/* Ícono de flecha hacia arriba para indicar que al hacer clic vuelve al principio */}
        </a>
      </div>
    </footer>
  );
}

export default Footer;  // Exporta el componente Footer para que pueda ser utilizado en otras partes de la aplicación
