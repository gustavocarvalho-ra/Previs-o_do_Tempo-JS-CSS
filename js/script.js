const key = "9d72c0eb7954268cae0edba29ee030b3"

function colocarDadosNaTela(dados) {
  console.log(dados)
  document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
  document.querySelector('.temp').innerHTML = dados.main.temp
  document.querySelector('.previsao').innerHTML = dados.weather[0].description
  document.querySelector('.umidade').innerHTML = dados.main.humidity
  document.querySelector('.temp').innerHTML = dados.main.temp
}

async function buscarCidade(cidade) {

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  colocarDadosNaTela(dados)
}


function cliqueCidade () {
  const cidade = document.querySelector(".input-cidade").value

  buscarCidade(cidade)
}