/*--Efeito menu - Aparece/Desaparece --*/
document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};


/*-- Efeito de scroll - Arrow --*/
var btn = document.querySelector(".js-scroll");
var pai = document.querySelector(".js-about");

var offset = pai.getBoundingClientRect();

btn.onclick = scrollToAbout; 

function scrollToAbout(){
  window.scroll({
    top: offset.top,
    left: offset.x, 
    behavior: 'smooth' 
  });
}

/*-- Efeito Parallax - Imagens --*/
var parallax= document.querySelectorAll(".js-parallax");

parallax.forEach(function(element){
	window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset,
    limit=element.offsetTop+element.offsetHeight;
    if(scrolledHeight >element.offsetTop && scrolledHeight <= limit) {
       element.style.backgroundPositionY= (scrolledHeight -element.offsetTop) /1.5+ "px";
    } 
    else {
       element.style.backgroundPositionY= "0";
    }
	});
});


