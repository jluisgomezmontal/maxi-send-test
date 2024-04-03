import { PropTypes } from "prop-types";
export const FilterBTN = ({ setFilterByYear }) => {
  return (
    <div className="btn-group dropend mb-5">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
      <ul className="dropdown-menu dropdown-menu-dark ">
        <li>
          <a onClick={() => setFilterByYear(false)} className="dropdown-item">
            Title
          </a>
        </li>
        <li>
          <a onClick={() => setFilterByYear(true)} className="dropdown-item">
            Year
          </a>
        </li>
      </ul>
    </div>
  );
};

FilterBTN.propTypes = {
  setFilterByYear: PropTypes.func.isRequired,
};
