const form = document.getElementById("register")

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form)
    

    const response = await fetch("/registro-usuario", {
        body: JSON.stringify({
            name: data.get("name"),
            surname: data.get("surname"),
            email: data.get("email"),
            password: data.get("password")

        }),


        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }


    })
    const body = await response.json();
    
    if (!response.ok) {
        console.log("Hubo un error en crear", body)
    }
    
    console.log(body)
})

