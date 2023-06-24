
function get() {
    res.send('')
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