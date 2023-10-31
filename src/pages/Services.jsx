import Photo from "../assets/img/servicios.jpg";
import { Link } from "react-router-dom";
export const Services = () => {
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
      <section className="mb-10 mt-5 px-5 md:px-20 text-center md:text-left">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">
              Consulta de Optometria General
            </span>
            <p>
              Nuestro equipo médico especializado en salud visual aborda las
              patologías oculares desde un enfoque multidisciplinario. El
              optometrista mide la calidad visual del paciente y prescribe la
              corrección óptica necesaria, como gafas o lentes de contacto, para
              resolver su déficit visual de manera efectiva.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/general.jpg"
              alt=""
            />
          </div>
        </div>
        
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">
              Consulta de Optometria Pediátrica
            </span>
            <p>
              La evaluación visual y ocular en pacientes pediátricos es crucial,
              dado el continuo crecimiento y desarrollo. Detectar y tratar
              alteraciones a tiempo es esencial para garantizar un desarrollo
              normal, evitando posibles consecuencias que podrían afectar la
              eficiencia visual en el futuro.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/pediatrica.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">
              Consulta de Ortoptica
            </span>
            <p>
              La Ortóptica, especialidad de la optometría, se centra en la
              rehabilitación visual mediante ejercicios. Su objetivo es corregir
              deficiencias visuales diagnosticadas, estimulando el movimiento
              ocular y previniendo la fatiga visual. Trata condiciones como
              estrabismo y diplopía con terapia no quirúrgica basada en
              ejercicios para mejorar condiciones visuales específicas.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/ortoptica.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">Contactologia</span>
            <p>
              La Contactología, servicio del Departamento de Optometría, utiliza
              lentes de contacto para tratar defectos refractivos y patologías
              como queratocono. En Ópticas Pracso, el equipo de optometristas
              realiza adaptaciones personalizadas, considerando la forma y
              características oculares, hábitos de uso y problemas visuales del
              usuario. El objetivo es ofrecer la mejor calidad visual y cuidado
              integral de la salud visual en un proceso detallado y
              personalizado.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/contactologia.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">
              Brigadas de Salud Visual Empresarial
            </span>
            <p>
              Para cumplir con la normativa empresarial colombiana, llevamos a
              cabo jornadas de salud visual preventiva, requeridas por la Ley
              1295 de 1994. Esta actividad, según el artículo 21, debe ofrecerse
              a todos los empleados como parte de los sistemas de seguridad y
              salud en el trabajo SG-SST. Nuestra línea de servicio, con
              personal especializado, despliega consultorios móviles en empresas
              asociadas para realizar diagnósticos a su población.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/brigadas.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 hover:my-10 duration-300">
          <div className="flex flex-col justify-center my-5">
            <span className="text-2xl font-bold mb-3">Nuestros Productos</span>
            <p>
              En nuestras ópticas, brindamos diversos tipos de lentes, como
              monofocales, bifocales, progresivos y ocupacionales, fabricados en
              materiales como policarbonato, CR orgánico, Futurex y Trivex.
              Ofrecemos tratamientos antirreflejantes, protección UV, y lentes
              de contacto de hidrogel de silicona. También proporcionamos
              monturas de diferentes materiales, desde metal hasta acetato de
              lujo con garantía de un año. Complementamos nuestros servicios con
              líquidos accesorios, lubricantes y productos para el cuidado
              ocular.
            </p>
          </div>
          <div className="flex m-5 rounded-2xl overflow-hidden bg-cover bg-no-repeat">
            <img
              className="object-cover rounded-2xl duration-500 ease-out hover:scale-125"
              src="./src/assets/img/productos.jpg"
              alt=""
            />
          </div>
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
