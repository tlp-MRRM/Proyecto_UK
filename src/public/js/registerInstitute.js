

//Select Provinces ====================================================================================
const selectProvince = document.getElementById('province');
const selectLocality = document.getElementById('locality');
const fetchProvinces = async () => {
    const response = await fetch('http://localhost:5000/api/provincias')
    if (response.status === 404) {
        return [];
    }

    return response.json();

}
document.addEventListener('DOMContentLoaded', async () => {
    alert('SE CARGO EL JS')
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

const fetchLocalities = async () => {
    id_province = selectProvince.value
    const response = await fetch(`http://localhost:5000/api/provincia/${id_province}/localidades`)
    if (response.status === 404) {
        return [];
    }
    return response.json();
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
//Select Provinces ====================================================================================


//Register institute ==================================================================================
const formulario = document.getElementById('formAgregarInstituto');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('formAgregarInstituto'));
    const institute = {
        name: formData.get('name'),
        abbreviation: formData.get('abbreviation'),
        id_category: formData.get('category'),
        id_locality: formData.get('locality'),
        postal_code: parseInt(formData.get('postal_code')),
        street: formData.get('street'),
        id_user: formulario.dataset.id,
        altitude: formData.get('altitude'),
        map_link: formData.get('map_link'),
        mail: formData.get('mail'),
        tel: formData.get('tel'),
        web_link: formData.get('web_link'),
        year_fundation: formData.get('year_fundation'),
        description: formData.get('description')
    }

    console.log('institute:', institute)
    try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:5000/api/instituto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(institute)
        })

        const data = await response.json();

        if (response.ok) {
            Swal.fire({
                title: 'Hecho',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Se le rediccionará en unos segundos',
            })
            console.log(data)
            setTimeout(async () => {
                window.location.href = `http://localhost:5000/instituto/${data.id_institute}`;
                const responseInstitutes = await fetch('http://localhost:5000/api/get-institutes-by-user', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id_user: id })
                })
            }, 2000);
        } else {
            Swal.fire({
                title: 'Error',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        }
    } catch (error) {
        console.log('error al crear el instituto', error)
        Swal.fire({
            title: 'Error Catch',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok',
        })
    }
});
//Register institute ==================================================================================