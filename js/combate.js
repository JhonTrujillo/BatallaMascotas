let vidasJugador = 3
let vidasRival= 3

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    if(ataqueRival == ataqueJugador){
        crearMensaje(" EMPATE")
     }else if(ataqueJugador == 'FUEGO' && ataqueRival == 'TIERRA'){
        crearMensaje(" GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    }else if(ataqueJugador == "AGUA" && ataqueRival == "FUEGO"){
         crearMensaje(" GANASTE")
         vidasRival--
        spanVidasRival.innerHTML = vidasRival
     }else if(ataqueJugador == "TIERRA" && ataqueRival == "AGUA"){
        crearMensaje(" GANASTE")
        vvidasRival--
        spanVidasRival.innerHTML = vidasRival
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasRival == 0){
        // alert("Ganaste")
        crearMensajeFinal("Ganaste !!!🥳🥳")
    }else if(vidasJugador == 0){
        // alert("Perdiste")
        crearMensajeFinal("Lo siento, Perdiste 😒")
    }
}

function crearMensajeFinal(resultadofinal){
    //desocultar boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("mensajes") //Selecionamos la Section donde se inserta el mensaje
    let parrafo = document.createElement('p')//Creamos elemento de tipo "p"
    //creamos el mensaje con js
    parrafo.innerHTML = resultadofinal
    sectionMensajes.appendChild(parrafo) // insertamos el mensaje

    let botonFuego = document.getElementById("btn-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("btn-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("btn-tierra")
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}