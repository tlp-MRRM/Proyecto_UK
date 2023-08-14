
const selectProvince = document.getElementById('province');
const selectLocality = document.getElementById('locality');
const currentYear = new Date().getFullYear();
const fetchProvinces = async () => {
    const response = await fetch('http://localhost:5000/api/provincias')
    if (response.status === 404) {
        return [];
      }
    
      return response.json();

}
document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const provinces = await fetchProvinces()
        provinces.forEach((province) => {
        selectProvince.innerHTML += `
        <option value="${province.id}">${province.province}</option>`
    });
    } catch (error) {
        console.error(error);
    }
})

const fetchLocalities = async ()=> {
    id_province = selectProvince.value
    const response = await fetch(`http://localhost:5000/api/provincia/${id_province}/localidades`)
    if (response.status === 404) {
        return [];
      }
      return response.json();
      console.log(response.json());
}
selectProvince.addEventListener('change', async () => {
    try {
        const localities = await fetchLocalities()
        selectLocality.innerHTML = '<option selected>Selecciona una localidad</option>'
        localities.forEach((locality) => {
            selectLocality.innerHTML += `
            <option value="${locality.id}">${locality.locality}</option>`
        })
    } catch (error) {
        console.error(error);
    }
    
})

// Obtener el botón de registrar y agregar un event listener
// Función para registrar el instituto
// Obtener el botón de registrar y agregar un event listener

const formulario = document.getElementById('formAgregarInstituto');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();   

    const formData = new FormData(document.getElementById('formAgregarInstituto'));
    const institute = {
        name: formData.get('name'),
        abbreviation: formData.get('abbreviation'),
        id_category: formData.get('category'),
        id_locality: formData.get('locality'),
        postal_code: formData.get('postal_code'),
        street: formData.get('street'),
        altitude: formData.get('altitude'),
        map_link: formData.get('map_link'),
        mail: formData.get('mail'),
        phone: formData.get('phone'),
        web_link: formData.get('web_link'),
        year_fundation: formData.get('year_fundation'),
        description: formData.get('description')
    }
    
    console.log('institute:',institute)
    try {
        const response = await fetch('http://localhost:5000/api/instituto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(institute)
        })
        console.log('response:', response)
        console.log('Instituto registrado con éxito')

    } catch (error) {
        console.log('error al crear el instituto', error)
    }
});


1