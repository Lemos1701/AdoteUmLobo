let listaLobos = localStorage.getItem("lobinhos")
console.log(listaLobos)
if (listaLobos) {
    var lobinhos = JSON.parse(listaLobos);
    console.log(lobinhos);
}

let button_adote = document.querySelector(".btnAdopt");

let id = localStorage.getItem("id");

document.querySelector(".imgLobo").src = localStorage.getItem("imagem");
document.querySelector("#beginTextTitle").innerHTML = "Adote o(a) " + localStorage.getItem("nome");
document.querySelector("#beginTextLoboId").innerHTML = "ID:" + localStorage.getItem("id");

let idNumber = Number(id);


function cadastro() {
    const indice = lobinhos.findIndex(obj => obj.id == idNumber);
    console.log(indice)
    lobinhos[indice].nomeDono = document.querySelector("#inputName").value;
    lobinhos[indice].idadeDono = document.querySelector("#inputYear_old").value;
    lobinhos[indice].emailDono = document.querySelector("#inputEmail").value;
    lobinhos[indice].adotado = true;

    const objetoComoString = JSON.stringify(lobinhos);
    localStorage.setItem("lobinhos", objetoComoString)

    console.log(lobinhos);
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
    }
});