const botonEstilo = document.getElementById('botonEstilo');
botonEstilo.addEventListener('click',cambiarEstilo);

//const botonFormulario = document.addEventListener('click',obtenerValoresFormulario());



function cambiarEstilo(){

    let parrafo = document.getElementById('parrafo');
    parrafo.style.fontSize = '30px';
    parrafo.style.color = 'blue';
    console.log("Clickkkk primera tarea :)")
}


function obtenerValoresFormulario(event){
    event.preventDefault();
   // console.log("prueba tarea 2");
    let nombre = document.forms[0].elements[0].value;
    let apellido = document.forms[0].elements[1].value;
    console.log(nombre);
    console.log(apellido);

}


const buttonEnlaces = document.getElementById('botonEnlaces').addEventListener('click',alertaEnlaces)
function alertaEnlaces(){
    let cantidadEnlaces = document.querySelectorAll('a');
    alert(`Hay ${cantidadEnlaces.length} enlaces en la página. 
        1. ${cantidadEnlaces[0]}
        2. ${cantidadEnlaces[cantidadEnlaces.length-1]}`)
}



const seccionContenedor = document.getElementById('contenedor');
const elementosLista = document.getElementsByClassName('segundo');

seccionContenedor.innerHTML = "¡Hola!"
