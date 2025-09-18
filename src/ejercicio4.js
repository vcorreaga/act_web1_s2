let a = 10;
let b = 3;
let operador = '*';
let resultado;

switch (operador) {
  case '+':
    resultado = a + b;
    break;
  case '-':
    resultado = a - b;
    break;
  case '*':
    resultado = a * b;
    break;
  case '/':
    if (b === 0) {
      resultado = "indeterminado";
    } else {
      resultado = a / b;
    }
    break;
  default:
    resultado = "operador no válido";
}

console.log(resultado);