export const InstituteCard = ({ institute }) => {
  const category = institute.id_category === 1 ? 'Publica' : 'Privada';

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{institute.name}</h5>
            <p className="card-text">{institute.description}</p>
            <p className="card-text">{category}</p>
            <div className="card-footer">
              <a href="/">ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
