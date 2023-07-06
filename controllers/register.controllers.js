const ctrlRenderForms = {}
ctrlRenderForms.renderRegisterInstitute = (req, res) => {
    res.render("register/register")
}

ctrlRenderForms.renderRegisterCareers = (req, res) => {
    res.render("form.institute/register-career")
}

ctrlRenderForms.renderInstituteProfile = (req, res) => {
    res.render('user.institute/index')
}
//CRUD

// ctrl.agregarCarrera = async (req, res) => {
//     const {
//         name,
//         id_type_career,
//         start_date,
//         duration,
//         id_time_unit,
//         id_modality,
//         final_title,
//         id_institute,
//         id_career
//     } = req.body;
//     try {
//         const reserva = await Reserva.create({
//             codigo: new Date().getTime(),
//             nombre,
//             apellido,
//             dni,
//             fechaIda,
//             fechaVuelta,
//             precio
//         });
//         return res.json(reserva);
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             message: 'Error al crear la reserva'
//         });
//     }
// }

   
 module.exports = ctrlRenderForms

