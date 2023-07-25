
const selectProvince = document.getElementById('province');
const selectLocality = document.getElementById('locality');

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
    const response = await fetch('http://localhost:5000/api/localidades')
    if (response.status === 404) {
        return [];
      }
    
      return response.json();
}
selectProvince.addEventListener('change', async () => {
    const idProvince = selectProvince.value
    const localities = await fetchLocalities
})


    // const formFile = document.getElementById('formFile')
    
    // function preview() {
    //     frame.src = URL.createObjectURL(event.target.files[0]);
    // }
    
    // formFile.addEventListener('change', preview);