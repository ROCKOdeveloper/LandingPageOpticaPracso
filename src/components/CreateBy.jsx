import { Link } from "react-router-dom";

export const CreateBy = () => {
  return (
    <footer className="text-center py-3 bg-black text-white text-sm">
      <div className="flex justify-center">
        <p className="mr-1">Desarrollado y diseñado por</p>
        <Link
          to="https://rockodeveloper.github.io/Rdeveloper/"
          target="_blank"
          className="cursor-help hover:underline hover:decoration-wavy decoration-pink-400"
        >
          Rdeveloper
        </Link>
      </div>
    </footer>
  );
};
