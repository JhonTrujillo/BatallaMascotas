function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes") //Selecionamos la Section donde se inserta el mensaje
    let parrafo = document.createElement('p')//Creamos elemento de tipo "p"
    //creamos el mensaje con js
    parrafo.innerHTML = "Tu mascota ataco con "+ ataqueJugador + ",La mascota del rival ataco con " + ataqueRival + " - " + resultado
    sectionMensajes.appendChild(parrafo) // insertamos el mensaje
}