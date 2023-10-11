form = document.getElementById('login-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('login-form'));
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(user)

    const response = await fetch("http://localhost:5000/api/iniciar-sesion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
});