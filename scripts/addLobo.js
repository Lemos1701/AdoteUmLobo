const objeto = lobinhos;
let btnSave = document.querySelector(".btnSave");
let nome = document.querySelector("#inputName").value;
console.log(nome)

function addlobo(){
    let nome = document.querySelector("#inputName").value;
    let idade = document.querySelector("#inputYear").value;
    let link = document.querySelector("#inputLink").value;
    let descricao = document.querySelector("#textareaDescription").value;
    let newObj = {
        "id": objeto.length + 1,
        "nome": nome,
        "idade": idade,
        "descricao": descricao,
        "imagem":link,
        "adotado" : false
    };
    objeto.push(newObj);
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
