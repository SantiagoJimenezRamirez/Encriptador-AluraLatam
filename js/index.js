// Encriptado

function Encriptar(texto) {

    return texto.replace(/e/ig, "enter")
        .replace(/i/ig, "imes")
        .replace(/a/ig, "ai")
        .replace(/o/ig, "ober")
        .replace(/u/ig, "ufat")

}

const textContainer = document.getElementById("container")
textoArea = document.getElementById("texto");
btnEncriptar = document.getElementById("Encri")
btnDesencriptar = document.getElementById("Desencri")
recordatorio = document.getElementById("recordatorio")
ventana = document.getElementById("alert")
equis = document.getElementById("equis")

equis.addEventListener('click', function() {
  // Obtener la referencia a la ventana
  var window = document.querySelector('#alert');
  
  // Desvanecer la ventana utilizando CSS
  window.style.opacity = '0';

  // Opcional: eliminar la ventana del DOM después de un retraso
  setTimeout(function() {
    window.style.display = 'none';
  }, 1000); // Desaparece después de 1 segundo (1000 milisegundos)
});

function detectarMayuscula() {
    // value in textarea
    var textareaValor = document.getElementById('texto').value;
  
    // verify if letter lowerup
    if (/[A-Z]/.test(textareaValor)) {
      // change color re if the condition 
      recordatorio.style.color = 'red';
      recordatorio.style.fontSize = "30px";
      ventana.style.opacity= "1"
      
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

