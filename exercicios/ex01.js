// Escreva um programa que receba dois números do usuário e armazene-os em variáveis. Em seguida, calcule e exiba a soma, subtração, multiplicação e divisão entre eles.

// Recebendo número
// readline.question
const readline = require("readline-sync");

const num1 = Number(readline.question("Digite o primeiro número: "));
const num2 = Number(readline.question("Digite o segundo número: "));

console.log(`A Soma entre ${num1} e ${num2} é: `, soma(num1, num2));
console.log(`A Subtração entre ${num1} e ${num2} é: `, subtracao(num1, num2));
console.log(`A Multiplicação entre ${num1} e ${num2} é: `, multiplicacao(num1, num2));
console.log(`A Divisão entre ${num1} e ${num2} é: `, divisao(num1, num2));


// Funções
// Soma
function soma(x, y){
    return x + y;
}

// Subtração
function subtracao(x, y){
    return x - y;
}

// Multiplicação
function multiplicacao(x, y){
    return x * y;
}

// Divisão
function divisao(x, y){
    return parseFloat(x / y);
}