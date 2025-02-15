// Variable para alternar entre los dos estados
let estadoSeccion1 = true; // true = Kanye West, false = Albert Einstein

// Evento 1: Cambiar texto e imagen al hacer clic
function cambiarTexto1() {
  const texto = document.getElementById("text1");
  const imagen = document.getElementById("imagen1");

  if (estadoSeccion1) {
    // Cambiar a Albert Einstein
    texto.textContent = "Ronaldinho";
    imagen.src = "https://s3.abcstatics.com/abc/www/multimedia/gente/2024/11/21/ronaldinho-ktcC--1200x630@diario_abc.jpg";
    imagen.alt = "Ronaldinho";
  } else {
    // Regresar a Kanye West
    texto.textContent = "Kanye West";
    imagen.src = "https://media.gq.com/photos/56bde8a8cb2b642c39f96718/master/pass/GettyImages-509642588.jpg";
    imagen.alt = "Kanye West";
  }

  // Cambiar el estado
  estadoSeccion1 = !estadoSeccion1;
}

// Evento 2: Cambiar color al pasar el mouse
function cambiarColor2() {
  document.getElementById("card2").style.backgroundColor = "#f0f8ff";
}

// Evento 3: Cambiar texto al escribir en el input
function cambiarTexto3() {
  const input = document.getElementById("input3").value;
  document.getElementById("text3").textContent = input;
}

// Evento 4: Cambiar texto al hacer doble clic
function cambiarTexto4() {
  document.getElementById("text4").textContent = "La música";
}

// Evento 5: Mostrar una alerta
function mostrarAlerta() {
  alert("¡Tengo mucha paciencia!");
}

// Evento 6: Mostrar mensaje cuando la imagen se carga
function cargarImagen() {
  console.log("La imagen del animal favorito se ha cargado.");
}