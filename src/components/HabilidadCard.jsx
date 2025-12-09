const HabilidadCard = ({ tipo, contenido }) => {
  return (
    <div className="habilidades__card">
      <p className="habilidades__tipo">
        <span className="habilidades__texto-red">const </span>
        <span className="habilidades__texto-purple">{tipo} </span>
        <span className="habilidades__texto-blue">= </span>
        <span className="habilidades__texto-black">[ </span>
      </p>

      <div className="habilidades__contenido">
        {contenido.map((individual, index) => (
          <p key={index} className="habilidades__texto">
            <span className="habilidades__texto-brown">
              {individual}
              {index + 1 !== contenido.length && ","}
            </span>
          </p>
        ))}
      </div>
        <p className="habilidades__texto habilidades__texto-black">];</p>
    </div>
  );
};

export default HabilidadCard;
