function generarCarta() {
    var palo = obtenerPaloAleatorio();
    var valor = obtenerValorAleatorio();
    
    var carta = document.getElementById("carta");
    carta.className = "card " + palo;
    carta.innerHTML = valor;
}

function obtenerPaloAleatorio() {
    var palos = ["spade", "club", "heart", "diamond"];
    var indice = Math.floor(Math.random() * palos.length);
    return palos[indice];
}

function obtenerValorAleatorio() {
    var valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var indice = Math.floor(Math.random() * valores.length);
    return valores[indice];
}
