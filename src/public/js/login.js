form = document.getElementById('login-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('login-form'));
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(user)

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })


    if (!response.ok) {
        const { message } = await response.json();
        return Swal.fire('Error', message, 'error');
    }

    const { message, token, id, isAdmin } = await response.json()
    console.log('IS ADMIN ACA ========================')
    console.log(isAdmin)

    localStorage.setItem('token', token);

    Swal.fire('Inicio de sesion exitoso', message, 'success');
    if (isAdmin == true) {
        setTimeout(() => {
            window.location.href = 'http://localhost:5000/admin-users';
        }, 2000);
    } else {
        setTimeout(async () => {
            const responseInstitutes = await fetch('http://localhost:5000/api/get-institutes-by-user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id_user: id })
            })
            if (responseInstitutes.ok) {
                return window.location.href = `http://localhost:5000/instituto/${id}`;
            }
            window.location.href = `http://localhost:5000/nueva-institucion`;

        }, 2000);
    }
});