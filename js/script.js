const key = "9d72c0eb7954268cae0edba29ee030b3"

function colocarDadosNaTela(dados) {

}

async function buscarCidade(cidade) {

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())

  console.log(dados)
}


function cliqueCidade () {
  const cidade = document.querySelector(".input-cidade").value

  console.log(cidade)
}