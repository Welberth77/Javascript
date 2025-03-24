// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

console.log(document.getElementById("meu-formulario"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("item"));
console.log(document.querySelector("li"));


const itens = document.querySelectorAll("li");

itens.forEach((item) => console.log(item));

