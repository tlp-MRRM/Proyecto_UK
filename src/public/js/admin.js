const myModal = new bootstrap.Modal("#myModal"); //el modal
const boton = document.getElementById("btnEditar");
const table = document.getElementById("usersList");

// boton.addEventListener('click', () => {
//     myModal.show()
// })

// document.addEventListener('click', (event) => {
//     if(event.srcElement.id === 'btnEditar') {

//     }
// })

const eliminarReserva = async (e) => {
  const id = e.target.dataset.id;
  console.log(id);

  // Se pregunta al usuario si está seguro de eliminar la reserva
  const result = await Swal.fire({
    title: "¿Está seguro de eliminar el?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  });

  if (!result.isConfirmed) {
    return;
  }

  const response = await fetch(`/eliminar-usuario/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (response.status !== 200) {
    Swal.fire({
      title: "Error",
      text: data.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  Swal.fire({
    title: "Usuario eliminado",
    text: data.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  const trToDelete = document.querySelector(`tr[data-id="${id}"]`);
  if (trToDelete) {
    trToDelete.remove();
  }
};

// const btnDelete = document.getElementById('btnDelete')
// btnDelete.addEventListener('click', eliminarReserva)
// const editarUsuario = (id) => {
//     window.location.href = `/editar-usuario/${id}`;
// }
const editarUsuario = async (req, res) => {
  const id = req.params.userId; // Asegúrate de que estás obteniendo el ID correctamente desde la URL
  const { firstName, lastName, email } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Actualiza los datos del usuario
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    await user.save();

    res.status(200).json({ message: "Usuario editado exitosamente" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const modal = new bootstrap.Modal("#myModal");
const inputName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputEmail = document.getElementById("inputEmail");
const formulario = document.getElementById("form");

//esto es solo para editar

const openModal = (e) => {
  modal.show();
  const idFila = e.target.dataset.id;
  const fila = document.querySelector(`tr[data-id="${idFila}"]`);
  const inputNameValue = fila.children[1].textContent;
  const inputLastNameValue = fila.children[2].textContent;
  const inputEmailValue = fila.children[3].textContent;

  inputName.value = inputNameValue.trim();
  inputLastName.value = inputLastNameValue.trim();
  inputEmail.value = inputEmailValue.trim();

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const newName = inputName.value;
    const newEmail = inputEmail.value;
    const newLastName = inputLastName.value;

    const data = {
      firstName: newName,
      lastName: newLastName,
      email: newEmail,
    };

    fetch(`/editar-usuario/${idFila}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        alert("actualizado");
        location.reload();
      } else {
        alert("error");
      }
    });
  });
};

// document.addEventListener('click', (event) => {
//     console.log(event)
//     if (event.target.classList.contains('btnEdit')){
//         modal.show()
//         const fila = event.target.closest(".dato")
//         //const fila2 = event.target.parentNode.parentNode
//         const idFila = fila.dataset.id
//         const inputNameValue = fila.children[1].textContent
//         const inputLastNameValue= fila.children[2].textContent
//         const inputEmailValue = fila.children[3].textContent

//         inputName.value = inputNameValue.trim();
//         inputLastName.value = inputLastNameValue.trim();
//         inputEmail.value = inputEmailValue.trim();

//         formulario.addEventListener('submit', (event) => {
//             event.preventDefault()

//             const newName = inputName.value;
//             const newEmail = inputEmail.value;
//             const newLastName =inputLastName.value;

//             const data = {
//                 firstName: newName,
//                 lastName: newLastName,
//                 email: newEmail
//             }

//             fetch(`/editar-usuario/${idFila}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             }).then(res => {
//                 if(res.ok){
//                     alert('actualizado')
//                     location.reload()
//                 } else {
//                     alert('error')
//                 }
//             })

//         })
//     }
// })

//         formulario.addEventListener('submit', (event) => {
//             event.preventDefault()

//             //aca tenes que hacer el fetch pasandole el idfila y los datos de input actual

//         const newName = inputName.value;
//         const newEmail = inputEmail.value;
//         const newLastName =inputLastName.value;

//         const data = {
//             id: idFila,
//             name: newName,
//             lastName: newLastName
//             Email: newEmail
//         }

//         fetch('/admin-users/${id}'), {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => response.json())
//         .then(responseData => {

//             alert('Registro actualizado con éxito');
//             location.reload();
//         })
//         .catch(error => {

//             console.error('Error al actualizar el registro:', error);
//         });
// });
//             alert(idFila)

//             location.reload()
//         })
//     }
// })
