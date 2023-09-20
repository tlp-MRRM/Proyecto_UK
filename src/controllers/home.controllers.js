const ctrl = {}

ctrl.renderHome = (req, res) => {
    res.render('home/index.ejs')
};

ctrl.renderFaq = (req, res) => {
    res.render('home/faq.ejs')
};
ctrl.renderWorkWithUs = (req, res) => {
    res.render('workWithUs/index.ejs')
}

ctrl.renderAboutUs = (req, res) => {
    res.render('home/about.ejs')
}
export default ctrl