

var id = document.forms['form']['id'];
var password = document.forms['form']['password'];

var id_error = document.getElementById('id_error');
var pass_error = document.getElementById('pass_error');

id.addEventListener('textInput', id_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (id.value.length != 12) {
		id.style.border = "1px solid red";
		id_error.style.display = "block";
		id.focus();
		return false;
	}
	if (password.value.length < 8) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function id_Verify(){
	if (id.value.length == 12) {
		id.style.border = "1px solid silver";
		id_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

