//ativar items do orcamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// ativar links do menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const linkLocal = document.location.href;
  if (linkLocal.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Perguntas frenquentes
const perguntas = document.querySelectorAll(".perguntas button");
console.log(perguntas);
ativarPerguntas = (event) => {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const respostas = document.getElementById(controls);

  respostas.classList.toggle("ativa");
  const ativa = respostas.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
};
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPerguntas);
}
perguntas.forEach(eventosPerguntas);
// const ativ = document.querySelectorAll(".ativar");

// function ativarDisplay(event) {
//   console.log(event);
//   const proximoElemento = event.target.nextElementSibling;
//   // const text = document.querySelector(".texto");
//   console.log(proximoElemento);
//   proximoElemento.classList.toggle("visivel");
// }

// ativ.forEach(function (item) {
//   item.addEventListener("click", ativarDisplay);
// });

//galeria de bicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if(media){
    galeriaContainer.prepend(img);
  }
}
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

if(window.SimpleAnime){
new SimpleAnime();
}
