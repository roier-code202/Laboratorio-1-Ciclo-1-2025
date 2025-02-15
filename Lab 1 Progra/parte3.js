
let estadoSeccion1 = true; 


function cambiarTexto1() {
  const texto = document.getElementById("text1");
  const imagen = document.getElementById("imagen1");

  if (estadoSeccion1) {
 
    texto.textContent = "Ronaldinho";
    imagen.src = "https://s3.abcstatics.com/abc/www/multimedia/gente/2024/11/21/ronaldinho-ktcC--1200x630@diario_abc.jpg";
    imagen.alt = "Ronaldinho";
  } else {
  
    texto.textContent = "Kanye West";
    imagen.src = "https://media.gq.com/photos/56bde8a8cb2b642c39f96718/master/pass/GettyImages-509642588.jpg";
    imagen.alt = "Kanye West";
  }

  estadoSeccion1 = !estadoSeccion1;
}

function cambiarColor2() {
  document.getElementById("card2").style.backgroundColor = "#f0f8ff";
}


function cambiarTexto3() {
  const input = document.getElementById("input3").value;
  document.getElementById("text3").textContent = input;
}


function cambiarTexto4() {
  document.getElementById("text4").textContent = "La música";
}


function mostrarAlerta() {
  alert("¡Tengo mucha paciencia!");
}

function cargarImagen() {
  console.log("La imagen del animal favorito se ha cargado.");
}