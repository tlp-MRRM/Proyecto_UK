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

    const { message, token, id } = await response.json()

    localStorage.setItem('token', token);

    Swal.fire('Inicio de sesion exitoso', message, 'success');

    setTimeout(async () => {

        console.log('response')
        const response = await fetch('http://localhost:5000/api/get-institutes-by-user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id_user: id })
        })
        if (response.ok) {
            return window.location.href = `http://localhost:5000/instituto/${id}`;
        }
        window.location.href = `http://localhost:5000/nueva-institucion`;

    }, 2000);
});