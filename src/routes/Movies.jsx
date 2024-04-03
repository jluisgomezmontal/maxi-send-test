import { useState } from "react";
import { useData } from "../hooks/useData";
import { Modal } from "../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDataModal } from "../redux/slices/dataSlice";
import { FilterBTN } from "../components/FilterBTN/FilterBTN";

export const Movies = () => {
  const [filterByYear, setFilterByYear] = useState(false);
  const [modal, setModal] = useState(false);
  const [results, setResults] = useState(20);

  const [movies] = useData("movie", filterByYear, results);
  const { dataModal } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [loadedImages, setLoadedImages] = useState(true);
  setTimeout(() => {
    setLoadedImages(false);
  }, 1000);
  return (
    <div className="container-xl">
      <FilterBTN setFilterByYear={setFilterByYear} setResults={setResults} />

      <div className="row gap-1">
        {loadedImages ? (
          <h5>Loading...</h5>
        ) : (
          movies.map((entrie, index) => (
            <div className="entrie_container text-white" key={index}>
              <img
                onClick={() => {
                  dispatch(setDataModal({ entrie }));
                  setModal(true);
                }}
                src={entrie.images.PosterArt.url}
                alt={entrie.title}
              />
              <p>{entrie.title}</p>
            </div>
          ))
        )}
        {modal && (
          <Modal
            dataModal={dataModal.entrie}
            setModal={setModal}
            modal={modal}
          />
        )}
      </div>
    </div>
  );
};
