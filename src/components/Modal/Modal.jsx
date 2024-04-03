/* eslint-disable react/prop-types */
import { PropTypes } from "prop-types";

export const Modal = ({ dataModal, setModal, modal }) => {
  return (
    <div className="popup shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Title: {dataModal.title}</h1>
      <div className="d-flex gap-5">
        <img src={dataModal.images.PosterArt.url} alt={dataModal.title} />
        <div>
          <p>Release Year: {dataModal.releaseYear}</p>
          <p>Description: {dataModal.description}</p>
          <button onClick={() => setModal(!modal)} className="btn btn-danger">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  dataModal: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
};
