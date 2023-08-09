
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
    const errores = ''
    if (institute.name.length < 3){
        errores += 'El nombre es demaciado corto'
    }
    if (institute.id_category = null){
        errores +='seleccione una categoria'
    }
    if (institute.id_locality = null){
        errores +='seleccione un localidad'
    }
    if(institute.postal_code.length < 4 || institute.postal_code < 0){
        errores+= "el codigo postal no es valido"
    }
    if (institute.altitude < 1) {
        errores+='la altitud no puede un numero negativo';
    }
    if (institute.map_link.length < 200){
        errores+='El link de google maps no es valido'
    }
    if (institute.mail.length < 15){
        errores+= 'El mail es invalido'
    }
    if (institute.phone.length < 4){
        errores+= 'La telefono debe tener maximo 9 digitos'
    }
    if (institute.year_fundation > currentYear){
        errores+='El año no puede ser mayor al actual'
    }
    if (institute.description.length > 20){
        errores += 'La descripcion es demasiado corta, debe ser mayor a 20 caracteres'
    }
    if (institute.description.length < 255){
        errores += 'La descripcion es demasiado larga, debe ser menor a 255 caracteres'
    }
    if (errores.length > 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${errores}`,
        });
        return;
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





// Función para registrar el instituto
// async function registrarInstituto() {
//   const formData = new FormData(document.getElementById('formAgregarInstituto'));
//   try {
//     const contactData = {
//       mail: formData.get('mail'),
//       tel: formData.get('phone'),
//       weblink: formData.get('webLink')
//     };

//     const ubicationData = {
//       idLocality: formData.get('locality'),
//       street: formData.get('street'),
//       altitude: formData.get('altitude'),
//       postalCode: formData.get('postalCode'),
//       mapLink: formData.get('mapLink')
//     };

//     const contactResponse = await fetch('/api/contacto', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(contactData)
//       });
  
//       const createdContact = await contactResponse.json();
//       const idContact = createdContact.id;

//       const ubicationResponse = await fetch('/api/ubicacion', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(ubicationData)
//       });
  
//       const createdUbication = await ubicationResponse.json();
//       const idUbication = createdUbication.id;

    

//     const instituteData = {
//       status: true,
//       name: formData.get('name'),
//       abbreviation: formData.get('abbreviation'),
//       idCategory: formData.get('category'),
//       idInstitute: null, // No se usa aquí porque es la primera inserción
//       idUbication: idUbication,
//       idContact: idContact,
//       yearFundation: formData.get('yearFundation'),
//       description: formData.get('description')
//     };
//     const instituteResponse = await fetch('/api/institute', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(instituteData)
//     });

//     if (instituteResponse.ok) {
//       // Todo se insertó correctamente
//       alert('Instituto registrado exitosamente.');
//       // Redirigir o hacer algo más si es necesario
//     } else {
//       // Hubo un problema con la inserción en la tabla institute
//       alert('Error al registrar el instituto.');
//     }
//   } catch (error) {
//     console.error('Error al registrar el instituto:', error);
//     alert('Hubo un error al registrar el instituto.');
//   }
// }






// const formNewInstitute = document.querySelector('#formAgregarInstituto');
// formNewInstitute.addEventListener('submit', async (e) => {
//     e.preventDefault();

   
//     const selectCategory = document.querySelector('#category');
//     const formData = new FormData(formNewInstitute);
//     const instituto = {
//         name: formData.name,
//         abbreviation : formData.abbreviation,
//         category : selectCategory.value,
//         province : selectProvince.value,
//         locality : selectLocality.value,
//         postalCode : formData.postalCode,
//         street : formData.street,
//         altitude : formData.altitude,
//         mapLink : formData.mapLink,
//     }
//     console.log(instituto)
// });




    // const formFile = document.getElementById('formFile')
    
    // function preview() {
    //     frame.src = URL.createObjectURL(event.target.files[0]);
    // }
    
    // formFile.addEventListener('change', preview);