import { useState } from "react";

const Header = () => {
  const [copy, setCopy] = useState(false);
  let copyTimer;

  const copiar = () => {
    clearTimeout(copyTimer);
    const inputText = document.querySelector(".header__email-texto");

    navigator.clipboard
      .writeText(inputText.value)
      .then(() => {
        setCopy(true);

        copyTimer = setTimeout(() => {
          setCopy(false);
        }, 1500);
      })
      .catch((e) => {
        setCopy(false);
        console.log("error al copiar: ", e);
      });
  };

  return (
    <header className="header">
      <div className="header__barra header__contenedor">
        <h1 className="header__heading">
          <span className="header__span">Front-End Developer</span>
          Anderson Parmigiani
        </h1>

        <form className="header__email">
          <div className="header__email-contenido">
            <input
              className="header__email-texto"
              type="text"
              value="anderson7804@gmail.com"
              readOnly
            />
            <button
              className="header__email-copiar"
              type="button"
              onClick={copiar}
            ></button>
            {copy && <span className="header__email-tooltip">¡Copiado!</span>}
          </div>
        </form>

        <nav className="nav">
          <a
            className="nav__enlace"
            href="/portfolio/assets/CV_Anderson_Parmigiani.pdf"
            target="_blank"
          >
            CV
          </a>
          <a
            className="nav__enlace"
            href="http://linkedin.com/in/anderson-parmigiani"
            target="_blank"
          >
            <span className="nav__accesible">LinkedIn</span>
          </a>
          <a
            className="nav__enlace"
            href="https://github.com/anderson-parmigiani"
            target="_blank"
          >
            <span className="nav__accesible">Github</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
