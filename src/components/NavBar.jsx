import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <header className="w-screen bg-transparent flex flex-row p-2 absolute top-0 z-10 ">
        <Link to="/" className="w-auto m-auto py-5 md:p-0">
          <img
            className="w-full h-8 m-auto hidden md:flex object-contain"
            src="./src/assets/img/logoHW.png"
            alt="Logo"
          />
          <img
            className="w-auto h-32 mt-3 m-auto flex md:hidden drop-shadow-2xl"
            src="./src/assets/img/logoPB.png"
            alt=""
          />
        </Link>
        <nav className="md:flex w-full items-center justify-end hidden">
          <ul className="flex items-center">
            <li>
              <a
                href="#about"
                className="text-white px-4 py-2 mr-1 hover:border-b-2 border-transparent hover:border-b-white rounded-2xl duration-300 ease-out"
              >
                Sobre nosotros
              </a>
            </li>
            <li className="flex">
              <a
                href="#services"
                className="text-white flex pl-4 pr-2 py-2 hover:border-b-2 border-transparent hover:border-b-white rounded-2xl duration-300 ease-out group"
              >
                Servicios
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 -960 960 960"
                  fill="white"
                  className="mt-1 ml-2 flex group-hover:rotate-180 duration-300 ease-out"
                >
                  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
                <ul className="absolute hidden group-hover:block bg-transparent drop-shadow-2xl backdrop-blur rounded-2xl mt-8">
                  <li className="rounded-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Optometria General
                    </Link>
                  </li>
                  <li className="rounded-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Optometria Pediatrica
                    </Link>
                  </li>
                  <li className="rounded-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Ortoptica
                    </Link>
                  </li>
                  <li className="rounded-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Contactologia
                    </Link>
                  </li>
                  <li className="rounded-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Brigadas
                    </Link>
                  </li>
                  <li className="rounded-b-2xl border-b-2 border-transparent hover:border-b-white duration-300">
                    <Link className="py-2 px-4 block" to="/">
                      Nuestros Productos
                    </Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <Link
                to="/Appointment"
                className="text-white px-4 py-2 ml-1 border-b-2 border-transparent hover:border-b-white rounded-2xl duration-300 ease-out"
              >
                Agenda
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
