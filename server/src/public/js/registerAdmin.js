const form = document.getElementById("formRegister")
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form)
    if (data.get('isAdmin') == 'on') {
        role = 'admin'
    }
    else {
        role = 'institute'
    }

    const newUser = {
        firstName: data.get("name"),
        lastName: data.get("surname"),
        email: data.get("email"),
        password: data.get("password"),
        role: role
    }
    try {
        const response = await fetch(`http://localhost:5000/api/register-admin`, {
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
                confirmButtonText: '<a href="http://localhost:5000/admin-users" style="color: #FFFFFF; text-decoration: none;" >Ir a administrar usuarios</a>',
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
        console.log('error al crear usuario', error)
        Swal.fire({
            title: 'Error Catch',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok',
        })
    }
})

