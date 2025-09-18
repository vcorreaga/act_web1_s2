let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioFinal = tarifaBase;

if (edad < 18) {
  precioFinal = tarifaBase * 0.80;
} else if (edad >= 65) {
  precioFinal = tarifaBase * 0.60;
}

console.log(precioFinal.toFixed(2));