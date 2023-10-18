const form = document.getElementById("formRegister")
alert('Se cargo js')
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form)
    const newUser = {
        firstName: data.get("name"),
        lastName: data.get("surname"),
        email: data.get("email"),
        password: data.get("password")
    }
    const response = await fetch(`http://localhost:5000/api/registro-usuario`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
    })
    console.log(JSON.stringify(newUser))

    const body = await response.json();

    if (!response.ok) {
        console.log("Hubo un error en crear", body)
    }

    console.log(body)
})

