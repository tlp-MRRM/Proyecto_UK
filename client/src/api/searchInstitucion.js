import swal from "sweetalert2";

export const requestSearchInstitute = async (name) => {
  const response = await fetch(`http://localhost:5000/api/search-institutes?name=${name}`);
  if (!response.ok) throw new Error("Error en la búsqueda.");
  const institutes = await response.json();
  return institutes;
};
export const requestSearchCareer = async (name) => {
  const response = await fetch(`http://localhost:5000/api/search-careers?name=${name}`);
  if (!response.ok) throw new Error("Error en la búsqueda.");
  const careers = await response.json();
  return careers;
}

export const searchInstitute = async (name) => {

  try {
    const institutes = await requestSearchInstitute(name);

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
      return [];
    } else {
      return institutes;
    }
  } catch (error) {
    console.log(error);
  }
}
export const searchCareer = async (name) => {
  try {
    const careers = await requestSearchCareer(name);
    if (careers.length === 0) {
      swal.fire({
        toast: true,
        icon: "error",
        position: "top-start",
        title: "Oops...",
        text: "No se encontraron carreras con ese nombre",
        timer: 2000,
        showConfirmButton: false,
      });
      return [];
    } else {
      return careers;
    }
  } catch (error) {
    console.log(error);
  }
}