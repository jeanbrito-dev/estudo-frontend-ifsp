function pedraPapelTesoura() {
    let jogar = Math.floor(Math.random() * 3)
    if (jogar === 0) {
        return "Pedra"
    } else if (jogar === 1) {
        return "Papel"
    } else {
        return "tesoura"
    }
};

console.log(pedraPapelTesoura())