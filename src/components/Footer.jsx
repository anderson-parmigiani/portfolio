const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <div className="footer__contenedor">
        { language === 'en' ?  
          <p className="footer__copyright">
            © Anderson Parmigiani (ParanDev) {new Date().getFullYear()}. All rights reserved.
          </p>
          :
          <p className="footer__copyright">
            © Anderson Parmigiani (ParanDev) {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        }
      </div>
    </footer>
  );
};

export default Footer;
