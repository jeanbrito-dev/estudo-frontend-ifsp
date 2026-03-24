// function declaration
function somar(a, b) {
    const resultado = a + b;
    return resultado;
}

console.log(somar(5, 3));
console.log(somar(2, 7));

// function expression
const subtrair = function(a, b) {
    return a - b;
}

console.log(subtrair(4, 9));

// arrow function
const dividir = (x, y) => {
    const resultado = x / y;
    return resultado;
}

console.log(dividir(10, 2));    

// one liner
const multiplicar = (x, y) => x * y;

console.log(multiplicar(5, 6));