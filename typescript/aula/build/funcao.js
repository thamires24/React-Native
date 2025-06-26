"use strict";
function login(username) {
    let message = `Bem vindo ${username}`;
    return message;
}
console.log(login("Fulano"));
const loginArrow = (nome) => {
    let message = `Bem vindo ${nome}`;
    return message;
};
console.log(loginArrow("Sujeito"));
function cadastro(id, nome, situacao = true, email) {
    console.log(`%{id} - ${nome}, ${situacao} ${email}`);
    return situacao;
}
cadastro(1, "Bia", false);
