export const searchInstitucion = async (name) => {
  const response = await fetch(`http://localhost:5000/buscar?name=${name}`);
  if (!response.ok) throw new Error("Error en la búsqueda.");
  const institutes = await response.json();
  return institutes;
};
