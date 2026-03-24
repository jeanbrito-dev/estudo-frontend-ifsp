let valor = function(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
};

console.log(valor(10));
console.log(valor(-5));
console.log(valor(0));