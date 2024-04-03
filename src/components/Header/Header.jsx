import { useLocation, Link } from "react-router-dom";
import "./header.scss";
export const Header = () => {
  let { pathname } = useLocation();

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
        <div className="container-xl">
          <Link className="navbar-brand ">
            <h1 className="fw-bold p-0 m-0 my-1">DEMO Streaming</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="form-inline">
              <Link className="text-white text-decoration-none">Log in</Link>
              <Link className="btn_header">Start your free trial</Link>
            </form>
          </div>
        </div>
      </nav>
      <div className="bg-steel text-white">
        <div className="container-xl">
          <h2 className="py-2">
            Popular{" "}
            {pathname === "/series"
              ? "Series"
              : pathname === "/movies"
              ? "Movies"
              : "Titles"}
          </h2>
        </div>
      </div>
    </>
  );
};
