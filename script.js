

const statuTextSib = document.getElementById("statuTextSib");
const statuTextMib = document.getElementById("statuTextMib");
const switchButton = document.getElementById("switchButton");

const botonDo = document.getElementById('btnDo');
const botonDoS = document.getElementById('btnDo#');
const botonRe = document.getElementById('btnRe');
const botonReS = document.getElementById('btnRe#');
const botonMi = document.getElementById('btnMi');
const botonFa = document.getElementById('btnFa');
const botonFaS = document.getElementById('btnFa#');
const botonSol = document.getElementById('btnSol');
const botonSolS = document.getElementById('btnSol#');
const botonLa = document.getElementById('btnLa');
const botonLaS = document.getElementById('btnLa#');
const botonSi = document.getElementById('btnSi');

let msj = document.getElementById('msj')

statuTextSib.style.color = "#F2F2E4";
statuTextMib.style.color = "#151340";
statuTextSib.style.fontWeight = "normal";
statuTextMib.style.fontWeight = "bold";

switchButton.addEventListener("change", function() {
  if (this.checked) {
    statuTextSib.style.color = "#151340";
    statuTextMib.style.color = "#F2F2E4";
    statuTextSib.style.fontWeight = "bold";
    statuTextMib.style.fontWeight = "normal";
    console.log("Botón encendido");
  } else {
    statuTextMib.style.color = "#151340";
    statuTextSib.style.color = "#F2F2E4";
    statuTextMib.style.fontWeight = "bold";
    statuTextSib.style.fontWeight = "normal";
    console.log("Botón apagado");
  }
});

function encendioApagado(nota) {
  
  if (switchButton.checked) {
    switch (nota) {
        case "c":         
        msj.innerHTML = "la nota <strong>C</strong> es <strong>D</strong> en instrumentos en Bb" 
        break;

        case "c#":   
        case "Db":   
        msj.innerHTML = "la nota <strong>C#/Db</strong> es <strong>D#/Eb</strong>  en instrumentos en Bb" 
        break;

        case "d":
        msj.innerHTML = "la nota <strong>D</strong> es <strong>E</strong>  en instrumentos en Bb" 
        break;

        case "d#":
        case "eb":
        msj.innerHTML = "la nota <strong>D#/Eb</strong> es <strong>F</strong>  en instrumentos en Bb" 
        break;

        case "e":
        msj.innerHTML = "la nota <strong>E</strong> es <strong>F#/Gb</strong>  en instrumentos en Bb" 
        break;
        
        case "f":
        msj.innerHTML = "la nota <strong>F</strong> es <strong>G</strong>  en instrumentos en Bb" 
        break;

        case "f#":
        case "gb":
        msj.innerHTML = "la nota <strong>F#/Gb</strong> es <strong>G#/Ab</strong>  en instrumentos en Bb" 
        break;

        case "g":
        msj.innerHTML = "la nota <strong>G</strong> es <strong>A</strong>  en instrumentos en Bb" 
        break;

        case "g#":
        case "ab":
        msj.innerHTML = "la nota <strong>G#/Ab</strong> es <strong>A#/Bb</strong>  en instrumentos en Bb" 
        break;

        case "a":
        msj.innerHTML = "la nota <strong>A</strong> es <strong>B</strong>  en instrumentos en Bb" 
        break;

        case "a#":
        case "bb":
        msj.innerHTML = "la nota <strong>A#/Bb</strong> es <strong>C</strong>  en instrumentos en Bb" 
        break;

        case "b":
        msj.innerHTML = "la nota <strong>B</strong> es <strong>C#</strong> en instrumentos en Bb" 
        break;
    }
  }else{
     switch (nota) {
      case "c":         
      msj.innerHTML = "la nota <strong>C</strong> es <strong>A</strong> en instrumentos en Eb" 
      break;

      case "c#":   
      case "Db":   
      msj.innerHTML = "la nota <strong>C#/Db</strong> es <strong>A#/Bb</strong> en instrumentos en Eb" 
      break;

      case "d":
      msj.innerHTML = "la nota <strong>D</strong> es <strong>B</strong> en instrumentos en Eb" 
      break;

      case "d#":
      case "eb":
      msj.innerHTML = "la nota <strong>D#/Eb</strong> es <strong>C</strong> en instrumentos en Eb" 
      break;

      case "e":
      msj.innerHTML = "la nota <strong>E</strong> es <strong>C#/Db</strong> en instrumentos en Eb" 
      break;
      
      case "f":
      msj.innerHTML = "la nota <strong>F</strong> es <strong>D</strong> en instrumentos en Eb" 
      break;

      case "f#":
      case "gb":
      msj.innerHTML = "la nota <strong>F#/Gb</strong> es <strong>D#/Eb</strong> en instrumentos en Eb" 
      break;

      case "g":
      msj.innerHTML = "la nota <strong>G</strong> es <strong>E</strong> en instrumentos en Eb" 
      break;

      case "g#":
      case "ab":
      msj.innerHTML = "la nota <strong>G#/Ab</strong> es <strong>F</strong> en instrumentos en Eb" 
      break;

      case "a":
      msj.innerHTML = "la nota <strong>A</strong> es <strong>F#/Gb</strong> en instrumentos en Eb" 
      break;

      case "a#":
      case "bb":
      msj.innerHTML = "la nota <strong>A#/Bb</strong> es <strong>G</strong> en instrumentos en Eb" 
      break;

      case "b":
      msj.innerHTML = "la nota <strong>B</strong> es <strong>G#/Ab</strong> en instrumentos en Eb" 
      break;
    }
  }
}

btnDo.addEventListener("click", function() { encendioApagado('c') });
btnDoS.addEventListener("click", function() { encendioApagado('c#') });
btnRe.addEventListener("click", function() { encendioApagado('d') });
btnReS.addEventListener("click", function() { encendioApagado('d#') });
btnMi.addEventListener("click", function() { encendioApagado('e') }); 
btnFa.addEventListener("click", function() { encendioApagado('f') });
btnFaS.addEventListener("click", function() { encendioApagado('f#') });
btnSol.addEventListener("click", function() { encendioApagado('g') });
btnSolS.addEventListener("click", function() { encendioApagado('g#') });
btnLa.addEventListener("click", function() { encendioApagado('a') });
btnLaS.addEventListener("click", function() { encendioApagado('a#') });
btnSi.addEventListener("click", function() { encendioApagado('b') });







