$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
});
var nombre = document.getElementById('correo');
var password = document.getElementById('contraseña');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario()
{
    console.log('Enviando formulario..');
    var mensajesError=[];

    if(nombre.value === null || nombre.value === '')
    {
        mensajesError.push('Ingresa tu correo electronico');
    }
    if(password.value === null || password.value === '')
    {
        mensajesError.push('Ingresa tu password');
    }

   error.innerHTML =  mensajesError.join(',');
    return false;
}
function alerta()
{
    alert("esta sección se encuentra en desarrollo");
}