const ctrlRenderForms = {}

ctrlRenderForms.renderRegisterInstitute = (req, res) => {
    res.render("form.institute/index.ejs")
}

ctrlRenderForms.renderRegisterCareers = (req, res) => {
    res.render("form.institute/register-career")
}


   
 module.exports = ctrlRenderForms

