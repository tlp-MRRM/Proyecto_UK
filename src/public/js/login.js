const form = document.getElementById('login-form')
const validationErr = document.getElementById('validationErr')
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Detiene el envío del formulario
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email')

    if (passwordInput.value.length < 6) {
        validationErr.innerHTML=`<small class="text-danger" >contraseña debe ser mayor a 6 digitos.</small>`;
    } else {
        validationErr.innerHTML=``;
    }

    console.log(passwordInput.value, emailInput.value);

    const response = fetch("/iniciar-sesion", {
        body: JSON.stringify({
            email: emailInput.value, 
            password: passwordInput.value
        }),
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    })
  });