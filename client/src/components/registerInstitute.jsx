import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterInstitute = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");
  const [locality, setLocality] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [altitude, setAltitude] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [webLink, setWebLink] = useState("");
  const [yearFundation, setYearFundation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInstitute = {
      name,
      abbreviation,
      category,
      province,
      locality,
      postalCode,
      street,
      altitude,
      mapLink,
      mail,
      tel,
      webLink,
      yearFundation,
      description,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/register-institute`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newInstitute),
        }
      );
      const data = await response.json();
      if (response.ok) {
        Swal.fire(
          {
            title: "Hecho",
            text: data.message,
            icon: "success",
            confirmButtonText: "Ok",
          },
          setTimeout(() => {
            navigate("/");
          }, 2000)
        );
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.log("error al crear Institución", error);
      Swal.fire({
        title: "Error Catch",
        text: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <main className="container d-flex justify-content-center align-items-center">
        <form
          className="formAgregarInstituto p-3 needs-validation"
          noValidate
          id="formAgregarInstituto"
          data-id="<%- id_user %>"
          onSubmit={handleSubmit}
        >
          <h2 className="">Registra tu institución</h2>
          <div className="nombres mb-3">
            <div className="nombre me-3">
              <label htmlFor="name" className="form-label">
                Nombre de la institución
              </label>
              <input
                type="text"
                placeholder="Instituto politecnico"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div>
              <label htmlFor="abbreviation" className="form-label">
                Abreviatura
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control needs-validation"
                  placeholder="IPF"
                  name="abbreviation"
                  id="abbreviation"
                  value={abbreviation}
                  onChange={(e) => {
                    setAbbreviation(e.target.value);
                  }}
                />
                <div className="valid-feedback"></div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Categoría<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select selectTipoCarrera"
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="" disabled>
                Seleccione la categoría *
              </option>
              <option value="1" id="1">
                Publico
              </option>
              <option value="2" id="2">
                Privado
              </option>
            </select>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-row w-100">
              <div className="w-50 me-3">
                <label htmlFor="province" className="form-label">
                  Provincia<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-select mb-3"
                  id="province"
                  name="province"
                  value={province}
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Seleccione una provincia
                  </option>
                </select>
              </div>
              <div className="w-50">
                <label htmlFor="locality" className="form-label">
                  Localidad<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-select mb-3"
                  id="locality"
                  name="locality"
                  value={locality}
                  onChange={(e) => {
                    setLocality(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Selecciona una localidad
                  </option>
                </select>
              </div>
            </div>
            <div id="map"></div>
            <label htmlFor="postal_code" className="form-label">
              Código postal<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control mb-3"
              id="postal_code"
              placeholder="3600"
              name="postal_code"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />

            <label htmlFor="street" className="form-label">
              Calle<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="street"
              placeholder="***"
              name="street"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />

            <label htmlFor="altitude" className="form-label">
              Altura<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="altitude"
              placeholder="3000"
              name="altitude"
              value={altitude}
              onChange={(e) => {
                setAltitude(e.target.value);
              }}
            />

            <label htmlFor="map_Link" className="form-label">
              Google Maps Link<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="map_link"
              placeholder="https://www.google.com/maps/place/..."
              name="map_link"
              value={mapLink}
              onChange={(e) => {
                setMapLink(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">
              Correo electrónico<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="mail"
              placeholder="<EMAIL>"
              name="mail"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />

            <label htmlFor="phone" className="form-label">
              Teléfono de administración<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              className="form-control mb-3"
              id="tel"
              placeholder="0000000000"
              name="tel"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />

            <label htmlFor="webLink" className="form-label">
              Página Web<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="web_link"
              placeholder="https://..."
              name="web_link"
              value={webLink}
              onChange={(e) => {
                setWebLink(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label htmlFor="year_fundation" className="form-label">
              Año de fundación{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="year_fundation"
              placeholder="2021"
              name="year_fundation"
              value={yearFundation}
              onChange={(e) => {
                setYearFundation(e.target.value);
              }}
            />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="description" className="form-label">
              Descripción breve de la institucion (max. 255 caracteres)
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <a className="btn btn-danger me-2" href="/">
              Cancelar
            </a>
            <button type="submit" className="btn btn-success" id="btnRegistrar">
              Registrar
            </button>
          </div>
        </form>
      </main>
      <script src="/js/registerInstitute.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </>
  );
};
