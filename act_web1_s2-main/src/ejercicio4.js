let a = 10;
let b = 3;
let operador = '-';

switch (operador){
    case '+':
        console.log(a + b);
        break
    case '-':
        console.log(a - b);
        break
    case '*':
        console.log(a * b);
        break
    case '/':
        if (b === 0){
            console.log("Indeterminado")
        } else {
            console.log(a / b);
        }
        break
        default: 
        console.log("OPERADOR NO VALIDO");
 
}