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
            className="w-full h-7 absolute bottom-0 left-0 transform rotate-180"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
      </section>
      <section className="my-10">
        <div
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16 hover:scale-105 duration-300 border hover:border-4 hover:border-green-600"
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
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16 hover:scale-105 duration-300 border hover:border-4 hover:border-green-600"
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
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl mb-16 hover:scale-105 duration-300 border hover:border-4 hover:border-green-600"
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
          className="flex flex-col mx-5 md:mx-20 px-5 pb-10 rounded-2xl hover:scale-105 duration-300 border hover:border-4 hover:border-green-600"
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
            style={{
              color: "#fff",
              backgroundColor: "#093D90",
              borderColor: "#009865",
              borderWidth: "4px",
            }}
          >
            <Link to="/">Regresar</Link>
          </span>
        </div>
      </section>
    </>
  );
};
