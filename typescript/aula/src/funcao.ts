function login(username: string): string | boolean {
    let message = `Bem vindo ${username}`
    return message;
}

console.log(login("Fulano"));

const loginArrow = (nome : string) : string | boolean => {
    let message = `Bem vindo ${nome}`;
    return message;
}
console.log(loginArrow("Sujeito"));

function cadastro (id:number, nome: string, situacao=true, email?:string ){
    console.log(`%{id} - ${nome}, ${situacao} ${email}`);
    return situacao;
}

cadastro(1, "Bia", false);