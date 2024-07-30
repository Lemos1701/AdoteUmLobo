async function readData(number, status){
  var arq = null
  await fetch('../data/lobinhos.json')
    .then(response => response.json())
      .then(data => {
        console.log(data)
        arq = data
        if (status) {
          lobosFiltrados = data.filter((lobo) => {return lobo.adotado});
        } else {
          lobosFiltrados = data.filter((lobo) => {return !lobo.adotado});
        }
        console.log(lobosFiltrados);
    
        for (let i = 0; i < 4; i++) {
          if (lobosFiltrados[number + i]) {
            document.getElementById("imagem" + i).src = lobosFiltrados[number + i].imagem;
            document.getElementById("nome" + i).innerHTML = lobosFiltrados[number + i].nome;
            document.getElementById("idade" + i).innerHTML = "Idade: "+lobosFiltrados[i + number].idade + " anos"
            document.getElementById("desc" + i).innerHTML = lobosFiltrados[number + i].descricao;
          } else {
            document.getElementById("imagem" + i).src = '';
            document.getElementById("nome" + i).innerHTML = '';
            document.getElementById("idade" + i).innerHTML = '';
            document.getElementById("desc" + i).innerHTML = '';
          }
      }
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
    console.log(arq)  
    return arq
}

var num = 0

document.getElementById("adoptCheckbox").addEventListener("change", function() {

  adotados = this.checked;
  num = 0; // Reinicia o contador para começar do início da nova lista
  actual = 1; // Reinicia a página atual
  if(adotados){
      for(let i = 0; i < 4; i++){
          document.getElementById("status" + i).className = "adotados";
          document.getElementById("status" + i).innerHTML = "Adotado";
      }
  }
  else{
      for(let i = 0; i < 4; i++){
          document.getElementById("status" + i).className = "adotar";
          document.getElementById("status" + i).innerHTML = "Adotar";
      }
  }
  readData(num, adotados)
  console.log(num)
});


/*
document.getElementById("search").addEventListener("keyup", function(event) {
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