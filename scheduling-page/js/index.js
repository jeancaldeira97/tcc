var div = document.querySelectorAll(".horario");
var btnAgendar = document.querySelector(".btn-agendar");
var btnExcluir = document.querySelector(".btn-excluir");
var clientInput = document.querySelector(".client");
var startInput = document.querySelector(".time-start");
var endTime = document.querySelectorAll(".end");
var selectedTime = document.querySelector("#select_end");
var atendimentoTime = document.querySelectorAll(".atendimento");


div.forEach(function(element){
	element.onclick = divClick;
});

btnAgendar.onclick = addContent;
btnExcluir.onclick = deleteHigh;


//Destaca a div clicada//
function divClick(){
		clientInput.focus();
		var high = document.querySelectorAll(".select");
		var approved = 1;

		if(high.length>0){
			if(!this.classList.contains("select")){
    			var approved=0;
    		}
    		clearAll();
    	}
		
		if(high.length===0 || approved===0){
	    	
	    	var content = this.textContent;
	    	var divTime = this.parentNode.querySelector(".atendimento");
	    	clientInput.value=content;
	    	if(content===""){
	    		manipulateSelectEnd(divTime,this);
	    		this.classList.add("select");
		    	startInput.value=divTime.textContent;
		    }else{
		    	var tdColumns = this.parentNode.querySelectorAll("td");
		    	btnExcluir.classList.add("show");
		    	btnAgendar.textContent="Editar";
		    	for(var i = 0; i<tdColumns.length;i++){
					if(tdColumns[i]===this){
						var idColumn = i;
					}
				}
				var teste = 0;
				for(var i=0; i<atendimentoTime.length; i++){
			    	var all = atendimentoTime[i].parentNode.querySelectorAll("td");
			    	if(all[idColumn].textContent===content){
			    		if(teste==0){
			    			manipulateSelectEnd(all[idColumn].parentNode.querySelector(".atendimento"),all[idColumn]);
			    			console.log(all[idColumn]);
			    			teste=1;
			    		}
			    		all[idColumn].classList.add("select");
			    	}
				}
				writeTime();
		    }
		}
}



function clearAll(){
	/*Limpa todos os campos do cadastro*/
	clientInput.value="";
	startInput.value="";
	selectedTime.selectedIndex = 0;
	btnExcluir.classList.remove("show");
	btnAgendar.textContent="Agendar";
	endTime.forEach(function(element){
		element.classList.remove("show");
	});

	/*Remove o select de todos os campos da agenda*/
	div.forEach(function(element){
		element.classList.remove("select");
	});
}

/*Preenche o campo de ínicio e final quando a div é clicada*/
function writeTime(){
	var high = document.querySelectorAll(".select");
	var last = high[high.length-1];
	var first = high[0];
	startInput.value = first.parentNode.querySelector(".atendimento").textContent;
	for(var i = 0; i < endTime.length; i++){
		if(endTime[i].textContent==last.parentNode.querySelector(".atendimento").textContent){
			selectedTime.selectedIndex = i + 2;
		}
	}
}



/*Conclui o cadastramento do usuário*/
function addContent(){
	var high = document.querySelector(".select");
	addAll(high);
	clearAll();
};


/*Preenche todas colunas: Horário final - Horário Inicio*/
function addAll(high){
		var tdColumns = high.parentNode.querySelectorAll("td");
		var inicio = high.parentNode.querySelector(".atendimento");
		for(var i = 0; i<tdColumns.length;i++){
			if(tdColumns[i]==high){
				var idColumn = i;
			}
		}

		for(var i=0; i<atendimentoTime.length; i++){
			var atend = atendimentoTime[i].textContent;
			var allColumns = atendimentoTime[i].parentNode.querySelectorAll("td");
			
	    	if((atend>=inicio.textContent) && (atend < selectedTime.value)){
	    		changeContent(allColumns[idColumn]);
    		}else{
    			if(allColumns[idColumn].classList.contains('select')){
    				allColumns[idColumn].textContent="";
    			}
    		}
    	}	
}

/*Limita o número de caracteres na visualização*/
function changeContent(high){
	var string = clientInput.value;
	high.title=string;
	if(string.length>15){
		string = string.substr(0,14) + '...';
	}
	high.textContent=string;
}

/*Deleta horário agendado*/
function deleteHigh(){
	var high = document.querySelectorAll(".select");
	high.forEach(function(element){
		element.textContent="";
		element.title="";
	});
	clearAll();
}


/*Manipula o Horário Final que deve ser mostrado*/
function manipulateSelectEnd(divTime, element){
	var tdColumns = element.parentNode.querySelectorAll("td");

	for(var i = 0; i<tdColumns.length;i++){
		if(tdColumns[i]===element){
			var idColumn = i;
		}
	}

	for(var i = 0; i < atendimentoTime.length; i++){
		if(endTime[i].textContent>divTime.textContent){
			var all = atendimentoTime[i].parentNode.querySelectorAll("td");
			if(all[idColumn].textContent=="" || all[idColumn].textContent==element.textContent){
				endTime[i].classList.add("show");
			}else{
				i = atendimentoTime.length;
			}
		}
	}
}



/*Menu*/

var menuOpen = document.querySelector(".open-menu");
var closeMenu = document.querySelector(".close-menu");
var insideMenu = document.querySelector(".menu");
menuOpen.addEventListener("click",function(){
   menuOpen.classList.add("hidden");
   closeMenu.classList.add("show");
   insideMenu.classList.add("show");
});

closeMenu.addEventListener("click",function(){
   menuOpen.classList.remove("hidden");
   closeMenu.classList.remove("show");
   insideMenu.classList.remove("show");	

});



/*Table*/
var selectTable = document.querySelector("#select_table");
var allTable = document.querySelectorAll(".hidable");
selectTable.addEventListener("change", function() {
	allTable.forEach(function(element){
		if(!element.classList.contains("mobile-disappear")){
			element.classList.add("mobile-disappear");
		}
		if(element.classList.contains(selectTable.options[selectTable.selectedIndex].value)) {
				element.classList.remove("mobile-disappear");
		}
		
	});
}); 