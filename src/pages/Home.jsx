import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
export const Home = () => {

  
  
  return (
    <>
      <NavBar />
      <section className="flex h-screen bg-black relative text-white" id="hero">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./src/assets/video/pracsodemo6.mp4" type="video/mp4" />
        </video>
        <div className="text-center absolute w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-semibold italic">
            Expertos en salud visual
          </h1>
          <p className="text-white text-base font-light mt-3 mb-3.5">
            Agenda tu cita con nosotros hoy mismo para recibir un servicio de
            calidad excepcional.
          </p>
          <Link to="/appointment">
            <button className="text-white text-xl font-semibold px-3 py-2 rounded-2xl border-2 hover:scale-105 duration-500 ease-in-out">
              Agenda ahora
            </button>
          </Link>
        </div>
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
      </section>
      <section className="flex flex-col bg-white" id="about">
        <div className="w-full pt-10 px-10 md:pt-20 md:px-20  text-center md:text-left">
          <h2 className="text-3xl font-bold">Quienes somos</h2>
          <p className="mt-2 text-black/60">
            Ópticas PRACSO, una empresa familiar desde 2010, se destaca como
            líder en salud visual en la costa Atlántica, siendo la mejor opción
            para resolver problemas visuales.
          </p>
        </div>
        <div className="w-full flex flex-row flex-wrap px-10 pb-10 md:px-20 md:pb-20 justify-center md:justify-between items-center">
          <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white w-40 h-40 border-4 hover:border-green-600 border-transparent flex justify-center items-center p-4 rounded-lg text-center drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out hover:scale-110 m-5 md:m-10">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80"
                  width="80"
                  viewBox="0 -960 960 960"
                  fill="#009865"
                >
                  <path d="M480-94.384q-70.539-58.923-156.769-92.923Q237-221.307 144-227.461v-383.001q97.615 5.385 183.231 46.346Q412.846-523.154 480-463.308q67.154-59.846 152.769-100.808Q718.385-605.077 816-610.462v383.001q-93 6.154-179.231 40.154-86.23 34-156.769 92.923Zm-.06-55.77q66.795-48.762 140.124-78.055 73.329-29.293 152.167-38.74v-294.282q-76.692 12.539-151.269 52.308Q546.385-469.154 480-404.461q-67.539-66.385-141.039-105.808-73.5-39.423-151.192-50.962v294.693q78.838 9.036 152.108 38.329 73.269 29.293 140.063 78.055Zm1.522-465.615q-57.771 0-97.54-39.384-39.768-39.385-39.768-97.539 0-58.155 39.768-97.924 39.769-39.769 97.54-39.769 57.77 0 97.539 39.769 39.768 39.769 39.768 97.924 0 58.154-39.768 97.539-39.769 39.384-97.539 39.384Zm.254-43.77q38.515 0 65.899-27.639Q575-714.817 575-753.332q0-38.514-27.639-65.899-27.639-27.384-66.154-27.384t-65.899 27.639q-27.385 27.639-27.385 66.154 0 38.514 27.639 65.899 27.64 27.384 66.154 27.384Zm-.254-93.538ZM480-404.461Z" />
                </svg>
                <span className="mt-3 font-semibold text-xl">História</span>
              </div>
            </div>
          </Link>
          <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white w-40 h-40 border-4 hover:border-green-600 border-transparent flex justify-center items-center p-4 rounded-lg text-center drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out hover:scale-110 m-5 md:m-10">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80"
                  width="80"
                  viewBox="0 -960 960 960"
                  fill="#009865"
                >
                  <path d="M480.067-100.001q-78.836 0-148.204-29.92-69.369-29.92-120.682-81.21-51.314-51.291-81.247-120.629-29.933-69.337-29.933-148.173t29.92-148.204q29.92-69.369 81.21-120.682 51.291-51.314 120.629-81.247 69.337-29.933 148.173-29.933t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.92 148.204q-29.92 69.369-81.21 120.682-51.291 51.314-120.629 81.247-69.337 29.933-148.173 29.933Zm-.104-45.384q140.104 0 237.378-97.237 97.274-97.236 97.274-237.341 0-140.104-97.237-237.378-97.236-97.274-237.341-97.274-140.104 0-237.378 97.237-97.274 97.236-97.274 237.341 0 140.104 97.237 237.378 97.236 97.274 237.341 97.274Zm.128-114.616q-91.629 0-155.859-64.14-64.231-64.14-64.231-155.768 0-91.629 64.14-155.859 64.14-64.231 155.768-64.231 91.629 0 155.859 64.14 64.231 64.14 64.231 155.768 0 91.629-64.14 155.859-64.14 64.231-155.768 64.231Zm-.152-45.384q72.753 0 123.715-50.9 50.961-50.9 50.961-123.654 0-72.753-50.9-123.715-50.9-50.961-123.654-50.961-72.753 0-123.715 50.9-50.961 50.9-50.961 123.654 0 72.753 50.9 123.715 50.9 50.961 123.654 50.961ZM480-420.001q-24.538 0-42.268-17.731-17.731-17.73-17.731-42.268t17.731-42.268q17.73-17.731 42.268-17.731t42.268 17.731q17.731 17.73 17.731 42.268t-17.731 42.268q-17.73 17.731-42.268 17.731Z" />
                </svg>
                <span className="mt-3 font-semibold text-xl">Misión</span>
              </div>
            </div>
          </Link>
          <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white w-40 h-40 border-4 hover:border-green-600 border-transparent flex justify-center items-center p-4 rounded-lg text-center drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out hover:scale-110 m-5 md:m-10">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80"
                  width="80"
                  viewBox="0 -960 960 960"
                  fill="#009865"
                >
                  <path d="M480.208-344.232q64.638 0 110.099-45.669 45.461-45.67 45.461-110.307 0-64.638-45.669-110.099-45.67-45.461-110.307-45.461-64.638 0-110.099 45.669-45.461 45.67-45.461 110.307 0 64.638 45.669 110.099 45.67 45.461 110.307 45.461Zm-.511-44.922q-46.312 0-78.428-32.418-32.115-32.419-32.115-78.731t32.418-78.428q32.419-32.115 78.731-32.115t78.428 32.418q32.115 32.419 32.115 78.731t-32.418 78.428q-32.419 32.115-78.731 32.115Zm.358 169.153q-137.593 0-249.823-77.038Q118.001-374.078 61.54-500q56.461-125.922 168.637-202.961 112.175-77.038 249.768-77.038 137.593 0 249.823 77.038Q841.999-625.922 898.46-500q-56.461 125.922-168.637 202.961-112.175 77.038-249.768 77.038ZM480-500Zm-.169 234.615q119.246 0 218.823-63.769Q798.23-392.923 850.461-500 798.23-607.077 698.822-670.846q-99.408-63.769-218.653-63.769-119.246 0-218.823 63.769Q161.77-607.077 108.924-500q52.846 107.077 152.254 170.846 99.408 63.769 218.653 63.769Z" />
                </svg>
                <span className="mt-3 font-semibold text-xl">Visión</span>
              </div>
            </div>
          </Link>
          <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white w-40 h-40 border-4 hover:border-green-600 border-transparent flex justify-center items-center p-4 rounded-lg text-center drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out hover:scale-110 m-5 md:m-10">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80"
                  width="80"
                  viewBox="0 -960 960 960"
                  fill="#009865"
                >
                  <path d="M517-527.538 365.693-678.845l32.615-32.23L517-591.767l232.077-231.077 31.614 30.999L517-527.538Zm40.538 437.459-314.847-91.308v54.308H60.771v-349.382h279.767l249.999 93.308q23.154 8.461 39.539 28.461 16.384 20 16.384 58.923h125.155q36.999 0 59.23 26.932 22.23 26.933 22.23 72.913v15.23L557.538-90.079Zm-451.384-82.384h90.154v-258.614h-90.154v258.614Zm447.768 35.385 252.154-76.846q-4.077-19-12.692-27.731-8.615-8.731-21.769-8.731H570.769q-28.077 0-54.346-3.807-26.269-3.808-47.346-10.423l-82.154-25.385 18.153-44.538 72.616 24.77q24.23 8 47.884 11t72.654 3q0-15.462-5.269-27.347Q587.692-335 575.538-340l-241.923-91.077h-90.924v201.691l311.231 92.308ZM196.308-301.77Zm401.922 6.001Zm-401.922-6.001Zm46.383 0Z" />
                </svg>
                <span className="mt-3 font-semibold text-xl">Valores</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <svg
        className="w-full h-7"
        fill="#093D90"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
      </svg>
      <section
        className="flex flex-col text-white"
        id="services"
        style={{ backgroundColor: "#093D90" }}
      >
        <div className="w-full pt-10 md:pt-20 pb-5 px-4 md:px-40 text-center md:text-left">
          <h3 className="text-3xl font-bold">Servicios</h3>
          <p className="mt-2 text-white/80">
            Para ayudar al paciente a conseguir el máximo rendimiento de su
            visión con la mínima fatiga Visual, el Departamento de Optometría de
            Ópticas Pracso, pone a su disposición los siguientes servicios:
          </p>
        </div>
        <div className="w-full flex flex-wrap md:flex-row flex-col gap-5 mt-5 pb-10 px-4 justify-center">
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/general.jpg"
                  alt="services"
                  className="w-full rounded-t-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Optometria General
                </span>
              </div>
            </div>
          </Link>
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative text-black bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/pediatrica.jpg"
                  alt="services"
                  className="w-full rounded-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full z-10 rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,320L34.3,309.3C68.6,299,137,277,206,261.3C274.3,245,343,235,411,224C480,213,549,203,617,186.7C685.7,171,754,149,823,128C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,218.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Optometria Pediátrica
                </span>
              </div>
            </div>
          </Link>
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative text-black bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/ortoptica.jpg"
                  alt="services"
                  className="w-full rounded-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full z-10 rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,224L34.3,234.7C68.6,245,137,267,206,256C274.3,245,343,203,411,202.7C480,203,549,245,617,256C685.7,267,754,245,823,234.7C891.4,224,960,224,1029,229.3C1097.1,235,1166,245,1234,229.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Ortoptica
                </span>
              </div>
            </div>
          </Link>
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative text-black bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/contactologia.jpg"
                  alt="services"
                  className="w-full rounded-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full z-10 rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,32L34.3,53.3C68.6,75,137,117,206,149.3C274.3,181,343,203,411,181.3C480,160,549,96,617,80C685.7,64,754,96,823,133.3C891.4,171,960,213,1029,229.3C1097.1,245,1166,235,1234,202.7C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Contactologia
                </span>
              </div>
            </div>
          </Link>
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative text-black bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/brigadas.jpg"
                  alt="services"
                  className="w-full rounded-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full z-10 rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,256L34.3,229.3C68.6,203,137,149,206,154.7C274.3,160,343,224,411,245.3C480,267,549,245,617,240C685.7,235,754,245,823,224C891.4,203,960,149,1029,138.7C1097.1,128,1166,160,1234,160C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Brigadas
                </span>
              </div>
            </div>
          </Link>
          <Link to={"/Services"} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-auto md:w-80 rounded-2xl relative text-black bg-white">
              <div className="relative rounded-2xl overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="./src/assets/img/productos.jpg"
                  alt="services"
                  className="w-full rounded-2xl transition duration-500 ease-out group-hover:scale-125 group-hover:translate-x-9"
                />
              </div>
              <svg
                className="absolute w-full -translate-y-full z-10 rounded-b-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  d="M0,128L34.3,138.7C68.6,149,137,171,206,192C274.3,213,343,235,411,240C480,245,549,235,617,202.7C685.7,171,754,117,823,101.3C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,192C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
              <div className="-translate-y-full z-20 absolute w-full pb-4 group-hover:scale-110 duration-300">
                <span
                  className="flex z-20 mx-auto text-2xl font-semibold text-white w-fit px-3 py-1 rounded-lg"
                  style={{ backgroundColor: "#009865" }}
                >
                  Nuestros Productos
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <svg
        className="w-full h-7"
        fill="#093D90"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
      <section className="">
        <div className="w-full pt-10 md:pt-20 pb-5 px-4 md:px-40 text-center md:text-left">
          <h4 className="text-3xl font-bold">Nuestros clientes</h4>
          <p className="mt-2 text-black/70">
            Algunos de nuestros clientes empresariales, quienes dan testimonio
            de la prestación de nuestros servicios y con quienes hemos trabajado
            a través de los años son:
          </p>
        </div>
        <div className="slider my-10">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://www.farmacapsulas.com/wp-content/uploads/2015/12/logo_farma.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.cuc.edu.co/wp-content/uploads/2021/07/logo1cuc.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://mbpuniformes.com/wp-content/uploads/2018/07/constructora-emma.jpg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i0.wp.com/coolechera.co/wp-content/uploads/2022/01/cropped-cropped-coolechera-01-01.png?w=2005&ssl=1"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://grupologis.co/wp-content/uploads/2022/04/01-Logo-Logis-Horizontal-Full-color.svg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://constructoresunidos.com/wp-content/uploads/2020/08/logo-delamar.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.colegioamericano.edu.co/dir/2021/08/logo-ca-2021-color-borde.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://superbrix.com/wp-content/uploads/2021/11/VectorSuperbrix.svg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://mercologis.com/images/logo/logo.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://columnavip.com/wp-content/uploads/2018/02/dislicores-logo.jpg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i0.wp.com/coophumana.com/wp-content/uploads/logo-web.png?fit=700%2C162&ssl=1"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.cehosam.com/wp-content/uploads/2021/06/cropped-LOGO-2021.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://coopercom.co/wp-content/uploads/2023/05/LOGO-ptamano.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="http://clinicalaasuncion.com/wp-content/themes/wordpress-bootstrap-master/images/logoclinicaasuncionbarranquilla.jpg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://palatsi.com.co/cdn/shop/files/logo-palatsi-tiendas-de-belleza_160x@2x.png?v=1614327996"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://seeklogo.com/images/G/gobernacion-de-bolivar-logo-4B75CDD549-seeklogo.com.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://lito.com.co/wp-content/uploads/2023/05/LOGO_LITO_HD.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://docplayer.es/docs-images/80/80657487/images/1-0.jpg"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="data:image/jpeg;base64,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"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://cesacips.com/wp-content/uploads/2022/03/cropped-Logo-CESAC_page-0001-sin-fondo-768x253.png"
                height="auto"
                width="auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <svg
        className="w-full h-7 rotate-180"
        fill="#093D90"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
      <section
        className="text-white py-10"
        style={{ backgroundColor: "#093D90" }}
      >
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center">
            <img
              className="w-40"
              src="./src/assets/img/logoPB.png"
              alt="Logo blanco"
            />
          </div>
          <div className="flex flex-col h-full justify-center items-center my-5 md:my-0">
            <p className="text-xl font-bold mb-2">Más de Pracso</p>
            <ul className="text-white/80 text-center">
              <li className="hover:py-1 duration-500 hover:text-white/90 hover:scale-110">
                <Link to={"/FAQ"} onClick={() => window.scrollTo(0, 0)}>Preguntas frecuentes</Link>
              </li>
              <li className="hover:py-1 duration-500 hover:text-white/90 hover:scale-110">
                <Link to={"/Ubications"} onClick={() => window.scrollTo(0, 0)}>Nuestras sedes</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-base italic mb-3">
              ¡Síguenos en nuestras redes!
            </span>
            <div>
              <div className="flex">
                <a
                  href="https://www.facebook.com/opticaspracso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 hover:scale-125 duration-300 delay-75 hover:drop-shadow-2xl"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                    alt="facebook"
                  />
                </a>
                <a
                  href="http://www.instagram.com/opticaspracso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 ml-7 duration-300 delay-75 hover:scale-125 hover:drop-shadow-2xl"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link
        to="https://web.whatsapp.com/send?phone=573022910878&text=Hola%20Optica%20Pracso"
        target="_blank"
        className="fixed bottom-4 right-4 z-50 animate-bounce"
      >
        <img
          className="w-10 h-10 hover:scale-110 duration-200"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp"
        />
        <span className="absolute top-0 right-0 inline-flex rounded-full h-3 w-3 bg-red-500">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400"></span>
        </span>
      </Link>
    </>
  );
};
