function submitEdad() {
    var Bdate = document.getElementById('Edad').value;
    var Bday = +new Date(Bdate);
		Bdate =  ~~ ((Date.now() - Bday) / (31557600000)) + " Años";
    var theBday = document.getElementById('Resultado');
    theBday.innerHTML = Bdate;
}
function PassValidation(){
	var pass = document.getElementById("pass");
    var passconfirm = document.getElementById("confirmpass");
    if (pass.value == passconfirm.value) {
        document.getElementById("invalid-pass").style.display = "none";
    } else {
        document.getElementById("invalid-pass").style.display = "block";
        passconfirm.value = '';
    };
    
}
function ValidationName(){
	var charactersN = document.getElementById("name");
    if (charactersN.value.length <= 25) {
        document.getElementById("invalid-name").style.display = "none";
    } else {
        document.getElementById("invalid-name").style.display = "block";
        charactersN.value = '';
    }
}
function ValidationLN(){
	var charactersL = document.getElementById("lastname");
    if (charactersL.value.length <= 25) {
        document.getElementById("invalid-lastname").style.display = "none";
    } else {
        document.getElementById("invalid-lastname").style.display = "block";
        charactersL.value = '';
    }
}
function UserName(){
	var User = document.getElementById("UN");
    if (User.value.length >= 5 && User.value.length <= 20) {
        document.getElementById("invalid-UN").style.display = "none";
    } else {
        document.getElementById("invalid-UN").style.display = "block";
        User.value = '';
    }
}