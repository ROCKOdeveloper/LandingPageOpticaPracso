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
            className="absolute -translate-y-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              d="M0,256L48,261.3C96,267,192,277,288,288C384,299,480,309,576,298.7C672,288,768,256,864,256C960,256,1056,288,1152,282.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="mb-10 mt-5 px-5 md:px-20 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            style={{ color: "#fff", backgroundColor: "#093D90", borderColor: "#009865", borderWidth: "4px" }}
          >
            <Link to="/">Regresar</Link>
          </span>
        </div>
      </section>
    </>
  );
};
