import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.svg";

export const Inicio = () => {
  return (
    <div className="container-xl d-flex pt-1 gap-5 ">
      <Link to="series" className="text-decoration-none text-black">
        <div className="icon position-relative">
          <img
            className=" position-absolute top-50 start-50 translate-middle h-75"
            src={placeholder}
            alt="placeholder"
          />
          <h2 className="text-center text-white position-absolute top-50 start-50 translate-middle">
            SERIES
          </h2>
        </div>
        <h6>Popular Series</h6>
      </Link>
      <Link to="movies" className="text-decoration-none text-black">
        <div className="icon position-relative">
          <img
            className="position-absolute top-50 start-50 translate-middle h-75"
            src={placeholder}
            alt="placeholder"
          />
          <h2 className="text-center text-white position-absolute top-50 start-50 translate-middle">
            MOVIES
          </h2>
        </div>
        <h6>Popular Movies</h6>
      </Link>
    </div>
  );
};
