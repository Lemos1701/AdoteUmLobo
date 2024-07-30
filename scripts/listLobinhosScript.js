function readData(number, status){
  if (status) {
    lobosFiltrados = lobinhos.filter((lobo) => {return lobo.adotado});
  } else {
    lobosFiltrados = lobinhos.filter((lobo) => {return !lobo.adotado});
  }
  console.log(lobosFiltrados);
  for (let i = 0; i < 4; i++) {
    if (lobosFiltrados[number + i]) {
      document.getElementById("lobo" + i).className = "loboDiv"
      document.getElementById("imagem" + i).src = lobosFiltrados[number + i].imagem
      document.getElementById("nome" + i).innerHTML = lobosFiltrados[number + i].nome
      document.getElementById("idade" + i).innerHTML = "Idade: "+lobosFiltrados[i + number].idade + " anos"
      document.getElementById("desc" + i).innerHTML = lobosFiltrados[number + i].descricao;
    } else {
      document.getElementById("lobo" + i).className = "displayNone"
    }
  }
  
  return lobosFiltrados.length
}

var num = 0
var actual = 1
var adotados = false
let maximo = readData(num, adotados)
console.log(maximo)

document.getElementById("adoptCheckbox").addEventListener("change", function() {

  adotados = this.checked
  num = 0; // Reinicia o contador para começar do início da nova lista
  actual = 1; // Reinicia a página atual
  if(adotados){
      for(let i = 0; i < 4; i++){
          document.getElementById("status" + i).className = "adotados"
          document.getElementById("status" + i).innerHTML = "Adotado"
      }
  }
  else{
      for(let i = 0; i < 4; i++){
          document.getElementById("status" + i).className = "adotar"
          document.getElementById("status" + i).innerHTML = "Adotar"
      }
  }
  readData(num, adotados)
  console.log(num)
})

document.getElementById("next").addEventListener("click", function(){
  if(num < maximo-4){
    num += 4
    actual += 1
    maximo = readData(num, adotados)
    console.log(num)
  }
})

document.getElementById("previous").addEventListener("click", function(){
  if(num > 0){
    num -= 4
    actual -= 1
    maximo = readData(num, adotados)
    console.log(num)
  }
})

/*document.getElementById("search").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      const query = event.target.value.toLowerCase();
      const loboEncontrado = lobos.find(lobo => lobo.nome.toLowerCase() === query);

      if (loboEncontrado) {
          document.getElementById("imagem0").src = loboEncontrado.imagem;
          document.getElementById("nome0").innerHTML = loboEncontrado.nome;
          document.getElementById("idade0").innerHTML = loboEncontrado.idade;
          document.getElementById("desc0").innerHTML = loboEncontrado.descricao;

          // Esconde os outros lobos
          for (let i = 1; i < 4; i++) {
              document.getElementById("profile" + i).setAttribute("style", "visibility: hidden;"); 
          }
      } else {
          // Se não encontrar, limpe os campos
          for (let i = 0; i < 4; i++) {
              document.getElementById("profile" + i).setAttribute("style", "visibility: hidden;"); 
          }
      }

  }
});*/