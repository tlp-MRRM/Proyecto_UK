const formFile = document.getElementById('formFile')

function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}

formFile.addEventListener('change', preview);
