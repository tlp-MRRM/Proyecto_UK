
function get (req, res) {
    res.render('views/login/login.ejs')
}

function post() {
    res.send('Hello world post')
};  

function put() {
    res.send('Hello put')
};


function deelete() {
    res.sendf('Hello Delete option')
}

module.exports = {
    post,
     put, 
     deelete, 
     get
}