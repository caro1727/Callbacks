// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

const content = document.querySelector(".content-header");

// ******************** CONTENT ONE *****************************

const contentOne = document.createElement("div");
contentOne.className = "content-one";
contentOne.innerHTML = `

<h2 class="subtitulo">
Ejercicio 1
</h2>
<p>
1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.</p>

<button class="button-one">Pulsar</button>

`;
content.appendChild(contentOne);

const button = document.querySelector(".button-one");
button.addEventListener("click", () => {
  console.log("Se ha presionado el evento click del botton");
  const elementoAgregado = document.createElement("p");
  elementoAgregado.innerText = "Se ha presionado el evento click del boton";
  contentOne.appendChild(elementoAgregado);
});

// ******************** CONTENT TWO *****************************
