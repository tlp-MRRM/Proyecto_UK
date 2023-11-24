const form = document.getElementById("formRegister")
alert('Se cargo el js')
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form)
    const newUser = {
        firstName: data.get("name"),
        lastName: data.get("surname"),
        email: data.get("email"),
        password: data.get("password"),
        role: 'user'
    }
    try {
        const response = await fetch(`http://localhost:5000/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser),
        })
        const data = await response.json();
        if (response.ok) {
            Swal.fire({
                title: 'Hecho',
                text: data.message,
                icon: 'success',
                confirmButtonText: '<a href="http://localhost:5000/" style="color: #FFFFFF; text-decoration: none;" >Ok</a>',
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        }
    } catch (error) {
        console.log('Error al registrarse', error)
        Swal.fire({
            title: 'Error Catch',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok',
        })
    }
})

