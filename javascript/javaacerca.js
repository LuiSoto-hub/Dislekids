
function mostrarMensaje() {
    alert("¡Hola! Este es un mensaje de prueba.");
}

function cambiarColor() {
    var body = document.querySelector('body');
    var currentColor = body.style.backgroundColor;
    var newColor = currentColor === 'pink' ? '#f0f0f0' : 'pink';
    body.style.backgroundColor = newColor;
}
