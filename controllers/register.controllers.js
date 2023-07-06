const ctrlRenderForms = {}
const ctrl = {}
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
ctrl.agregarInstituto = async (req, res) => {
    const {
        name,
        id_category,
        id_ubication,
        duration,
        id_time_unit,
        id_modality,
        final_title,
        id_institute,
        id_career
    } = req.body;
    try {
        const institute = await institute.create({
            name,
            id_type_career,
            start_date,
            id_category,
            id_ubication,
            duration,
            id_time_unit,
            id_modality,
            final_title,
            id_institute,
            id_career
        });
        return res.json(institute);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear el instituto'
        });
    }
}

ctrl.agregarCarrera = async (req, res) => {
    const {
        name,
        id_type_career,
        start_date,
        duration,
        id_time_unit,
        id_modality,
        final_title,
        id_institute,
        id_career
    } = req.body;
    try {
        const career = await career.create({
            name,
            id_type_career,
            start_date,
            duration,
            id_time_unit,
            id_modality,
            final_title,
            id_institute,
            id_career
        });
        return res.json(career);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la carrera'
        });
    }
}


module.exports = ctrlRenderForms

