let listaLobos = localStorage.getItem("lobinhos")
console.log(listaLobos)
if (listaLobos) {
    var lobinhos = JSON.parse(listaLobos);
    console.log(lobinhos);
}
const objeto = lobinhos;
let btnSave = document.querySelector(".btnSave");
console.log(objeto);

function addlobo(){
    let nome = document.querySelector("#inputName").value;
    let idade = document.querySelector("#inputYear").value;
    let link = document.querySelector("#inputLink").value;
    let descricao = document.querySelector("#textareaDescription").value;
    let id = localStorage.getItem("idMin")
    console.log(id)
    let newObj = {
        "id": parseInt(id) + 1,
        "nome": nome,
        "idade": idade,
        "descricao": descricao,
        "imagem":link,
        "adotado" : false
    };
    console.log(parseInt(id) + 1)
    localStorage.setItem("idMin", parseInt(id)+1)
    objeto.unshift(newObj);
    const objetoComoString = JSON.stringify(objeto);
    localStorage.setItem("lobinhos", objetoComoString)
}

btnSave.addEventListener("click",()=>{
    let nome = document.querySelector("#inputName").value;
    let idade = document.querySelector("#inputYear").value;
    let link = document.querySelector("#inputLink").value;
    let descricao = document.querySelector("#textareaDescription").value;
    if(nome == "" || idade == "" || link == "" || descricao == ""){
        alert("você esqueceu de preencher algum campo");
    }else{
        addlobo();
        inputName.value = "";
        inputYear.value = "";
        inputLink.value = "";
        textareaDescription.value = "";
    }
})

console.log(objeto);