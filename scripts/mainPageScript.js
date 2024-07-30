function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const objetoComoString = JSON.stringify(lobos);
localStorage.setItem("lobinhos", objetoComoString)
let listaLobos = localStorage.getItem("lobinhos")
console.log(listaLobos)
if (listaLobos) {
    var lobinhos = JSON.parse(listaLobos);
    console.log(lobinhos);
}

console.log(lobinhos)
let newLobo1 = lobinhos[getRandomInt(1, 1000) - 1];
let newLobo2 = lobinhos[getRandomInt(1, 1000) - 1];

while (newLobo1 == newLobo2) {
    newLobo2 = lobinhos[getRandomInt(1, 1000) - 1];
}

let h3lobo1 = document.querySelector(".lobo1 h3");
let legendlobo1 = document.querySelector(".lobo1 legend");
let plobo1 = document.querySelector(".lobo1 p");
let imglobo1 = document.querySelector(".lobo1 img");

h3lobo1.textContent = newLobo1.nome;
legendlobo1.textContent = newLobo1.idade + " anos";
plobo1.textContent = newLobo1.descricao;
imglobo1.src = newLobo1.imagem;

let h3lobo2 = document.querySelector(".lobo2 h3");
let legendlobo2 = document.querySelector(".lobo2 legend");
let plobo2 = document.querySelector(".lobo2 p");
let imglobo2 = document.querySelector(".lobo2 img");

h3lobo2.textContent = newLobo2.nome;
legendlobo2.textContent = newLobo2.idade + " anos";
plobo2.textContent = newLobo2.descricao;
imglobo2.src = newLobo2.imagem;