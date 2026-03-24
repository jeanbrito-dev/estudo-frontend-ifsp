let numeroInteiro = function() {
    return Math.floor(Math.random() * 100);
};

console.log(numeroInteiro());

let numeroDecimalDuasCasas = function() {
    return (Math.random() * 10).toFixed(2);
};

console.log(numeroDecimalDuasCasas());

let numeroDecimalUmaCasa = function() {
    return (Math.random() * 5).toFixed(1);
};

console.log(numeroDecimalUmaCasa());