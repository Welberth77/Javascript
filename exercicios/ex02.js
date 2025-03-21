// Crie um objeto chamado carro que tenha as seguintes propriedades: marca, modelo, ano, velocidadeAtual (inicialmente 0).
// Adicione um método chamado acelerar() que aumenta a velocidade do carro em 10 km/h e um método frear() que reduz a velocidade em 10 km/h (sem permitir valores negativos).

let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: "2020",
    velocidadeAtual: 0
};

function acelerar(objeto){
    objeto.velocidadeAtual += 10;
    console.log(`O ${objeto.modelo} acelerou mais 10 km/h`);
}

function frear(objeto){
    if (objeto.velocidadeAtual >= 10){
        objeto.velocidadeAtual -= 10;
        console.log(`O ${objeto.modelo} freou 10 km/h`);
    } else {
        console.log(`O ${objeto.modelo} não está em movimento`);
    }
}

// -------------------------
console.log(`A velocidade atual do carro ${carro.modelo} é ${carro.velocidadeAtual} km/h`);

// Acelerando carro
acelerar(carro);
acelerar(carro);
acelerar(carro);

console.log(`A velocidade atual do carro ${carro.modelo} é ${carro.velocidadeAtual} km/h`);

// Desacelerando carro
frear(carro);

console.log(`A velocidade atual do carro ${carro.modelo} é ${carro.velocidadeAtual} km/h`);

// Desacelerando carro demais
frear(carro);
frear(carro);

// carro chegou a 0 km/h
frear(carro);