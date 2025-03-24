// Funções
const nome = "wel";

// Função sem return
function saudacao(nome) {
    console.log(`Olá ${nome}!`);
}

saudacao(nome);

// Função com return
function bem_vindo(nome) {
    return `Seja bem-vindo ${nome}!`;
}

console.log(bem_vindo(nome));

// Função sem return, Valor default
function saudacao(nome="Fulano") {
    console.log(`Olá ${nome}!`);
}

saudacao();

// Funções setas
const dizer_oi = () => console.log("oi");

dizer_oi();

const mensagem = (nome) => {
    console.log(`Olá ${nome}`);
}

mensagem(nome);