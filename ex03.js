// Strings (sequancia de caracteres)

const nome = "welberth";
const sobrenome = "Oliveira";
const idade = 20;

// Concatenação
const apresentacao = "Seu nome é " + nome + " " + sobrenome + " e você tem " + idade + " anos";

// console.log(apresentacao);

// Concatenação de forma dinâmica
// é preciso usar (`)
const apresentacao_2 = `Seu nome é ${nome} ${sobrenome} e você tem ${idade} anos`;

console.log(apresentacao_2)

console.log(`Seu nome tem ${nome.length} letras`)
