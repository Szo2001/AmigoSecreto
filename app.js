let nombres = []; // Se crea el array para almacenar los nombres de los amigos.

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length == 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    
    let elegido = Math.floor(Math.random() * nombres.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = "El amigo sorteado es: " + nombres[elegido];
    resultado.appendChild(li);
}
