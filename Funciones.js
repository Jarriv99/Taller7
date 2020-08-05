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
$(document).ready(function () {
    var datos;

    $.ajax({
        type: "GET",
        url: "https://www.datos.gov.co/api/views/xdk5-pm3f/rows.json?accessType=DOWNLOAD",
        data: "data",
        dataType: "json",
        success: function (response) {  
            
            datos = response.data;

            d=[];
        
            for(var indice of datos)
            {
                if(d.indexOf(indice[10])==-1)
                {
                    $('#departamento').append
                    (
                        `<option value="${indice[10]}">${indice[10]}</option>`
                    );

                        d.push(indice[10]);
                }
            }

            $('#departamento').change(function () { 
        
                valor=this.options[this.selectedIndex].value;
                console.log(valor);
                municipios=$("#ciudad");
                $('#ciudad').html("");
                $('#seleccionciudad').css('display', 'block');

                for(var indice of datos)
                {
                    
                    if(indice[10]==valor)
                    
                    municipios.append(
                        `<option value="${indice[12]}">${indice[12]}</option>`
                    );
                } 
            });
        }
    });
});
