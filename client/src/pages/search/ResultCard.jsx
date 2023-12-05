import styles from "../../../public/css/instituteCard.module.css";
import { Link } from "react-router-dom";

export const InstituteResultCard = ({ nData }) => {
  const institutes = nData
    ? nData.map((institute) => (
        <div key={institute.id} className={`card ${styles.instituteCard} p-0`}>
          <div className="row p-3 h-100 g-0">
            <div className="col">
              <div className={`${styles.cardBody} h-100`}>
                <div className={styles.cardInterior}>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="d-flex flex-colum align-items-top justify-content-between">
                      <h5 className="card-title mb-0">{institute.name} </h5>
                      <small className="text-muted fw-semibold">
                        ({institute.abbreviation})
                      </small>
                    </div>
                    <div>
                      <div className="text-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-currency-dollar pe-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.3"
                          stroke="#595c5f"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                          <path d="M12 3v3m0 12v3" />
                        </svg>
                        {institute.id_category === 1 ? "Privada" : "Pública"}
                      </div>
                      <div className="card-text d-flex flex-row align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-map-pin pe-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.3"
                          stroke="#595c5f"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <div className="text-muted">
                          {institute.Ubication.Locality.locality},{" "}
                          {institute.Ubication.street},{" "}
                          {institute.Ubication.altitude}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-text pb-2">
                    {institute.description.length > 110
                      ? institute.description.substring(0, 110) + "..."
                      : institute.description}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-end align-items-center p-0">
                  <Link
                    to={`/institute/${institute.id}`}
                    className="btn w-100 p-1"
                  >
                    Ver Universidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;

  return <>{institutes}</>;
};
export const CareerResultCard = ({ nData }) => {
  const careers = nData.map((career) => (
    <div key={career.id} className={`card ${styles.careerCard} p-0`}>
      <div className="row g-0">
        <div className="col">
          <div className={`card-body ${styles.cardBody} `}>
            <div className={styles.cardInterior}>
              <div className="d-flex flex-column justify-content-between">
                <div className="">
                  <h5 className="card-title mb-0">{career.name} </h5>
                  <p className="card-text mb-0">
                    {career.id_type_career === 1 && "Carrera de Pregrado"}
                    {career.id_type_career === 2 && "Carrera de Grado"}
                    {career.id_type_career === 3 && "Mestría"}
                    {career.id_type_career === 4 && "Especialización"}
                    {career.id_type_career === 5 && "Diplomatura"}
                  </p>
                  <p className="card-text mb-0">
                    Modalidad:
                    {career.id_modality === 1 && "Presencial"}
                    {career.id_modality === 2 && "A distancia"}
                    {career.id_modality === 3 && "Presencial - A distancia"}
                  </p>
                  <p className="card-text mb-0">
                    Fecha de inicio: {career.start_date}
                  </p>
                  <p className="card-text mb-0">
                    {career.duration} {career.id_time_unit === 1 && "años"}
                    {career.id_time_unit === 2 && "meses"}
                    {career.id_time_unit === 3 && "semanas"}
                  </p>
                  <div className="w-100 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Ver Carrera
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            {career.name}
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="d-flex flex-column justify-content-between">
                            <div className="">
                              <h5 className="card-title mb-0"> Dictado en </h5>
                              <p className="card-text mb-0">
                                {career.id_type_career === 1 &&
                                  "Carrera de Pregrado"}
                                {career.id_type_career === 2 &&
                                  "Carrera de Grado"}
                                {career.id_type_career === 3 && "Mestría"}
                                {career.id_type_career === 4 &&
                                  "Especialización"}
                                {career.id_type_career === 5 && "Diplomatura"}
                              </p>
                              <p className="card-text mb-0 d-flex">
                                Modalidad:{" "}
                                {career.id_modality === 1 && "Presencial"}
                                {career.id_modality === 2 && "A distancia"}
                                {career.id_modality === 3 &&
                                  "Presencial - A distancia"}
                              </p>
                              <p className="card-text mb-0">
                                Fecha de inicio: {career.start_date}
                              </p>
                              <p className="card-text mb-0">
                                Duracion: {career.duration}{" "}
                                {career.id_time_unit === 1 && "años"}
                                {career.id_time_unit === 2 && "meses"}
                                {career.id_time_unit === 3 && "semanas"}
                              </p>
                            </div>
                            <button
                              className="modal-footer d-flex justify-content-end align-items-center p-0"
                              data-bs-dismiss="modal"
                            >
                              <Link
                                to={`/career/${career.id}`}
                                className="btn w-100 p-1"
                              >
                                Ver Carrera
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{careers}</>;
};

export const ResultCard = ({ nData, optionSelected }) => {
  return (
    <>
      {optionSelected === "university" ? (
        <InstituteResultCard nData={nData} />
      ) : (
        <CareerResultCard nData={nData} />
      )}
    </>
  );
};
