const btnLogout = document.getElementById('btnLogout')
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
const eliminarReserva = async (e) => {
    const id = e.target.dataset.id;

    // Se pregunta al usuario si está seguro de eliminar la reserva
    const result = await Swal.fire({
        title: '¿Está seguro de eliminar el?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    })

    if (!result.isConfirmed) {
        return;
    }

    const response = await fetch(`/eliminar-usuario/${id}`, {
        method: 'DELETE',
    })

    const data = await response.json();

    if (response.status !== 200) {
        Swal.fire({
            title: 'Error',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    Swal.fire({
        title: 'Usuario eliminado',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
    setTimeout(() => {
        window.location.href = `http://localhost:5000/admin-users`
    }, 2000);
}
const editarUsuario = (id) => {
    window.location.href = `/editar-usuario/${id}`;
}




