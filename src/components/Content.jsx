import HabilidadCard from "./HabilidadCard";
import ProyectoCard from "./ProyectoCard";

const Content = ({ language }) => {

  const textMap = {
    en: {
      presentationHeading: "About me",
      presentationTextOne: "Computer Engineer and Full Stack Developer with experience in multiple languages and technologies, I have a C1 level in English which allows me to work in international environments.",
      presentationTextTwo: "As a developer, I enjoy tackling complex problems and finding creative solutions by following best practices. I'm a team player, always open to collaborating and sharing ideas to achieve the best possible result, I easily adapt to new technologies.",
      presentationTextThree: "In my free time, you can find me working on new projects, reading up on the latest tech trends, or exploring the outdoors.",
      formationHeading: "Education",
      formationTooltip: "Two academic merits",
      formationCenterOne: "José Antonio Páez University.",
      formationTitleOne: "Computer Engineering",
      formationCenterTwo: "Lourtec.",
      formationTitleTwo: "Microsoft Technology Technician",
      formationCenterThree: "Keys.",
      formationTitleThree: "IT Support Specialist | Electronic Security | Network Installer",
      formationCenterFour: "Cisco Networking Academy | Central University of Venezuela, Maracay Campus.",
      formationTitleFour: "CCNA R&S: Introduction to Networks | Routing and Switching Essentials | Scaling Networks",
      experienceHeading: "Experience",
      experienceCompanyOne: "Plexus Tech.",
      experiencePositionOne: "Support Technician T2",
      experienceCompanyTwo: "PC Actual.",
      experiencePositionTwo: "Microcomputer Technician",
      skillsHeading: "Skills",
      skillCardOne: "languages",
      skillCardTwo: "frameworksLibs",
      skillCardThree: "tools",
      projectsHeading: "Projects",
      projectHeadingOne: "Electronic Waste Control System",
      projectDescriptionOne: "Information system under a web platform to control the disposal of electronic waste materials.",
      projectHeadingTwo: "Todo",
      projectDescriptionTwo: "App to list tasks using local storage, where CRUD operations (create, read, update, and delete) are implemented.",
      projectHeadingThree: "Portfolio",
      projectDescriptionThree: "Portfolio of my own where I show relevant professional information about me. Currently being viewed.",
      projectHeadingFour: "System Check",
      projectDescriptionFour: "Script for Windows and Linux that shows relevant system information in a graphical interface.",
      projectHeadingFive: "Local REST API",
      projectDescriptionFive: "Local REST API of movies. Allows the query of all movies registered in the JSON, query by ID or by genre, allows to add, edit and delete them.",
      projectoHeadingSix: "Web Chat",
      projectDescriptionSix: "Allows the communication of different users in real time through a web chat.",
    },
    es: {
      presentationHeading: "Sobre mí",
      presentationTextOne: "Ingeniero de Computación y Desarrollador Full Stack con experiencia en múltiples lenguajes y tecnologías, cuento con nivel C1 en inglés lo que me permite trabajar en entornos internacionales.",
      presentationTextTwo: "Como desarrollador, disfruto abordando problemas complejos y encontrando soluciones creativas siguiendo buenas prácticas. Trabajo en equipo, siempre abierto a colaborar y compartir ideas para lograr el mejor resultado posible, me adapto fácilmente a las nuevas tecnologías.",
      presentationTextThree: "En mi tiempo libre, puedes encontrarme trabajando en nuevos proyectos, leyendo sobre las últimas tendencias tecnológicas o explorando al aire libre.",
      formationHeading: "Mi formación",
      formationTooltip: "Dos méritos académicos",
      formationCenterOne: "Universidad José Antonio Páez.",
      formationTitleOne: "Ingeniería de Computación",
      formationCenterTwo: "Lourtec.",
      formationTitleTwo: "Técnico en Tecnología Microsoft",
      formationCenterThree: "Keys.",
      formationTitleThree: "Especialista en Soporte Técnico | Seguridad Electrónica | Instalador en Redes",
      formationCenterFour: "Cisco Networking Academy | Universidad Central de Venezuela, Campus Maracay.",
      formationTitleFour: "CCNA R&S: Introducción a las Redes | Principios básicos de Enrutamiento y Conmutación | Escalamiento de Redes",
      experienceHeading: "Experiencia",
      experienceCompanyOne: "Plexus Tech.",
      experiencePositionOne: "Técnico de Soporte N2",
      experienceCompanyTwo: "PC Actual.",
      experiencePositionTwo: "Técnico de Microinformática",
      skillsHeading: "Habilidades",
      skillCardOne: "lenguajes",
      skillCardTwo: "frameworksLibs",
      skillCardThree: "herramientas",
      projectsHeading: "Proyectos",
      projectHeadingOne: "Sistema de Control de Desechos",
      projectDescriptionOne: "Sistema de información bajo plataforma web para el control de la disposición de materiales de desecho electrónico.",
      projectHeadingTwo: "Todo",
      projectDescriptionTwo: "App para listar tareas usando el local storage, en donde se implementan operaciones CRUD (crear, leer, actualizar y eliminar).",
      projectHeadingThree: "Portfolio",
      projectDescriptionThree: "Portfolio de mi autoría donde muestro información profesional relevante sobre mí. Actualmente se está visualizando.",
      projectHeadingFour: "System Check",
      projectDescriptionFour: "Script para Windows y Linux que muestra información relevante del sistema en una interfaz gráfica.",
      projectHeadingFive: "Local API REST",
      projectDescriptionFive: "REST API local de películas. Permite la consulta de todas las películas registradas en el JSON, consultar por ID o por género, permite agregar, editar y eliminar las mismas.",
      projectoHeadingSix: "Web Chat",
      projectDescriptionSix: "Permite la comunicación de diferentes usuarios en tiempo real por medio de un chat web.",
    }
  };

  return (
    <>
      <main className="principal">
        <section className="presentacion presentacion__contenedor">
          <picture>
            <source
              srcSet="portfolio/assets/img/mixtas/imagen_personal.avif"
              type="image/avif"
            />
            <source
              srcSet="portfolio/assets/img/mixtas/imagen_personal.webp"
              type="image/webp"
            />
            <img
              className="presentacion__imagen"
              src="portfolio/assets/img/mixtas/imagen_personal.png"
              alt="imagen personal"
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
            />
          </picture>

          <h2 className="presentacion__heading">{textMap[language].presentationHeading}</h2>
          <p className="presentacion__texto">{textMap[language].presentationTextOne}</p>
          <p className="presentacion__texto">{textMap[language].presentationTextTwo}</p>
          <p className="presentacion__texto">{textMap[language].presentationTextThree}</p>
        </section>

        <section className="formacion formacion__contenedor">
          <a href="https://cert.efset.org/ndLLrv" target="_blank">
            <picture>
              <source
                srcSet="portfolio/assets/img/mixtas/efset_cert.avif"
                type="image/avif"
              />
              <source
                srcSet="portfolio/assets/img/mixtas/efset_cert.webp"
                type="image/webp"
              />
              <img
                className="formacion__efset"
                src="portfolio/assets/img/mixtas/efset_cert.png"
                alt="imagen certificado efset"
                width="138"
                height="138"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </a>

          <h2 className="formacion__heading">{textMap[language].formationHeading}</h2>

          <ul className="formacion__elementos">
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterOne}
                <span className="formacion__titulo">
                  {textMap[language].formationTitleOne}
                </span>
              </h3>
              <div className="formacion__reconocimientos">
                <img
                  className="formacion__estrella"
                  src="portfolio/assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="formacion__estrella"
                  src="portfolio/assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <span className="formacion__tooltip">{textMap[language].formationTooltip}</span>
              </div>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterTwo}
                <span className="formacion__titulo">
                  {textMap[language].formationTitleTwo}
                </span>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterThree}
                <span className="formacion__titulo">
                  {textMap[language].formationTitleThree}
                </span>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterFour}
                <span className="formacion__titulo">
                  {textMap[language].formationTitleFour}
                </span>
              </h3>
            </li>
          </ul>
        </section>

        <section className="experiencia">
          <div className="experiencia__contenedor">
            <h2 className="experiencia__heading">{textMap[language].experienceHeading}</h2>

            <ul className="experiencia__elementos">
              <li className="experiencia__elemento">
                <h3 className="experiencia__empresa">
                {textMap[language].experienceCompanyOne}
                  <span className="experiencia__cargo">
                  {textMap[language].experiencePositionOne}
                  </span>
                </h3>
              </li>
              <li className="experiencia__elemento">
                <h3 className="experiencia__empresa">
                  {textMap[language].experienceCompanyTwo}
                  <span className="experiencia__cargo">
                    {textMap[language].experiencePositionTwo}
                  </span>
                </h3>
              </li>
            </ul>
          </div>
          <div className="experiencia__imagenes">
            <div className="experiencia__blanco"></div>

            <div className="experiencia__logos">
              <a href="https://www.plexus.es/" target="_blank">
                <picture>
                  <source
                    srcSet="portfolio/assets/img/mixtas/plexus.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="portfolio/assets/img/mixtas/plexus.webp"
                    type="image/webp"
                  />
                  <img
                    className="experiencia__plexus"
                    src="portfolio/assets/img/mixtas/plexus.png"
                    alt="logo plexus"
                    width="169"
                    height="102"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </a>
              <a href="https://pcactual.net/" target="_blank">
                <picture>
                  <source
                    srcSet="portfolio/assets/img/mixtas/pcactual.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="portfolio/assets/img/mixtas/pcactual.webp"
                    type="image/webp"
                  />
                  <img
                    className="experiencia__logo-pcactual"
                    src="portfolio/assets/img/mixtas/pcactual.png"
                    alt="logo pcactual"
                    width="131"
                    height="131"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </a>
            </div>

            <div className="experiencia__background"></div>
          </div>
        </section>

        <section className="habilidades">
          <div className="habilidades__contenedor">
            <h2 className="habilidades__heading">{textMap[language].skillsHeading}</h2>
            <div className="habilidades__grid">
              <HabilidadCard
                tipo={textMap[language].skillCardOne}
                contenido={[
                  "css",
                  "html",
                  "java",
                  "javascript",
                  "php",
                  "python",
                  "sql",
                  "typescript",
                  "visual basic"
                ]}
              />
              <HabilidadCard
                tipo={textMap[language].skillCardTwo}
                contenido={[
                  "bootstrap",
                  "customtkinter",
                  "express",
                  "jquery",
                  "react",
                  "sass",
                  "sqlite",
                  "tailwind",
                  "vue",
                  "zod",
                  "...etc",
                ]}
              />
              <HabilidadCard
                tipo={textMap[language].skillCardThree}
                contenido={[
                  "figma",
                  "firebase",
                  "git",
                  "github",
                  "gitlab",
                  "gulp",
                  "mysql",
                  "node",
                  "vite",
                  "wordpress",
                  "...etc",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="proyectos">
          <div className="proyectos__contenedor">
            <h2 className="proyectos__heading">{textMap[language].projectsHeading}</h2>
            <div className="proyectos__grid">
              <ProyectoCard 
                nombre="sistema"
                urlPag="https://sistema-control-desechos.web.app/"
                titulo={textMap[language].projectHeadingOne}
                descripcion={textMap[language].projectDescriptionOne}
                lenguajes={["html", "sass", "typescript", "vue", "firebase"]}
                urlGit="https://github.com/anderson-parmigiani/sistema-control-desechos"
              />

              <ProyectoCard 
                nombre="todo"
                urlPag="https://statuesque-caramel-c7fd30.netlify.app/"
                titulo={textMap[language].projectHeadingTwo}
                descripcion={textMap[language].projectDescriptionTwo}
                lenguajes={["html", "tailwind", "javascript", "react"]}
                urlGit="https://github.com/anderson-parmigiani/todo-crud"
              />

              <ProyectoCard 
                nombre="portafolio"
                urlPag="#"
                titulo={textMap[language].projectHeadingThree}
                descripcion={textMap[language].projectDescriptionThree}
                lenguajes={["html", "sass", "javascript", "react"]}
                urlGit="https://github.com/anderson-parmigiani/portfolio"
              />

              <ProyectoCard 
                nombre="systemcheck"
                urlPag="https://github.com/anderson-parmigiani/system-check"
                titulo={textMap[language].projectHeadingFour}
                descripcion={textMap[language].projectDescriptionFour}
                lenguajes={["python", "customtkinter"]}
                urlGit="https://github.com/anderson-parmigiani/system-check"
              />

              <ProyectoCard 
                nombre="apirest"
                urlPag="https://local-rest-api.onrender.com/movies"
                titulo={textMap[language].projectHeadingFive}
                descripcion={textMap[language].projectDescriptionFive}
                lenguajes={["javascript", "node", "express", "zod"]}
                urlGit="https://github.com/anderson-parmigiani/local-rest-api"
              />

              <ProyectoCard
                nombre="chat"
                urlPag="https://chat-node-jrgh.onrender.com/"
                titulo={textMap[language].projectoHeadingSix}
                descripcion={textMap[language].projectDescriptionSix}
                lenguajes={["javascript", "node", "express", "sqlite"]}
                urlGit="https://github.com/anderson-parmigiani/chat-node"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Content;
