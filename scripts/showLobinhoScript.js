document.getElementById("imagem").src = localStorage.getItem("imagem")
document.getElementById("nome").innerHTML = localStorage.getItem("nome")
document.getElementById("texto").innerHTML = localStorage.getItem("descricao")
let idNum = localStorage.getItem("number")
console.log(localStorage.getItem("id"+idNum))

document.getElementById("adote").addEventListener("click", function() {
    localStorage.setItem("id", localStorage.getItem("id"+idNum))
    window.location.href = "../html/adoteLobo.html"
});

document.getElementById("exclude").addEventListener("click", function() {
    var listaDeLobos = localStorage.getItem("lobinhos")
    if (listaDeLobos) {
        var lobinhos = JSON.parse(listaDeLobos);
        console.log(lobinhos);
    }
    let loboes = lobinhos.filter((lobo)=>{
        if (lobo.id == localStorage.getItem("id"+idNum)){
            return false
        }
        return true
    })
    console.log(loboes)
    const objetoComoString = JSON.stringify(loboes);
    localStorage.setItem("lobinhos", objetoComoString)
    window.location.href = "../html/listLobinhos.html"
})