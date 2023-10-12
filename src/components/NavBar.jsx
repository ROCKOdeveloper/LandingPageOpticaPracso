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
          <ul className="flex">
            <li>
              <Link
                to="/"
                className="text-white px-3 py-1 border hover:border-b-2 border-transparent hover:border-b-white rounded-xl duration-300 ease-out"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-white px-3 py-1 border hover:border-b-2 border-transparent hover:border-b-white rounded-xl duration-300 ease-out"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="text-white px-3 py-1 border hover:border-b-2 border-transparent hover:border-b-white rounded-xl duration-300 ease-out"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/Appointment"
                className="text-white px-3 py-1 border hover:border-b-2 border-transparent hover:border-b-white rounded-xl duration-300 ease-out"
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
