
async function readData(adotado){
  var arq = null
  await fetch('../data/lobinhos.json')
    .then(response => response.json())
      .then(data => {
        console.log(data)
        if(!adotado){
          data = data.filter((obj)=>{return !obj.adotado})
          arq = data
        } else {
          data = data.filter((obj)=>{return obj.adotado})
          arq = data
        }
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
    console.log(arq)  
    return arq
}

arq = readData(false)
