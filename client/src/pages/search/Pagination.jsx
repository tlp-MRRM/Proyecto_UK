import React from "react";
import styles from "../../../public/css/pagination.module.css";
export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const next = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* <div
        className={`d-flex align-items-center justify-content-center ${styles.paginationContainer}`}
      >
        <h5 onClick={prev} className={styles.h3}>
          Prev
        </h5>
        <h3 className={`text-center pe-4 ps-4 ${styles.h3}`}>
          {currentPage} / {nPages}
        </h3>
        <h5 onClick={next} className={styles.h3}>
          Next
        </h5>
      </div> */}

      <nav aria-label="Page navigation example" className="pt-2">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
          </li>
          {Array.from({ length: nPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === nPages ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
