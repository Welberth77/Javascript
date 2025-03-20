// Arrays
let frutas = ["Maçã", "Banana", "Melão", "Melancia"];

// Acessando o primeiro elemento
console.log(frutas[0]);

// Adicionando elemento ao final do vetor
frutas.push("Manga");
console.log(frutas);

// Adicionando elemento no começo do vetor
frutas.unshift("Pêra");
console.log(frutas);

// Removendo elemento do final
frutas.pop();
console.log(frutas);

// Removendo elemento do inicio
frutas.shift();
console.log(frutas);

// Saber o indice de um elemento
console.log(frutas.indexOf("Melão"));

// Verificando se é um vetor
console.log(Array.isArray(frutas)); // true
console.log(Array.isArray("Olá mundo!")); // false