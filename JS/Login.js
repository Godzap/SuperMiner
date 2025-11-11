// ===================
//    LOGIN SYSTEM
// ===================

function isUserLogged() {
	const cookie = document.cookie;
	return cookie.includes("logged=true");
}
 
if(isUserLogged()) {
	window.location.href = "../HTML/Cart.html";
}
 
const form = document.querySelector("#login-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const nickInput = document.querySelector("#nick");
	const confirmInput = document.querySelector("#confirm");
 
	const nick = nickInput.value.trim();
	const confirm = confirmInput.value.trim();
 
	if(nick.length < 3 || nick.length > 16) {
	   form.reset();
	   nickInput.classList.add("input-invalid");
	   nickInput.setCustomValidity("Informe um apelido entre 3 e 16 caracteres");
	   nickInput.reportValidity();
 
	   setTimeout(() => {
		  nickInput.classList.remove("input-invalid");
		  nickInput.setCustomValidity("");
		}, 2000);
	   return;
	}
 
	if(confirm.length < 3 || confirm.length > 16) {
		form.reset();
		confirmInput.classList.add("input-invalid");
		confirmInput.setCustomValidity("Informe um apelido entre 3 e 16 caracteres");
		confirmInput.reportValidity();
  
		setTimeout(() => {
			confirmInput.classList.remove("input-invalid");
			confirmInput.setCustomValidity("");
		}, 2000);
		return;
	}
 
	if(nick !== confirm) {
		form.reset();
		confirmInput.classList.add("input-invalid");
		confirmInput.setCustomValidity("The values â€‹â€‹must be the same.");
		confirmInput.reportValidity();
  
		setTimeout(() => {
			confirmInput.classList.remove("input-invalid");
			confirmInput.setCustomValidity("");
		}, 2000);
		return;
	}
 
	const date = new Date();
	date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
	const expires = ";expires=" + date.toUTCString() + ";path=/"; 
 
	document.cookie = "nickname=" + nick + expires;
	document.cookie = "logged=true" + expires;
 
	nickInput.value = "";
	confirmInput.value = "";
	window.location.href = "../HTML/Cart.html";
});
