var registre = document.querySelector(".regis");
var confirma = document.querySelector(".confirma");
var confirmaBox = document.querySelector(".confirma-box");
var registraBox = document.querySelector(".registre-box");
var table = document.querySelector(".container-registre-se");
var fecharButton = document.querySelectorAll(".feche");
var esquecerButton = document.querySelector(".forget-password")
var recuperaBox = document.querySelector(".recuperar");
var enviaBtn = document.querySelector(".envia-button");
var confirmaRecuperaBox = document.querySelector(".confirma-recupera-box");
console.log(registre);

registre.onclick = appearRegistre;
esquecerButton.onclick = appearRecuperar;
confirma.onclick = appearConfirma;
fecharButton.forEach(function(element){
	element.onclick = disappearRegistre;
});
enviaBtn.onclick = appearConfirmaEmail;

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
	registraBox.classList.remove("disappear");
	confirmaBox.classList.remove("appear");
	recuperaBox.classList.remove("disappear");
	confirmaRecuperaBox.classList.remove("appear");
	table.classList.remove('registre-se');
};

function appearRecuperar(){
    if(table.classList.contains('registre-se')==false){
    	recuperaBox.classList.remove("disappear");
    	registraBox.classList.add("disappear");
    	table.classList.add("registre-se");
    }
};

function appearConfirmaEmail(){
	recuperaBox.classList.add("disappear");
	confirmaRecuperaBox.classList.add("appear");
}