let form = document.querySelector("form");

form.addEventListener('submit', function(evt){
    		evt.preventDefault();

    		if( validateName() && validateLastName() && validateEmail()){
    			form.submit();
    		}
 		});

function validateEmail(){

	var email = document.getElementById('emailInput');
	

	var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if(!emailValido.test(email.value) ){
		alert("Formato de email invalido");
		return false;
	}else if (email.value.trim().length > 20) {
      alert("El limite de caracteres en el campo de email es 20");
      return false;
  }
	return true;
} 

function validateName(){

	var name = document.getElementById('nameInput');
	
	if(name.value.trim().length > 20){
	 	alert("El limite de caracteres en el campo de nombre es 20");
		return false;
	} else if ( /\d/.test(name.value.trim())) {
      alert("No se permite numeros en el campo de nombre");
      return false;
  }
	return true;
} 

function validateLastName(){

	var lastName = document.getElementById('lastNameInput');
	
	if(lastName.value.trim().length > 20){
		alert("El limite de caracteres en el campo de apellido es 20");
		return false;
	}else if ( /\d/.test(lastName.value.trim())) {
      alert("No se permite numeros en el campo de apellido");
      return false;
  }
	return true;
} 