import styles from "../../../../public/css/instituteCard.module.css";
import { Link } from "react-router-dom";
export const InstituteCard = ({ institute }) => {
  return (
    <div className={`card ${styles.instituteCard} mb-3`}>
      <div className="row g-0">
        <div className="col">
          <div className="card-body p-0">
            <h5 className="card-title">{institute.name}</h5>
            <p className="card-text">{institute.description}</p>
            <div className="card-footer d-flex justify-content-end align-items-center p-0">
              <Link to={`/instituto/${institute.id}`} className="btn btn-primary p-1">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
