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
const recordatorio = document.getElementById("recordatorio")


function detectarMayuscula() {
    // value in textarea
    var textareaValor = document.getElementById('texto').value;
  
    // verify if letter lowerup
    if (/[A-Z]/.test(textareaValor)) {
      // change color re if the condition 
      recordatorio.style.color = 'red';
    } else {
      // change color of default
      recordatorio.style.color = 'black';
    }
  }


btnEncriptar.onclick = function (event) {
    event.preventDefault()
    textContainer.textContent = Encriptar(textoArea.value)
    detectarMayuscula();
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

