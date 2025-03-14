let amigos = [];


function agregarAmigo() {



    let amigo = document.getElementById('amigo').value; // toma el valor del input

    if (amigo.length > 0) {  

    amigo = amigo.trim(); // elimina los espacios en blanco al inicio y al final
    amigo = amigo.toLowerCase(); // convierte a minúsculas para que no haya problemas con las mayúsculas y minúsculas


    if (amigos.includes(amigo)) { //se comprueba si el amigo ya existe en el array
       alert('El amigo ya existe'); // si ya existe se muestra un mensaje
       
        return;
    }
    else {

        
        console.log('El amigo no existe'); // si no existe se agrega al array
        amigos.push(amigo);
        document.getElementById('amigo').value = ''; // se limpia el input  
        mostrarAmigos(); // se llama a la función para mostrar los amigos
    }


}
else {
    alert('Por favor, inserte un nombre.'); // si el input esta vacio se muestra un mensaje
    

}

}

function mostrarAmigos() {

    
    listaAmigos.innerHTML = '';

amigos.forEach(function(amigo) { // se recorre el array y se muestra en consola
     // se limpia el html

     formatearNombre(amigo);
    document.getElementById('listaAmigos').innerHTML += `<li>${formatearNombre(amigo)}</li>`; // se muestra en el html 

});
}

function formatearNombre(nombre) {
    return nombre.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' '); // se formatea el nombre para que la primer letra sea mayuscula
}

function sortear() { 
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Se hace uso de la funcion Math.random para sortear un amigo
     document.getElementById('resultado').innerHTML = formatearNombre(amigoSorteado); // se muestra en el html
}   
     
function sortearAmigo() {

    amigos.length > 1 ? sortear() : alert('No hay suficientes amigos para sortear'); // se utiliza un operador ternario para comprobar si hay valores dentro del array amigos                   
}
