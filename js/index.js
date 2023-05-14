// Encriptado

function Encriptar(texto) {

    return texto.replace(/e/ig, "enter")
        .replace(/i/ig, "imes")
        .replace(/a/ig, "ai")
        .replace(/o/ig, "ober")
        .replace(/u/ig, "ufat")

}

const textContainer = document.getElementById("container")
const textoArea = document.getElementById("texto");

const btnEncriptar = document.getElementById("Encri")
const btnDesencriptar = document.getElementById("Desencri")
const recordatorio = document.querySelector("p")



// add a event  listening for detection a letter to uppercase in the text

function changeColortexto() {
    addEventListener(textoArea, function () {
    // obtain the value of the text
const text = textoArea.value
    // Verify if the letters in textarea is uppercase 
    var ultimoCaracter = text.charAt(text.length - 1);
    if (ultimoCaracter === ultimoCaracter.toUpperCase() && ultimoCaracter.match(/[A-Z]/i)) {
        // If some letter is uppercase change color
        recordatorio.style.color = 'red'; // change to the color you want
    } else {
        //if not a uppercase, return color
        recordatorio.style.color = 'black'; // change color to default
    }
});
}


btnEncriptar.onclick = function (event) {
    event.preventDefault()
    textContainer.textContent = Encriptar(textoArea.value)
    changeColortexto();
}

// Desencriptado

function Desencriptar(texto) {
    return texto.replace(/enter/ig, "e")
        .replace(/imes/ig, "i")
        .replace(/ai/ig, "a")
        .replace(/ober/ig, "o")
        .replace(/ufat/ig, "u")
}




btnDesencriptar.onclick = function (event) {
    event.preventDefault()
    textContainer.textContent = Desencriptar(textoArea.value)
}

