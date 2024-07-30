var actual = 1

function readData(number, status){
  if (status) {
    lobosFiltrados = lobinhos.filter((lobo) => {return lobo.adotado});
  } else {
    lobosFiltrados = lobinhos
  }
  console.log(lobosFiltrados);
  for (let i = 0; i < 4; i++) {
    if (lobosFiltrados[number + i]) {
      document.getElementById("lobo" + i).className = "loboDiv"
      document.getElementById("imagem" + i).src = lobosFiltrados[number + i].imagem
      document.getElementById("nome" + i).innerHTML = lobosFiltrados[number + i].nome
      document.getElementById("idade" + i).innerHTML = "Idade: "+lobosFiltrados[i + number].idade + " anos"
      document.getElementById("desc" + i).innerHTML = lobosFiltrados[number + i].descricao;
      if(lobosFiltrados[number + i].adotado){
        document.getElementById("status" + i).className = "adotados"
        document.getElementById("status" + i).innerHTML = "Adotado"
      } else {
        document.getElementById("status" + i).className = "adotar"
        document.getElementById("status" + i).innerHTML = "Adotar"
      }
    } else {
      document.getElementById("lobo" + i).className = "displayNone"
    }
  }
  let tamanhoMaxActual= lobosFiltrados.length / 4
  console.log("tamanhoMax = "+tamanhoMaxActual)
  if(actual<=1 && actual>=tamanhoMaxActual){
    document.getElementById("next").innerHTML = ""
    document.getElementById("previous").innerHTML = ""
  } else if (actual<=1){
    document.getElementById("previous").innerHTML = ""
    document.getElementById("next").innerHTML = actual + 1
  } else if(actual>=tamanhoMaxActual) {
    document.getElementById("next").innerHTML = ""
    document.getElementById("previous").innerHTML = actual - 1
  } else {
    document.getElementById("next").innerHTML = actual + 1
    document.getElementById("previous").innerHTML = actual - 1
  }

  
  return lobosFiltrados.length
}

var num = 0
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
  maximo = readData(num, adotados)
  console.log(num)
  console.log(maximo)
})

function listaLobos(loboFiltrados, number){
  for (let i = 0; i < 4; i++) {
    if (loboFiltrados[number + i]) {
      document.getElementById("lobo" + i).className = "loboDiv"
      document.getElementById("imagem" + i).src = loboFiltrados[number + i].imagem
      document.getElementById("nome" + i).innerHTML = loboFiltrados[number + i].nome
      document.getElementById("idade" + i).innerHTML = "Idade: "+loboFiltrados[i + number].idade + " anos"
      document.getElementById("desc" + i).innerHTML = loboFiltrados[number + i].descricao;
      if(loboFiltrados[number + i].adotado){
        document.getElementById("status" + i).className = "adotados"
        document.getElementById("status" + i).innerHTML = "Adotado"
      } else {
        document.getElementById("status" + i).className = "adotar"
        document.getElementById("status" + i).innerHTML = "Adotar"
      }
    } else {
      document.getElementById("lobo" + i).className = "displayNone"
    }
  }

  let tamanhoMaxActual= lobosFiltrados.length / 4
  console.log("tamanhoMax = "+tamanhoMaxActual)
  if(actual<=1 && actual>=tamanhoMaxActual){
    document.getElementById("next").innerHTML = ""
    document.getElementById("previous").innerHTML = ""
  } else if (actual<=1){
    document.getElementById("previous").innerHTML = ""
    document.getElementById("next").innerHTML = actual + 1
  } else if(actual>=tamanhoMaxActual) {
    document.getElementById("next").innerHTML = ""
    document.getElementById("previous").innerHTML = actual - 1
  } else {
    document.getElementById("next").innerHTML = actual + 1
    document.getElementById("previous").innerHTML = actual - 1
  }
  return loboFiltrados.length
}

document.getElementById("next").addEventListener("click", function(){
  if(num < maximo-4){
    console.log(maximo)
    num += 4
    actual += 1
    maximo = listaLobos(lobosFiltrados, num)
    console.log(num)
  }
  document.getElementById("next").innerHTML = actual+1
  document.getElementById("previous").innerHTML = actual-1
  document.getElementById("actual").innerHTML = actual
})

document.getElementById("previous").addEventListener("click", function(){
  if(num > 0){
    num -= 4
    actual -= 1
    maximo = listaLobos(lobosFiltrados, num)
    console.log(num)
  }
  document.getElementById("next").innerHTML = actual+1
  document.getElementById("previous").innerHTML = actual-1
  document.getElementById("actual").innerHTML = actual
})

//filtro das strings
function compararStringsParcial(string1, string2) {
  if (string2.length > string1.length) {
    return false;
  }

  for (let i = 0; i < string2.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }

  return true;
}

document.getElementById("search").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    actual = 1
    document.getElementById("adoptCheckbox").checked = false

    const query = event.target.value.toLowerCase();
    let nome = document.getElementById("search").value
    console.log(document.getElementById("search").value)
    document.getElementById("search").value = ""
    console.log(lobinhos)
    lobosFiltrados = lobinhos.filter((lobo) => compararStringsParcial(lobo.nome, nome))
    console.log(lobosFiltrados)
    maximo = lobosFiltrados.length
    num = 0

    if (lobosFiltrados.length>0) {
      for(let j = 0; j<lobosFiltrados.length && j<4; j++){
        document.getElementById("lobo" + j).className = "loboDiv"
        document.getElementById("imagem" + j).src = lobosFiltrados[j].imagem;
        document.getElementById("nome" + j).innerHTML = lobosFiltrados[j].nome;
        document.getElementById("idade" + j).innerHTML = "Idade: "+ lobosFiltrados[j].idade + " anos"
        document.getElementById("desc" + j).innerHTML = lobosFiltrados[j].descricao;
        if(lobosFiltrados[j].adotado){
          document.getElementById("status" + j).className = "adotados"
          document.getElementById("status" + j).innerHTML = "Adotado"
        } else {
          document.getElementById("status" + j).className = "adotar"
          document.getElementById("status" + j).innerHTML = "Adotar"
        }

      }
      // Esconde os outros lobos
      for (let i = lobosFiltrados.length; i < 4; i++) {
        document.getElementById("lobo" + i).className = "displayNone" 
      }
    
    } else {
        // Se não encontrar, limpe os campos
      for (let i = 0; i < 4; i++) {
        document.getElementById("lobo" + i).className = "displayNone"
      }
    }

  

    let tamanhoMaxActual= lobosFiltrados.length / 4
    console.log("tamanhoMax = "+tamanhoMaxActual)
    if(actual<=1 && actual>=tamanhoMaxActual){
      document.getElementById("next").innerHTML = ""
      document.getElementById("previous").innerHTML = ""
    } else if (actual<=1){
      document.getElementById("previous").innerHTML = ""
      document.getElementById("next").innerHTML = actual + 1
    } else if(actual>=tamanhoMaxActual) {
      document.getElementById("next").innerHTML = ""
      document.getElementById("previous").innerHTML = actual - 1
    } else {
      document.getElementById("next").innerHTML = actual + 1
      document.getElementById("previous").innerHTML = actual - 1
    }
    document.getElementById("next").innerHTML = actual+1
    document.getElementById("previous").innerHTML = actual-1
    document.getElementById("actual").innerHTML = actual
    console.log("num = "+num)
    console.log("tamanho = " + lobosFiltrados.length)
  }
})

