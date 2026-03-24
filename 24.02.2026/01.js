let falar = function() {
    console.log("Hello, world!");
};

const login = "admin";
const senha = "123456";

function autenticar(user, password) {
    if (user === login && password === senha) {
        return "\n Login realizado!"
    } else {
        return "\n Senha ou email incorreto"
    };
};

let user = prompt("Digite o nome do usuário: ");
let password = prompt("Digite a senha: ");

console.log(autenticar(user, password));

function hello(name) {
    // return "Hello, " + name + "!"
    return `Hello, ${name}`
};

console.log(hello("jorge"));