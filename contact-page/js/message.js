var envio = document.querySelector(".enviado");
var all = document.querySelector(".special-sec");
console.log(envio);
var textDiv = document.querySelector(".text-div");
var message = document.querySelector(".message");
envio.onclick = messageAppear;




function messageAppear(){
	all.classList.add("special-sec-enviado")
	textDiv.classList.add("disappear");
	message.classList.add("appear");
}