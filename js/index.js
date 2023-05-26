
const textContainer = document.getElementById("container")
textoArea = document.getElementById("texto");
btnEncriptar = document.getElementById("Encri")
btnDesencriptar = document.getElementById("Desencri")
recordatorio = document.getElementById("recordatorio")
ventana = document.getElementById("alert")
equis = document.getElementById("equis")
buttonCopy = document.getElementById("copiar");

function detectarMayuscula() {
  // value in textarea
  var textareaValor = document.getElementById('texto').value;

  // verify if letter lowerup
  if (/[A-Z]/.test(textareaValor)) {
    // change color re if the condition 
    recordatorio.style.color = 'red';
    recordatorio.style.fontSize = "30px";
    ventana.style.opacity = '1';
    ventana.style.transform = "translate(-50%, -50%)";
  } else {
    // change color of default
    recordatorio.style.color = 'gray';
  }
}

function Encriptar(texto) {
  buttonCopy.style.opacity = "1"

  return texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}



equis.addEventListener('click', function () {

  var window = document.querySelector('#alert');

  window.style.opacity = '0';
  window.style.display = 'none';

});

btnEncriptar.onclick = function (event) {
  if (detectarMayuscula()){
    return "Escribe bien los valores"}
  else{
    event.preventDefault() 
    textContainer.textContent = Encriptar(textoArea.value)
  }
}

// Desencriptado
function Desencriptar(texto) {
  return texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}


btnDesencriptar.onclick = function (event) {
  event.preventDefault()
  textContainer.textContent = Desencriptar(textoArea.value)
  detectarMayuscula()
}

// copy clipboard
function copiarTexto() {
  const contenedor = document.getElementById('container');

  const elementoTemporal = document.createElement('textarea');
  elementoTemporal.value = contenedor.innerText;

  document.body.appendChild(elementoTemporal);

  elementoTemporal.select();

  document.execCommand('copy');

  document.body.removeChild(elementoTemporal);
}

buttonCopy.addEventListener('click', copiarTexto);

while (Desencriptar == true) {
  Encriptar == false
}