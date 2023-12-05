import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterInstitute = () => {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [form, setForm] = useState({
    name: "",
    abbreviation: "",
    id_category: "",
    province: "",
    id_locality: "",
    postal_code: "",
    street: "",
    altitude: 0,
    map_link: "",
    mail: "",
    tel: "",
    web_link: "",
    year_fundation: 0,
    description: "",
  });
  const handleInputChange = (e) => {
    if (e.target.name === "altitude") {
      e.target.value = Number(e.target.value);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.id_category);
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/provincias", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProvinces();
  }, []);
  useEffect(() => {
    const getLocalities = async () => {
      try {
        if (form.province === "") return setLocalities([]);

        const response = await fetch(
          `http://localhost:5000/api/provincia/${form.province}/localidades`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setLocalities(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocalities();
  }, [form.province]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await fetch("http://localhost:5000/api/instituto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
        Swal.fire({
          title: "Instituto registrado!",
          text: "El instituto se registró correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/instituto/${data.id_institute}`);
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Verifica los campos remarcados",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error!",
        text: "Ocurrió un error al registrar el instituto.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 1) {
      if (
        form.name &&
        form.abbreviation &&
        form.year_fundation &&
        form.id_category &&
        form.description
      ) {
        setStep(step + 1);
      } else {
        // Display an error message or prevent advancing
        alert("Please complete all fields");
      }
    } else if (step === 2) {
      if (
        form.province &&
        form.id_locality &&
        form.postal_code &&
        form.street &&
        form.altitude &&
        form.map_link
      ) {
        setStep(step + 1);
      } else {
        // Display an error message or prevent advancing
        alert("Please complete all fields");
      }
    } else if (step === 3) {
      if (form.mail && form.tel && form.web_link) {
        setStep(step + 1);
      } else {
        // Display an error message or prevent advancing
        alert("Please complete all fields");
      }
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="inicio mb-3">
            <div className="nombreYAbreviatura d-flex flex-row">
              <div className="nombre d-flex flex-column w-75 pe-2 align-items-start">
                <label htmlFor="name" className="form-label">
                  Nombre de la institución
                </label>
                <input
                  type="text"
                  placeholder="Instituto politecnico"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="w-25 ps-2">
                <label htmlFor="abbreviation" className="form-label">
                  Abreviatura
                </label>
                <input
                  type="text"
                  className="form-control needs-validation"
                  placeholder="IPF"
                  name="abbreviation"
                  id="abbreviation"
                  value={form.abbreviation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-start">
              <div className="w-50 pe-2">
                <label htmlFor="year_fundation" className="form-label">
                  Año de fundación
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="year_fundation"
                  placeholder="2021"
                  name="year_fundation"
                  value={form.year_fundation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-50 category ps-2">
                <label htmlFor="id_category" className="form-label">
                  Categoría<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-select selectTipoCarrera"
                  id="id_category"
                  name="id_category"
                  value={form.id_category}
                  onChange={handleInputChange}
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
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="description" className="form-label">
                Descripción breve de la institucion (max. 255 caracteres)
              </label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                value={form.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mb-3 ubicacion d-flex flex-column align-items-start">
            <h4>Ubicación</h4>
            <div className="d-flex flex-row w-100">
              <div className="w-50 me-3">
                <label htmlFor="province" className="form-label">
                  Provincia<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-select mb-3"
                  id="province"
                  name="province"
                  value={form.province}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Seleccione una provincia
                  </option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-50">
                <label htmlFor="id_locality" className="form-label">
                  Localidad<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-select mb-3"
                  id="id_locality"
                  name="id_locality"
                  value={form.id_locality}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecciona una localidad
                  </option>
                  {localities.map((locality) => (
                    <option key={locality.id} value={locality.id}>
                      {locality.locality}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div id="map"></div>
            <label htmlFor="postalCode" className="form-label">
              Código postal<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control mb-3"
              id="postal_code"
              placeholder="3600"
              name="postal_code"
              value={form.postal_code}
              onChange={handleInputChange}
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
              value={form.street}
              onChange={handleInputChange}
            />

            <label htmlFor="altitude" className="form-label">
              Altura<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control mb-3"
              id="altitude"
              placeholder="3000"
              name="altitude"
              value={form.altitude}
              onChange={handleInputChange}
            />

            <label htmlFor="map_link" className="form-label">
              Google Maps Link<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="map_link"
              placeholder="https://www.google.com/maps/place/..."
              name="map_link"
              value={form.map_link}
              onChange={handleInputChange}
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-3 contacto d-flex flex-column align-items-start">
            <h4>Contacto</h4>
            <label htmlFor="mail" className="form-label">
              Correo electrónico<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="mail"
              placeholder="<EMAIL>"
              name="mail"
              value={form.mail}
              onChange={handleInputChange}
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
              value={form.tel}
              onChange={handleInputChange}
            />

            <label htmlFor="web_link" className="form-label">
              Página Web<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="web_link"
              placeholder="https://..."
              name="web_link"
              value={form.web_link}
              onChange={handleInputChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main className="container d-flex justify-content-center align-items-center">
        <form
          className="p-3 needs-validation "
          noValidate
          id="formAgregarInstituto"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            width: "600px",
            borderRadius: "10px",
          }}
        >
          <h2 className="">Registra tu institución</h2>
          {renderStep()}
          <div className="d-flex justify-content-end">
            {step > 1 && (
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={handlePreviousStep}
              >
                Anterior
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNextStep}
              >
                Siguiente
              </button>
            ) : (
              step === 3 && (
                <button
                  type="submit"
                  className="btn btn-success"
                  id="btnRegistrar"
                >
                  Registrar
                </button>
              )
            )}
          </div>
        </form>
      </main>
    </>
  );
};
