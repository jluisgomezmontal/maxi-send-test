import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { useData } from "../hooks/useData";
import { setDataModal } from "../redux/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { FilterBTN } from "../components/FilterBTN/FilterBTN";

export const Series = () => {
  const [loadedImages, setLoadedImages] = useState(true);
  const [modal, setModal] = useState(false);
  const [filterByYear, setFilterByYear] = useState(false);
  const [results, setResults] = useState(20);

  const [series] = useData("series", filterByYear, results);

  const { dataModal } = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
          series.map((entrie, index) => (
            <Link className="entrie_container text-white" key={index}>
              <img
                onClick={() => {
                  dispatch(setDataModal({ entrie }));
                  setModal(true);
                }}
                src={entrie.images.PosterArt.url}
                alt={entrie.title}
                width={entrie.images.PosterArt.with}
              />
              <p>{entrie.title}</p>
            </Link>
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
