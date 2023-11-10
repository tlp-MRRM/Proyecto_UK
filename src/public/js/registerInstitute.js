

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
            var errorMsgs = "";
            for (var i = 0; i < data.errors.length; i++) {
                console.log(data.errors[i].msg)
                errorMsgs += data.errors[i].msg + "\n";
            }
            Swal.fire({
                title: 'Error',
                text: errorMsgs,
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
let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
        mapTypeControl: false,
    });
    geocoder = new google.maps.Geocoder();

    const inputText = document.createElement("input");

    inputText.type = "text";
    inputText.placeholder = "Enter a location";

    const submitButton = document.createElement("input");

    submitButton.type = "button";
    submitButton.value = "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");

    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");
    response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const instructionsElement = document.createElement("p");

    instructionsElement.id = "instructions";
    instructionsElement.innerHTML =
        "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(
        instructionsElement
    );
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
    marker = new google.maps.Marker({
        map,
    });
    map.addListener("click", (e) => {
        geocode({ location: e.latLng });
    });
    submitButton.addEventListener("click", () =>
        geocode({ address: inputText.value })
    );
    clearButton.addEventListener("click", () => {
        clear();
    });
    clear();
}

function clear() {
    marker.setMap(null);
}

function geocode(request) {
    clear();
    geocoder
        .geocode(request)
        .then((result) => {
            const { results } = result;

            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            response.innerText = JSON.stringify(result, null, 2);
            return results;
        })
        .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
        });
}

window.initMap = initMap;
//Register institute ==================================================================================