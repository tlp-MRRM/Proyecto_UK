import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "../../hooks/useForm";
import { searchInstitute, searchCareer } from "../../api/searchInstitucion";
import { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import { Pagination } from "./Pagination";
import swal from "sweetalert2";
import styles from "../../../public/css/search.module.css";

export const Search = () => {
  const { values, handleInputChange } = useForm({ name: "" });

  const [data, setData] = useState([]);
  const [dataQt, setdataQt] = useState(8);
  const [nData, setnData] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [optionSelected, setOptionSelected] = useState("university");
  useEffect(() => {
    const indexFin = currentPage * dataQt;
    const indexIni = indexFin - dataQt;
    const nData = data.slice(indexIni, indexFin);
    setnData(nData);
  }, [currentPage, dataQt, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (optionSelected === "university" && values.name === "") {
      swal.fire({
        toast: true,
        icon: "error",
        position: "top-start",
        title: "Oops...",
        text: "Ingrese un nombre de institución",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    } else if (optionSelected === "career" && values.name === "") {
      swal.fire({
        toast: true,
        icon: "error",
        position: "top-start",
        title: "Oops...",
        text: "Ingrese un nombre de carrera",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    if (optionSelected === "university") {
      const institutes = await searchInstitute(values.name);
      console.log(institutes);
      setData(institutes);
    } else {
      const careers = await searchCareer(values.name);
      console.log(careers);
      setData(careers);
    }
  };

  const nPage = Math.ceil(data.length / dataQt);

  return (
    <>
      <main
        className={`d-flex ${styles.main} justify-content-center align-items-start`}
      >
        <div className={`text-light ${styles.searchContainer}`}>
          <form id="search-input" className="mb-4" onSubmit={handleSubmit}>
            <h2 className="text-center text-black m-3">Buscador</h2>
            <div className="input-group">
              <input
                type="search"
                id="name"
                className="form-control"
                placeholder="Universidad/carrera"
                onChange={handleInputChange}
                name="name"
              />
              <input
                type="radio"
                name="options-base"
                autoComplete="off"
                className="btn-check"
                checked={optionSelected === "university"}
                onChange={() => {
                  setOptionSelected("university");
                  setnData(null);
                }}
                id="university"
              />
              <label className="btn text-dark" htmlFor="university">
                Universidad
              </label>
              <input
                type="radio"
                name="options-base"
                autoComplete="off"
                className="btn-check"
                checked={optionSelected === "career"}
                onChange={() => {
                  setOptionSelected("career");
                  setnData(null);
                }}
                id="career"
              />
              <label className="btn text-dark" htmlFor="career">
                Carrera
              </label>

              <button type="submit" className="btn btn-primary ">
                Buscar
              </button>
            </div>
          </form>
          <div id="results" className={`${styles.results}`}>
            <div className={styles.resultsContainer}>
              {nData && (
                <ResultCard nData={nData} optionSelected={optionSelected} />
              )}
            </div>
            <Pagination
              setCurrentPage={setcurrentPage}
              currentPage={currentPage}
              nPages={nPage}
            />
          </div>
        </div>
      </main>
    </>
  );
};
