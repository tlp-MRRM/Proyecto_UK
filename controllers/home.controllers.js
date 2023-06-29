
function get(req, res) {
    //llamar a la base de datos, traer una lista de provincias 
    res.render('home/index.ejs')
};
function post() {
    res.send('Hello world post')
};  

function put() {
    res.send('Hello put')
};


function deletee() {
    res.send('Ello delete')
}

module.exports = {
    get,
    post,
    put,
    deletee
}