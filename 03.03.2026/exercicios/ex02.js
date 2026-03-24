let dia = 28;
let mes = 5;
let ano = 2022;

const verificarDiasMes = (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) ? 31
: (mes === 4 || mes === 6 || mes === 9 || mes === 11) ? 30
: (mes === 2) ? 28
: "Mês inválido";

const verificarData = verificarDiasMes !== "Mês inválido" && dia >= 1 && dia <= verificarDiasMes && ano > 0
? "Data válida"
: "Data inválida";

console.log(verificarData);