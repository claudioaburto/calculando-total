let cantidad = document.querySelector("#cantidad");
let precioInicial = 800000
let valorTotal = document.querySelector("#valorTotal");
let menos = document.querySelector("#menos");
let mas = document.querySelector("#mas");

menos.onclick = function () {
  cantidad.innerHTML--;
  valorTotal.innerHTML = (
    cantidad.innerHTML * precioInicial
  ).toLocaleString("es-CL");
};
mas.onclick = function () {
  cantidad.innerHTML++;
  valorTotal.innerHTML = (
    cantidad.innerHTML * precioInicial
  ).toLocaleString("es-CL");
};
