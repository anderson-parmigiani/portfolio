const ProyectoCard = ({ nombre, urlPag, titulo, descripcion, lenguajes, urlGit }) => {

  const projectClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: document.getElementById("#"),
      behavior: "smooth",
    });
  };

  return (
    <div className="proyecto">
      <a
        className={`proyecto__${nombre}`}
        href={urlPag}
        {...(nombre === "portafolio" ? { onClick: projectClick } : { target: "_blank"})}
      >
        <div className={`proyecto__imagen-${nombre}`}></div>

        <div className="proyecto__contenido">
          <h3 className={`proyecto__titulo-${nombre}`}>{titulo}</h3>
          <p className="proyecto__descripcion">{descripcion}</p>
          <div className="proyecto__lenguajes">
            {lenguajes.map((lenguaje, index) => (
              <span key={index} className="proyecto__lenguaje">{lenguaje}</span>
            ))}
          </div>
          <nav className="proyecto__nav">
            <a
              className="proyecto__enlace"
              href={urlGit}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
            >
              <span className="proyecto__accesible">Github</span>
            </a>
          </nav>
        </div>
      </a>
    </div>
  );
};

export default ProyectoCard;