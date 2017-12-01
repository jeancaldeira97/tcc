var envio = document.querySelector(".js-enviado");
var message = document.querySelector(".js-message");
var textDiv = document.querySelector(".js-content");
envio.onclick = messageAppear;




function messageAppear(){
	textDiv.classList.add("disappear");
	message.classList.add("appear");
}