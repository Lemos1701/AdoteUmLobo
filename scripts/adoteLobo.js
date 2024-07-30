const objeto = lobinhos;
let button_adote = document.querySelector(".btnAdopt");

let id = localStorage.getItem("id");
document.querySelector(".imgLobo").src = localStorage.getItem("imagem");
document.querySelector("#beginTextTitle").innerHTML = "Adote o(a) " + localStorage.getItem("nome");

let idNumber = Number(id);

function encontrarLoboPorId(id) {
    return objeto.filter(lobo => lobo.id === id);
}

let loboEncontrado1 = encontrarLoboPorId(idNumber);

console.log(loboEncontrado1);

function cadastro() {
    let loboEncontrado = encontrarLoboPorId(idNumber);
    loboEncontrado.nomeDono = document.querySelector("#inputName").value;
    loboEncontrado.idadeDono = document.querySelector("#inputYear_old").value;
    loboEncontrado.emailDono = document.querySelector("#inputEmail").value;
    loboEncontrado.adotado = true;
}

button_adote.addEventListener("click",()=>{
    let nome = document.querySelector("#inputName").value;
    let idade = document.querySelector("#inputYear_old").value;
    let email = document.querySelector("#inputEmail").value;
    if(nome == "" || idade == "" || email == ""){
        alert("você esqueceu de preencher algum campo");
    }else{
        cadastro();
        inputName.value = "";
        inputYear_old.value = "";
        inputEmail.value = "";
        console.log(objeto.idNumber);
    }
});