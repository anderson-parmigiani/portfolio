import HabilidadCard from "./HabilidadCard";
import ProyectoCard from "./ProyectoCard";

const Content = ({ language }) => {

  const textMap = {
    en: {
      presentationHeading: "About me",
      presentationTextOne: "Computer Engineer and CompTIA certified IT professional (Security+, Network+, A+) with a versatile background in System Administration and Full Stack Development.",
      presentationTextTwo: "I specialize in bridging the gap between hardware infrastructure and software applications. My experience in technical support has honed my troubleshooting skills, while my engineering degree and development knowledge allow me to approach IT operations with a focus on automation, efficiency, and security.",
      formationHeading: "Education",
      certHeading: "International Certifications",
      formationTooltip: "Two academic merits",
      formationCenterOne: "José Antonio Páez University.",
      formationTitleOne: "Computer Engineering",
      educationDateOne: " (Mar 2023)",
      formationCenterTwo: "CompTIA.",
      formationTitleTwo: "CompTIA A+",
      educationDateTwo: " (Aug 2025)",
      formationCenterThree: "EF SET.",
      formationTitleThree: "EF SET English Certificate 54/100 (B2 Upper Intermediate)",
      educationDateThree: " (Sep 2025)",
      formationCenterFour: "CompTIA.",
      formationTitleFour: "CompTIA Network+",
      educationDateFour: " (Oct 2025)",
      formationCenterFive: "CompTIA.",
      formationTitleFive: "CompTIA IT Operations Specialist – CIOS",
      educationDateFive: " (Oct 2025)",
      formationCenterSix: "CompTIA.",
      formationTitleSix: "CompTIA Security+",
      educationDateSix: " (Nov 2025)",
      formationCenterSeven: "CompTIA.",
      formationTitleSeven: "CompTIA Secure Infrastructure Specialist – CSIS",
      educationDateSeven: " (Nov 2025)",
      experienceHeading: "Experience",
      experienceCompanyOne: "Plexus Tech",
      experienceCompanyOneDate: " (Oct 2023 - Nov 2025)",
      experiencePositionOne: "Tech support specialist",
      experienceCompanyTwo: "PC Actual",
      experienceCompanyTwoDate: " (Mar 2019 - Jun 2019)",
      experiencePositionTwo: "Microcomputer Technician",
      skillsHeading: "Skills",
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
      projectHeadingSix: "Web Chat",
      projectDescriptionSix: "Allows the communication of different users in real time through a web chat.",
      projectHeadingSeven: "L&C Luxury Services",
      projectDescriptionSeven: "Client website (SPA). Remodeling and construction in USA.",
    },
    es: {
      presentationHeading: "Sobre mí",
      presentationTextOne: "Ingeniero de Computación y profesional de TI certificado por CompTIA (Security+, Network+, A+) con un perfil versátil que combina la Administración de Sistemas y el Desarrollo Full Stack.",
      presentationTextTwo: "Me especializo en integrar la infraestructura de hardware con las aplicaciones de software. Mi experiencia en soporte técnico ha perfeccionado mi capacidad de diagnóstico y resolución de problemas, mientras que mi formación como ingeniero y mis conocimientos en desarrollo me permiten abordar las operaciones de TI con un enfoque en la automatización, la eficiencia y la seguridad.",
      formationHeading: "Educación",
      certHeading: "Certificaciones Internacionales",
      formationTooltip: "Dos méritos académicos",
      formationCenterOne: "Universidad José Antonio Páez.",
      formationTitleOne: "Ingeniería de Computación",
      educationDateOne: " (Mar 2023)",
      formationCenterTwo: "CompTIA.",
      formationTitleTwo: "CompTIA A+",
      educationDateTwo: " (Ago 2025)",
      formationCenterThree: "EF SET.",
      formationTitleThree: "EF SET Certificado de Inglés 54/100 (B2 Intermedio Alto)",
      educationDateThree: " (Sep 2025)",
      formationCenterFour: "CompTIA.",
      formationTitleFour: "CompTIA Network+",
      educationDateFour: " (Oct 2025)",
      formationCenterFive: "CompTIA.",
      formationTitleFive: "CompTIA IT Operations Specialist – CIOS",
      educationDateFive: " (Oct 2025)",
      formationCenterSix: "CompTIA.",
      formationTitleSix: "CompTIA Security+",
      educationDateSix: " (Nov 2025)",
      formationCenterSeven: "CompTIA.",
      formationTitleSeven: "CompTIA Secure Infrastructure Specialist – CSIS",
      educationDateSeven: " (Nov 2025)",
      experienceHeading: "Experiencia",
      experienceCompanyOne: "Plexus Tech.",
      experienceCompanyOneDate: " (Oct 2023 - Nov 2025)",
      experiencePositionOne: "Especialista en soporte técnico",
      experienceCompanyTwo: "PC Actual.",
      experienceCompanyTwoDate: " (Mar 2019 - Jun 2019)",
      experiencePositionTwo: "Técnico de Microinformática",
      skillsHeading: "Habilidades",
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
      projectHeadingSix: "Web Chat",
      projectDescriptionSix: "Permite la comunicación de diferentes usuarios en tiempo real por medio de un chat web.",
      projectHeadingSeven: "L&C Luxury Services",
      projectDescriptionSeven: "Página web de cliente (SPA). Remodelación y construcción en USA",
    }
  };

  return (
    <>
      <main className="principal">
        <section className="presentacion presentacion__contenedor">
          <img
            className="presentacion__imagen"
            src="assets/img/mixtas/imagen_personal_2.png"
            alt="imagen personal"
            width="120"
            height="120"
            loading="lazy"
            decoding="async"
          />

          <h2 className="presentacion__heading">{textMap[language].presentationHeading}</h2>
          <p className="presentacion__texto">{textMap[language].presentationTextOne}</p>
          <p className="presentacion__texto">{textMap[language].presentationTextTwo}</p>
        </section>

        <section className="formacion formacion__contenedor">
          <div className="formacion__img">
            <a href="https://www.credly.com/badges/31198207-86d3-4fc8-a241-cdcca5e1e123/public_url" target="_blank">
              <img
                className="formacion__images"
                src="assets/img/mixtas/CSIS_Certified.png"
                alt="imagen certificado comptia IT Operations Specialist"
                width="138"
                height="138"
                loading="lazy"
                decoding="async"
                />
            </a>
            <a href="https://www.credly.com/badges/ec5b5266-347c-4b13-a75d-5ee5822a6e3a/public_url" target="_blank">
              <img
                className="formacion__images"
                src="assets/img/mixtas/CIOS_Certified.png"
                alt="imagen certificado comptia IT Operations Specialist"
                width="138"
                height="138"
                loading="lazy"
                decoding="async"
                />
            </a>
            <a href="https://cert.efset.org/ndLLrv" target="_blank">
              <img
                className="formacion__images"
                src="assets/img/mixtas/efset_cert.png"
                alt="imagen certificado efset"
                width="138"
                height="138"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <h2 className="formacion__heading">{textMap[language].formationHeading}</h2>

          <ul className="formacion__elementos">
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterOne}<span className="experiencia__date">{textMap[language].educationDateOne}</span>
                <span className="formacion__titulo">
                  {textMap[language].formationTitleOne}
                </span>
              </h3>
              <div className="formacion__reconocimientos">
                <img
                  className="formacion__estrella"
                  src="assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="formacion__estrella"
                  src="assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <span className="formacion__tooltip">{textMap[language].formationTooltip}</span>
              </div>
            </li>

            <h2 className="formacion__heading--cert">{textMap[language].certHeading}</h2>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterSeven}<span className="experiencia__date">{textMap[language].educationDateSeven}</span>
                <a href="https://www.credly.com/badges/31198207-86d3-4fc8-a241-cdcca5e1e123/public_url" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleSeven}
                </a>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterSix}<span className="experiencia__date">{textMap[language].educationDateSix}</span>
                <a href="https://cp.certmetrics.com/comptia/en/public/verify/credential/8747d88266b4415894c718967615fe5c" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleSix}
                </a>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterFive}<span className="experiencia__date">{textMap[language].educationDateFive}</span>
                <a href="https://www.credly.com/badges/ec5b5266-347c-4b13-a75d-5ee5822a6e3a/public_url" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleFive}
                </a>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterFour}<span className="experiencia__date">{textMap[language].educationDateFour}</span>
                <a href="https://cp.certmetrics.com/comptia/en/public/verify/credential/NKK3362QXE14CXSJ" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleFour}
                </a>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterTwo}<span className="experiencia__date">{textMap[language].educationDateTwo}</span>
                <a href="https://cp.certmetrics.com/comptia/en/public/verify/credential/MM15WPN542EQ18R2" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleTwo}
                </a>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                {textMap[language].formationCenterThree}<span className="experiencia__date">{textMap[language].educationDateThree}</span>
                <a href="https://cert.efset.org/ndLLrv" target="_blank" className="formacion__titulo formacion__titulo--enlace">
                  {textMap[language].formationTitleThree}
                </a>
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
                  <span className="experiencia__date">
                    {textMap[language].experienceCompanyOneDate}
                  </span>
                  <span className="experiencia__cargo">
                    {textMap[language].experiencePositionOne}
                  </span>
                </h3>
              </li>
              <li className="experiencia__elemento">
                <h3 className="experiencia__empresa">
                  {textMap[language].experienceCompanyTwo}
                  <span className="experiencia__date">
                    {textMap[language].experienceCompanyTwoDate}
                  </span>
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
                    srcSet="assets/img/mixtas/plexus.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="assets/img/mixtas/plexus.webp"
                    type="image/webp"
                  />
                  <img
                    className="experiencia__plexus"
                    src="assets/img/mixtas/plexus.png"
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
                    srcSet="assets/img/mixtas/pcactual.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="assets/img/mixtas/pcactual.webp"
                    type="image/webp"
                  />
                  <img
                    className="experiencia__logo-pcactual"
                    src="assets/img/mixtas/pcactual.png"
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
              {language === "es" && (
                <HabilidadCard
                  tipo={(textMap[language].skillsHeading).toLowerCase()}
                  contenido={[
                    "soporte técnico",
                    "configuración de redes",
                    "sistemas operativos",
                    "instalación de software",
                    "solución de problemas de hardware",
                    "dispositivos periféricos",
                    "reparación de PC",
                    "soporte a dispositivos móviles",
                    "gestión de incidencias",
                    "gestión de redes",
                    "gestión de seguridad",
                    "conciencia en seguridad",
                    "control de acceso",
                    "bases de datos",
                    "desarrollo full stack",
                    "css",
                    "html",
                    "javascript",
                    "python",
                    "sql",
                    "bootstrap",
                    "jquery",
                    "react",
                    "sass",
                    "vue",
                    "zod",
                    "firebase",
                    "git",
                    "github",
                    "gitlab",
                    "node",
                    "...etc",
                  ]}
                />
              )}
              {language === "en" && (
                <HabilidadCard
                  tipo={(textMap[language].skillsHeading).toLowerCase()}
                  contenido={[
                    "technical support",
                    "network configuration",
                    "operating systems",
                    "software installation",
                    "hardware troubleshooting",
                    "peripheral device management",
                    "PC repair",
                    "mobile device support",
                    "incidents management",
                    "network management",
                    "security management",
                    "security awareness",
                    "access control",
                    "databases",
                    "full stack development",
                    "css",
                    "html",
                    "javascript",
                    "python",
                    "sql",
                    "bootstrap",
                    "jquery",
                    "react",
                    "sass",
                    "vue",
                    "zod",
                    "firebase",
                    "git",
                    "github",
                    "gitlab",
                    "node",
                    "...etc",
                  ]}
                />
              )}
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
                nombre="luxuryservices"
                urlPag="https://lcluxuryservices.com/"
                titulo={textMap[language].projectHeadingSeven}
                descripcion={textMap[language].projectDescriptionSeven}
                lenguajes={["html", "sass", "javascript", "react", "zod"]}
                urlGit="https://github.com/anderson-parmigiani/lycluxuryservices"
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
                lenguajes={["html", "javascript", "node", "express", "zod"]}
                urlGit="https://github.com/anderson-parmigiani/local-rest-api"
              />

              <ProyectoCard
                nombre="chat"
                urlPag="https://chat-node-jrgh.onrender.com/"
                titulo={textMap[language].projectHeadingSix}
                descripcion={textMap[language].projectDescriptionSix}
                lenguajes={["html", "javascript", "node", "express", "sqlite"]}
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
