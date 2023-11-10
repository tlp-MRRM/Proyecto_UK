btnLogout.addEventListener('click', async () => {
    console.log('MESSI')
    const result = await Swal.fire({
        title: '¿Cerrar sesion?',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Cerrar sesion',
        cancelButtonText: 'Cancelar'
    })
    if (!result.isConfirmed) {
        return
    }
    const response = await fetch('http://localhost:5000/api/logout')
    if (response.ok) {
        console.log('Sesion cerrada correctamente')
        setTimeout(() => {
            window.location.href = `http://localhost:5000/iniciar-sesion`
        }, 0);
    }
    localStorage.removeItem('token');

})