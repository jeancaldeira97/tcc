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
		clearAll();
    	registraBox.classList.add("appear");
    	table.classList.add("registre-se");	
};
function appearRecuperar(){
		clearAll();
    	recuperaBox.classList.add("appear");
    	table.classList.add("registre-se");
};
function appearConfirma(){
	registraBox.classList.remove("appear");
	confirmaBox.classList.add("appear");
};


function appearConfirmaEmail(){
	recuperaBox.classList.remove("appear");
	confirmaRecuperaBox.classList.add("appear");
}

function disappearRegistre(){
	confirmaBox.classList.remove("appear");
	confirmaRecuperaBox.classList.remove("appear");
	table.classList.remove('registre-se');
};

function clearAll(){
		recuperaBox.classList.remove("appear");
		confirmaRecuperaBox.classList.remove("appear");
		registraBox.classList.remove("appear");
		confirmaBox.classList.remove("appear");
}