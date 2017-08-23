/*
 * Archivo principal de JS
 */
 //funcionalidad de scroll en el menú
var menu = document.getElementById("menuId");

window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 150) {
    menu.classList.add('small');
  } else {
    menu.classList.remove('small');
  }
});

//Validación de inputs del formulario de contacto
(function validate(){
	var nameInvalido = document.createElement("p");
	nameInvalido.classList.add("hide");
	document.getElementById("name-form").appendChild(nameInvalido);
	nameInvalido.innerHTML = "Ingrese un nombre válido con inicial en mayúscula";

	var emailInvalido = document.createElement("p");
	emailInvalido.classList.add("hide");
	document.getElementById("email-form").appendChild(emailInvalido);
	emailInvalido.innerHTML = "Ingrese un email válido";

	var errorTelefono = document.createElement("p");
	errorTelefono.classList.add("hide");
	document.getElementById("phone-form").appendChild(errorTelefono);
	errorTelefono.innerHTML = "Ingrese un teléfono válido";

	var errorMensaje = document.createElement("p");
	errorMensaje.classList.add("hide");
	document.getElementById("message-form").appendChild(errorMensaje);
	errorMensaje.innerHTML = "Debe ingresar un mensaje";


	document.getElementById("sendId").addEventListener("click", function(val){
		var nombre = document.getElementById("nameId").value;
		var email = document.getElementById("emailId").value;
		var telefono = document.getElementById("phoneId").value;
		var mensaje = document.getElementById("messageId").value;

		val.preventDefault()
			
		if(nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre == ""){
			nameInvalido.classList.remove("hide");
		}else{
			nameInvalido.classList.add("hide");	
		}

		if(email.indexOf("@") == -1){
			emailInvalido.classList.remove("hide");
		}else{
			emailInvalido.classList.add("hide");
		}

		if(telefono == "" || isNaN(telefono)){
			errorTelefono.classList.remove("hide");
		}else{
			errorTelefono.classList.add("hide");
		}

		if(mensaje.length > 100 || mensaje == ""){
			errorMensaje.classList.remove("hide");
		}else{
			errorMensaje.classList.add("hide");
		}

		 return true;	
	});

})();