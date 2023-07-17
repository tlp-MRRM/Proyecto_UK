ctrlRenderHome = {}

ctrlRenderHome.inicio = (req, res) => {
    res.render('home/index.ejs')
};

module.exports = ctrlRenderHome