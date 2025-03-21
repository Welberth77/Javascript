// Objetos
// Definindo objeto
const pessoa = {
    nome: "Pedro",
    sobrenome: "Silva",
    idade: 20,
    estado: "SP",
    passatempo: ["Música", "Filmes", "VideoGame", "Futebol"]
};

// Imprimindo todos os dados    
console.log(pessoa);

// Imprimindo apenas o nome
console.log(pessoa.nome);

// -----------------------
console.log("-----------------------");

let tarefas = [
    {
        id: 1,
        texto: "Tirar lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Varrer chão",
        completo: false
    }
];

// Alterando valor de um vetor de objetos
tarefas[1].completo = true;

console.log(tarefas);

// Tranformando objetos no modo json de dados

console.log(JSON.stringify(tarefas));