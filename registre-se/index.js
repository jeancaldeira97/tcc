var registre = document.querySelector(".regis");
var confirma = document.querySelector(".confirma");
var confirmaBox = document.querySelector(".confirma-box");
var registraBox = document.querySelector(".registre-box");
var table = document.querySelector(".container-registre-se");
var fecharButton = document.querySelector(".feche");
console.log(registre);

registre.onclick = appearRegistre;

confirma.onclick = appearConfirma;
fecharButton.onclick = disappearRegistre;


function appearRegistre(){
    if(table.classList.contains('registre-se')==false){
    	table.classList.add("registre-se");
    }
};

function appearConfirma(){
	registraBox.classList.add("disappear");
	confirmaBox.classList.add("appear");
};

function disappearRegistre(){
	table.classList.remove('registre-se');
};