const precios = {
  vainilla: 10,
  chocolate2: 12.5,
  fresa: 12,
  mango: 15,
  matcha: 13,
};

const productoSelect = document.getElementById("producto");
const cantidadInput = document.getElementById("cantidad");
const precioUnitarioSpan = document.getElementById("precioUnitario");
const totalSpan = document.getElementById("total");

function calcularTotal() {
  const producto = productoSelect.value;
  const cantidad = parseInt(cantidadInput.value) || 0;
  const precioUnitario = precios[producto] || 0;
  const total = precioUnitario * cantidad;

  precioUnitarioSpan.textContent = precioUnitario.toFixed(2);
  totalSpan.textContent = total.toFixed(2);
}
productoSelect.addEventListener("change", calcularTotal);
cantidadInput.addEventListener("input", calcularTotal);
calcularTotal();