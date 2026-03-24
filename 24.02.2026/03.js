// geração de números aleatórios
// console.log(Math.random());
// console.log(Math.random() * 2);
// console.log(Math.floor(Math.random() * 6));

// função para sortear "cara" ou "coroa"
function sortearCaraOuCoroa() {
    const sorteio = Math.floor(Math.random() * 2);

    if(sorteio === 1) {
        return "Cara"
    } else {
        return "coroa"
    };
};

// console.log(sortearCaraOuCoroa());

function sortearTernario() {
    return Math.floor(Math.random() * 2) === 0 ? "cara" : "coroa";
};

console.log(sortearTernario())