import { Link } from "react-router-dom";
import Photo from "../assets/img/nosotros.jpg";
export const About = () => {
  return (
    <>
      <section className="flex flex-col">
        <div className="w-full h-60 relative bg-black">
          <img
            src={Photo}
            className="w-full h-full opacity-60 object-cover"
            alt="Sobre nosotros"
          />
          <svg
            className="absolute -translate-y-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,250.7C672,267,768,277,864,261.3C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="my-10">
        <div
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16"
          style={{ backgroundColor: "#093D90" }}
        >
          <span
            className="text-3xl font-bold mx-auto md:mx-0 -mt-7 flex px-3 py-2 w-fit rounded-2xl text-center"
            style={{ color: "#fff", backgroundColor: "#009865" }}
          >
            Reseña histórica
          </span>
          <p className="mt-5 text-white text-center md:text-left">
            Somos Ópticas PRACSO, una empresa familiar que desde 2010 busca
            ofrecer el mejor servicio y calidad en salud visual en la costa
            Atlántica. Con 13 años de experiencia, nos hemos convertido en
            referentes en la atención de la salud visual, expandiendo nuestros
            servicios en 2023 con 8 sedes estratégicamente ubicadas en
            Barranquilla. Nuestro equipo altamente cualificado se enfoca en la
            cultura del servicio y calidad para satisfacer a nuestros clientes.
            Contamos con habilitación del servicio de optometría y certificación
            ISO 9001, garantizando la comodidad y seguridad de nuestros
            usuarios.
          </p>
        </div>
        <div
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16"
          style={{ backgroundColor: "#093D90" }}
        >
          <span
            className="text-3xl font-bold mx-auto md:mx-0 -mt-7 flex px-3 py-2 w-fit rounded-2xl"
            style={{ color: "#fff", backgroundColor: "#009865" }}
          >
            Misión
          </span>
          <p className="mt-5 text-white text-center md:text-left">
            Nuestra misión es ofrecer servicios personalizados de Optometría y
            Contactología, adaptándonos a las expectativas de nuestros pacientes
            para proporcionar soluciones óptimas a los problemas relacionados
            con su salud visual. Contribuimos al mejoramiento y mantenimiento
            integral de su salud, contando con profesionales altamente
            capacitados y motivados en la búsqueda constante del mejoramiento
            continuo de los productos, servicios y tecnología utilizada.
          </p>
        </div>
        <div
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16"
          style={{ backgroundColor: "#093D90" }}
        >
          <span
            className="text-3xl font-bold mx-auto md:mx-0 -mt-7 flex px-3 py-2 w-fit rounded-2xl"
            style={{ color: "#fff", backgroundColor: "#009865" }}
          >
            Visión
          </span>
          <p className="mt-5 text-white text-center md:text-left">
            Consolidarnos para el año 2030 como la IPS de servicios de
            optometría de primera elección en las principales ciudades del país.
            Asimismo, aspiramos a ser un referente para nuestros pacientes y sus
            familias en soluciones ópticas, brindando siempre un servicio
            excelente de la más alta calidad.
          </p>
        </div>
        <div
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl"
          style={{ backgroundColor: "#093D90" }}
        >
          <span
            className="text-3xl font-bold mx-auto md:mx-0 -mt-7 flex px-3 py-2 w-fit rounded-2xl text-center"
            style={{ color: "#fff", backgroundColor: "#009865" }}
          >
            Valores corporativos
          </span>
          <ul className="list-image-[url(/src/assets/svg/check.svg)] ml-5">
            <li className="mt-5 text-white text-center md:text-left">
              Compromiso: Nuestro personal aporta todo su conocimiento y
              capacidades técnicas para cumplir cabalmente con los
              requerimientos y necesidades del cliente en los tiempos acordados.
            </li>
            <li className="mt-5 text-white text-center md:text-left">
              Responsabilidad: Cada integrante de la organización se compromete
              a cumplir con cada uno de los compromisos adquiridos con el
              cliente.
            </li>
            <li className="mt-5 text-white text-center md:text-left">
              Honestidad: Actuamos con rectitud, sinceridad, transparencia y
              legalidad ante nuestros clientes, proveedores y trabajadores.
            </li>
            <li className="mt-5 text-white text-center md:text-left">
              Confianza: La confianza es el elemento fundamental de los valores
              de nuestra compañía. Estamos comprometidos con el éxito de
              nuestros clientes, empleados, socios y la comunidad en la que
              operamos.
            </li>
            <li className="mt-5 text-white text-center md:text-left">
              Respeto: Para nuestra empresa, el respeto es la esencia de todas
              las relaciones. Valoramos a nuestros empleados, clientes y
              proveedores, creando un ambiente de seguridad, cordialidad y
              amabilidad.
            </li>
            <li className="mt-5 text-white text-center md:text-left">
              Liderazgo: Formamos un equipo que constantemente busca influir,
              motivar y dirigir a nuestros pacientes para mantener un alto
              estándar en la calidad del servicio. Buscamos así posicionarnos
              como líderes en el sector de la salud visual.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <span
            className="text-xl font-bold flex px-3 py-2 mt-10 w-fit rounded-2xl hover:scale-110 duration-300"
            style={{ color: "#fff", backgroundColor: "#093D90", borderColor: "#009865", borderWidth: "4px" }}
          >
            <Link to="/">Regresar</Link>
          </span>
        </div>
      </section>
    </>
  );
};
