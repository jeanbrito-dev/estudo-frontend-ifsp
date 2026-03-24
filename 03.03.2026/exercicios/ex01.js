let hora = 10;
let minuto = 30;
let segundo = 45;

const verificarHorario = hora >= 0 && hora < 24 
&& minuto >= 0 && minuto < 60 
&& segundo >= 0 && segundo < 60 
? "Horário válido" 
: "Horário inválido";

console.log(verificarHorario);