import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "../hooks/useForm";
import { searchInstitucion } from "../api/searchInstitucion";
import { useState } from "react";
import { InstituteCard } from "../pages/Institutes/components/InstituteCard";
import swal from "sweetalert2";

export const Search = () => {
  const [institutes, setInstitutes] = useState([]);
  const { values, handleInputChange, reset } = useForm({ name: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const institutes = await searchInstitucion(values.name);
      console.log(institutes);
      setInstitutes(institutes);
      reset()
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <main className="container py-5">
        <section className="row justify-content-center text-light">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <form id="search-input" className="mb-5" onSubmit={handleSubmit}>
              <h2 className="mb-4 text-center text-black">
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

            <div id="results">

              {institutes.map((institute) => {
                return (

                  <InstituteCard key={institute.id} institute={institute} />


                )
              })}



            </div>

            <div className="mb-1 m-5">
              <h3 className="text-black">Noticias destacadas</h3>
            </div>

            <div
              id="carouselExampleAutoplaying"
              className="carousel slide carrusel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../public/img/laCuencaDelPlata.jpg"
                    className="d-block w-100"
                    alt="La cuenca del plata"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="../public/img/siglo21.png"
                    className="d-block w-100"
                    alt="Siglo 21"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="../public/img/UNAF.jpg"
                    className="d-block w-100"
                    alt="UNAF"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev btn-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next btn-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
