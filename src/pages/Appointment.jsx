import Photo from "../assets/img/agenda.jpg";
export const Appointment = () => {
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
              d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,208C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section>
        <span className="text-3xl font-bold mx-auto flex mb-5 py-2 w-fit text-center">
          Agendate con nosotros
        </span>
        <form className="w-full max-w-lg mx-auto pb-20">
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3 mb-2">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nombre completo
              </label>
              <input
                className="capitalize appearance-none block w-full bg-gray-100 text-gray-700 border border-transparent rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-b-green-700 focus:border-b-2 duration-300"
                id="name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="w-full px-3 mb-2">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Número de teléfono
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-transparent rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-b-green-700 focus:border-b-2 duration-300"
                id="phone"
                type="number"
                placeholder="000 000 0000"
              />
            </div>
            <div className="w-full px-3 mb-2">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Correo electrónico
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-transparent rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-b-green-700 focus:border-b-2 duration-300"
                id="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="w-full px-3 mb-5">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Ubicación
              </label>
              <div className="relative">
                <select
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-transparent rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-b-green-700 focus:border-b-2 duration-300"
                id="grid-state"
                >
                  <option>opcion 1</option>
                  <option>opcion 1</option>
                  <option>opcion 1</option>
                  <option>opcion 1</option>
                  <option>opcion 1</option>
                  <option>opcion 1</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3 flex">
              <input
                type="submit"
                value="Agendar"
                className=" text-white font-bold py-2 px-4 mx-auto rounded-2xl duration-300 hover:scale-110 cursor-pointer"
                style={{ color: "#fff", backgroundColor: "#093D90", borderColor: "#009865", borderWidth: "4px" }}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
