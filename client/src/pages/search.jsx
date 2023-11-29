import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "../hooks/useForm";
import { searchInstitucion } from "../api/searchInstitucion";
import { useState } from "react";
import { InstituteCard } from "../components/Institutes/pages/InstituteCard";
import swal from "sweetalert2";
import styles from "../../public/css/search.module.css";
export const Search = () => {
  const [institutes, setInstitutes] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.name === "") {
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
    }
    try {
      const institutes = await searchInstitucion(values.name);
      console.log(institutes);
      setInstitutes(institutes);

      if (institutes.length === 0) {
        swal.fire({
          toast: true,
          icon: "error",
          position: "top-start",
          title: "Oops...",
          text: "No se encontraron instituciones con ese nombre",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleInputChange, reset } = useForm({ name: "" });

  return (
    <>
      <main>
        <section className="container w-100 text-light">
          <div className={` ${styles.searchContainer}`}>
            <form id="search-input" className="mb-3" onSubmit={handleSubmit}>
              <h2 className="text-center text-black">
                Buscar Instituto/Universidad
              </h2>
              <div className="input-group">
                <input
                  type="search"
                  id="name"
                  className="form-control"
                  placeholder="Nombre del Instituto"
                  onChange={handleInputChange}
                  name="name"
                />
                <button type="submit" className="btn btn-primary">
                  Buscar
                </button>
              </div>
            </form>

            <div id="results" className="row">
              {institutes.map((institute, index) => (
                <div key={index} className="col-md-4">
                  <InstituteCard institute={institute} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
