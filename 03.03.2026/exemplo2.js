let nota = 7.5;

let situacao = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`A situação do aluno é: ${situacao}`);

let conceito = nota >= 8 ? "A"
    : nota >= 6 ? "B"
    : nota >= 4 ? "C"
    : nota >= 2 ? "D"
    : nota >= 0 ? "E"
    : "Nota inválida";

console.log(`O conceito do aluno é: ${conceito}`);