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



var btn = document.querySelector(".js-arrow");
var pai = document.querySelector(".js-about");

var offset = pai.getBoundingClientRect();

console.log(offset);
btn.onclick = function(){
  window.scroll({
    top: offset.top,
    left: offset.x, 
    behavior: 'smooth' 
  });
};