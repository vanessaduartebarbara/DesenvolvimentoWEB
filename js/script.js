// SLIDER
function criarUmBullet(numeroDoSlide){
	
	var bulletUl = document.querySelector(".bullets ul");
	var li = document.createElement("li");
	var button = document.createElement("button");

	button.className="bullet";

	button.setAttribute("data-slide",numeroDoSlide);

	li.appendChild(button);

	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){

	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	for(var i=0; i < quantidadeSlides; i++){
		criarUmBullet(i);
	}

}

var slideIndexAtivo = 0;

function voltarSlide(){

	if(slideIndexAtivo > 0){

		var anteriorSlideIndex = slideIndexAtivo - 1;
		var anteriorSlideOrdem = anteriorSlideIndex + 1;

		var slideAtual = document.querySelector("#slider .slide.ativo");

		slideAtual.classList.remove("ativo");

		var proximoSlide = document.querySelector("#slider .slide:nth-child("+anteriorSlideOrdem+")");

		proximoSlide.classList.add("ativo");

		slideIndexAtivo = anteriorSlideIndex;
	}

}

function avancarSlide(){

	var slides = document.querySelectorAll("#slider .slide");

	if(slideIndexAtivo < slides.length-1){

		var proximoSlideIndex = slideIndexAtivo + 1;
		var proximoSlideOrdem = proximoSlideIndex + 1;

		var slideAtual = document.querySelector("#slider .slide.ativo");

		slideAtual.classList.remove("ativo");

		var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");

		proximoSlide.classList.add("ativo");

		slideIndexAtivo = proximoSlideIndex;
	}

}

function irParaOSlideCorrespondente(){
	
	var slideAtivo = document.querySelector(".slide.ativo");

	slideAtivo.classList.remove("ativo");

	var slideIndex = parseInt(this.getAttribute("data-slide"));

	var numeroSlide = slideIndex+1;

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");

	slideCorrespondente.classList.add("ativo");
	
	slideIndexAtivo = slideIndex;

}


function adicionarOnClickNosBotoes(){

	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;

	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	var bullets = document.querySelectorAll("#slider .bullet");

	for(var i=0;i<bullets.length;i++){
		bullets[i].onclick = irParaOSlideCorrespondente;
	}

}

var slider = document.querySelector("#slider");

if(slider != null){

	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
}



var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	
	var menu = document.querySelector("#navegacaoPrimaria");
	
	if(menu.className == "menuHorizontal visivel"){

		menu.className = "menuHorizontal";

	}else{
		
		menu.className = "menuHorizontal visivel";
	}

}

botaoMenuHamburguer.onclick = abrirMenu;
