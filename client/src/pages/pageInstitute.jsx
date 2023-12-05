import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


//header autorization token
export const PageInstitute = () => {
  const { id } = useParams();

  const [institute, setInstitute] = useState([]);   

  useEffect(() => {
    try {
      const getInstitute = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:5000/institute/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await response.json();
        console.log(data.Contact);
        setInstitute(data);
      };
      getInstitute(); 
    } catch (error) {
      console.log("Error al obtener instituto", error);
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center">{institute?.name}  </h3>
                <hr />
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img
                      src="https://www.ieslasencinas.es/wp-content/uploads/2020/03/LOGO-IES-LAS-ENCINAS.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <h5 className="card-title">Abreviación:</h5>
                    <p className="card-text">{institute?.name}</p>
                    <h5 className="card-title">Dirección:</h5>
                    <p className="card-text">{institute.Contact?.mail}</p>
                    <h5 className="card-title">Teléfono</h5>
                    <p className="card-text">{institute.Contact?.tel}</p>
                    <h5 className="card-title">Descripcion:</h5>
                    <p className="card-text">{institute?.description}</p>
                    <h5 className="card-title">Ubicacion</h5>
                    <Link to = {institute.Ubication?.map_link} target="_blank" className="btn btn-primary p-1">Ver ubicación</Link>       
                    <h5 className="card-title">Pagina web</h5>       
                    <Link to = {institute.Contact?.web_link} target="_blank" className="btn btn-primary p-1">Sitio oficial</Link>       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
