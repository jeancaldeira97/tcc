var table = document.querySelector(".js-hidden-div");

var registerForm = document.querySelector(".js-register-form");
var registerMessage = document.querySelector(".js-register-message");

var recoverFrom = document.querySelector(".js-recover-form");
var recoverMessage = document.querySelector(".js-recover-message");

var registerBtn = document.querySelector(".js-register-button");
var confirmBtn = document.querySelector(".js-confirm");

var recoverBtn = document.querySelector(".js-forget");
var sendBtn = document.querySelector(".js-send");

var closeBtn = document.querySelectorAll(".js-close-button");


registerBtn.onclick = registerAppear;
recoverBtn.onclick = recoverAppear;

confirmBtn.onclick = registerMessageAppear;
sendBtn.onclick = recoverMessageAppear;

closeBtn.forEach(function(element){
	element.onclick = hiddenSectionDisappear;
});


function registerAppear(){
		clearAll();
    	registerForm.classList.add("appear");
    	table.classList.add("section-appear");	
};
function recoverAppear(){
	    clearAll();
    	recoverFrom.classList.add("appear");
    	table.classList.add("section-appear");
};

function registerMessageAppear(){
	registerForm.classList.remove("appear");
	registerMessage.classList.add("appear");
};


function recoverMessageAppear(){
	recoverFrom.classList.remove("appear");
	recoverMessage.classList.add("appear");
}

function hiddenSectionDisappear(){
	table.classList.remove('section-appear');
};

function clearAll(){
		recoverFrom.classList.remove("appear");
		recoverMessage.classList.remove("appear");
		registerForm.classList.remove("appear");
		registerMessage.classList.remove("appear");
}