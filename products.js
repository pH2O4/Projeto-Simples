let todososjogos = [
  {
    "id": 312,
    "name": "Super Mario Odyssey",
    "price": 197.88,
    "score": 100,
    "image": "assets/images/super-mario-odyssey.png"
  },
  {
    "id": 201,
    "name": "Call Of Duty Infinite Warfare",
    "price": 49.99,
    "score": 80,
    "image": "assets/images/call-of-duty-infinite-warfare.png"
  },
  {
    "id": 102,
    "name": "The Witcher III Wild Hunt",
    "price": 119.5,
    "score": 250,
    "image": "assets/images/the-witcher-iii-wild-hunt.png"
  },
  {
    "id": 99,
    "name": "Call Of Duty WWII",
    "price": 249.99,
    "score": 205,
    "image": "assets/images/call-of-duty-wwii.png"
  },
  {
    "id": 12,
    "name": "Mortal Kombat XL",
    "price": 69.99,
    "score": 150,
    "image": "assets/images/mortal-kombat-xl.png"
  },
  {
    "id": 74,
    "name": "Shards of Darkness",
    "price": 71.94,
    "score": 400,
    "image": "assets/images/shards-of-darkness.png"
  },
  {
    "id": 31,
    "name": "Terra Média: Sombras de Mordor",
    "price": 79.99,
    "score": 50,
    "image": "assets/images/terra-media-sombras-de-mordor.png"
  },
  {
    "id": 420,
    "name": "FIFA 18",
    "price": 195.39,
    "score": 325,
    "image": "assets/images/fifa-18.png"
  },
  {
    "id": 501,
    "name": "Horizon Zero Dawn",
    "price": 115.8,
    "score": 290,
    "image": "assets/images/horizon-zero-dawn.png"
  }
];

const img = document.querySelector('.image img')  
const nome = document.querySelector('.name')  
const preço = document.querySelector('.price')  
const escore = document.querySelector('.score')
const botaodecima = document.getElementById("1");
const botaodebaixo = document.getElementById("2");

let currentitem = 0

window.onload = function() {
  const item = todososjogos[currentitem]
  
  nome.textContent = item.name
  preço.textContent = item.price
  escore.textContent = item.score
  img.src = item.image
}

function proximoJogo() {
  const item = todososjogos[currentitem]
  
  nome.textContent = item.name
  preço.textContent = item.price
  escore.textContent = item.score
  img.src = item.image
  
  if (currentitem === (todososjogos.length - 1)) return
  
  currentitem++
}
function jogoAnterior() {
  const item = todososjogos[currentitem]
  
  nome.textContent = item.name
  preço.textContent = item.price
  escore.textContent = item.score
  img.src = item.image

  if (currentitem === 0) return

  currentitem--
}
