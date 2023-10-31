import Photo from "../assets/img/nosotros.jpg";
import { Back } from "../components/Back";
import { NavBarEmpy } from "../components/NavbarEmpy";
export const About = () => {
  return (
    <>
      <NavBarEmpy />
      <section className="flex flex-col" id="hero">
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
      <section className="py-8 px-4 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-2xl font-bold mb-5">Reseña histórica</p>
              <p className="text-gray-700 leading-loose mb-4">
                Somos Ópticas PRACSO, una empresa familiar que desde 2010 busca
                ofrecer el mejor servicio y calidad en salud visual en la costa
                Atlántica. Con 13 años de experiencia, nos hemos convertido en
                referentes en la atención de la salud visual, expandiendo
                nuestros servicios en 2023 con 8 sedes estratégicamente ubicadas
                en Barranquilla.
              </p>

              <div className="flex md:flex-row flex-col">
                <div className="flex relative rounded-2xl overflow-hidden bg-cover bg-no-repeat mb-5 md:mr-5 mr-0 w-full md:w-1/2">
                  <img
                    src="./src/assets/img/general.jpg"
                    alt="services"
                    className="object-cover rounded-2xl transition duration-500 ease-out hover:scale-125 hover:translate-x-9"
                  />
                </div>
                <p className="text-gray-700 leading-loose mb-4 md:w-1/2">
                  Nuestro equipo altamente cualificado se enfoca en la cultura
                  del servicio y calidad para satisfacer a nuestros clientes.
                  Contamos con habilitación del servicio de optometría y
                  certificación ISO 9001, garantizando la comodidad y seguridad
                  de nuestros usuarios.
                </p>
              </div>

              <p className="text-2xl font-bold mb-5">Misión</p>
              <div className="flex md:flex-row-reverse flex-col">
                <div className="flex relative rounded-2xl overflow-hidden bg-cover bg-no-repeat mb-5 md:mr-5 mr-0 w-full md:w-1/2">
                  <img
                    src="./src/assets/img/general.jpg"
                    alt="services"
                    className="object-cover rounded-2xl transition duration-500 ease-out hover:scale-125 hover:translate-x-9"
                  />
                </div>
                <p className="text-gray-700 leading-loose mb-4 md:w-1/2">
                  Nuestra misión es ofrecer servicios personalizados de
                  Optometría y Contactología, adaptándonos a las expectativas de
                  nuestros pacientes para proporcionar soluciones óptimas a los
                  problemas relacionados con su salud visual. Contribuimos al
                  mejoramiento y mantenimiento integral de su salud, contando
                  con profesionales altamente capacitados y motivados en la
                  búsqueda constante del mejoramiento continuo de los productos,
                  servicios y tecnología utilizada.
                </p>
              </div>
              <p className="text-2xl font-bold mb-5">Visión</p>
              <p className="text-gray-700 leading-loose mb-4">
                Consolidarnos para el año 2030 como la IPS de servicios de
                optometría de primera elección en las principales ciudades del
                país. Asimismo, aspiramos a ser un referente para nuestros
                pacientes y sus familias en soluciones ópticas, brindando
                siempre un servicio excelente de la más alta calidad.
              </p>
              <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/general.jpg"
                  alt=""
                  className="w-full h-40 object-cover rounded-2xl transition duration-500 ease-out hover:scale-125 hover:translate-x-9"
                />
              </div>
              <p className="text-2xl font-bold my-5">Valores corporativos</p>
              <ul className="list-image-[url(/src/assets/svg/check.svg)] ml-5">
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Compromiso: Nuestro personal aporta todo su conocimiento y
                  capacidades técnicas para cumplir cabalmente con los
                  requerimientos y necesidades del cliente en los tiempos
                  acordados.
                </li>
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Responsabilidad: Cada integrante de la organización se
                  compromete a cumplir con cada uno de los compromisos
                  adquiridos con el cliente.
                </li>
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Honestidad: Actuamos con rectitud, sinceridad, transparencia y
                  legalidad ante nuestros clientes, proveedores y trabajadores.
                </li>
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Confianza: La confianza es el elemento fundamental de los
                  valores de nuestra compañía. Estamos comprometidos con el
                  éxito de nuestros clientes, empleados, socios y la comunidad
                  en la que operamos.
                </li>
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Respeto: Para nuestra empresa, el respeto es la esencia de
                  todas las relaciones. Valoramos a nuestros empleados, clientes
                  y proveedores, creando un ambiente de seguridad, cordialidad y
                  amabilidad.
                </li>
                <li className="mt-5 text-gray-700 text-center md:text-left">
                  Liderazgo: Formamos un equipo que constantemente busca
                  influir, motivar y dirigir a nuestros pacientes para mantener
                  un alto estándar en la calidad del servicio. Buscamos así
                  posicionarnos como líderes en el sector de la salud visual.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto pb-5">
          <p className="text-3xl font-bold mb-5">Nuestras instalaciones</p>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat col-span-2 md:col-span-1 m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full "/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat col-span-2 m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat col-span-2 md:col-span-1 m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            <div className="rounded-2xl overflow-hidden bg-cover bg-no-repeat col-span-2 m-2">
              <img src="./src/assets/img/general.jpg" alt="" className="object-cover h-full w-full"/>
            </div>
            
          </div>
        </div>
        <Back />
      </section>
    </>
  );
};
