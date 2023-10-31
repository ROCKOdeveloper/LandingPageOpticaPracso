import { Link } from "react-router-dom";
export const Back = () => {
  return (
    <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
      <div className="flex justify-center ">
        <span className="overflow-hidden text-xl text-white font-semibold flex px-3 py-2 w-fit items-center rounded-2xl hover:border-b-2 border-b-4 border-green-600 bg-blue-800 duration-300 hover:translate-y-1">
          volver
        </span>
      </div>
    </Link>
  );
};
