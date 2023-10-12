import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
      <section className="relative flex flex-col h-screen bg-white z-40">
        <div className="w-screen h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#093D90"
              d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,122.7C840,171,960,245,1080,277.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="text-center m-auto">
          <spam className="text-4xl font-bold">ERROR 404</spam>
          <p className="mt-2 mb-4">
            Página no encontrada. Te invitamos a regresar a la página principal.
          </p>
          <div className="flex justify-center">
            <span
              className="text-xl font-bold flex px-3 py-2 w-fit rounded-2xl hover:scale-110 duration-300"
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
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#009865"
              d="M0,32L60,74.7C120,117,240,203,360,224C480,245,600,203,720,186.7C840,171,960,181,1080,208C1200,235,1320,277,1380,298.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};
