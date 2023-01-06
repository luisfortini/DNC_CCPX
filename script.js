const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const evento = "01 feb 2023"

function countDown(){

 const dataEvento = new Date(evento)
 const hoje = new Date()

 const segTotal = (dataEvento - hoje) / 1000


 const finalDias =  Math.floor(segTotal / 60 / 60 / 24)
 const finalHoras =  Math.floor(segTotal / 60 / 60) % 24
 const finalMinutos =  Math.floor(segTotal / 60) % 60
 const finalSegundos =  Math.floor(segTotal) % 60

dia.innerText = formatTempo(finalDias)
hora.innerHTML = formatTempo(finalHoras)
minuto.innerHTML = formatTempo(finalMinutos)
segundo.innerHTML = formatTempo(finalSegundos)
}

function formatTempo(tempo){
  return tempo < 10? '0'+tempo : tempo
}

setInterval(countDown,1000)