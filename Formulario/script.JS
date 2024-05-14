const FRMSEGURO = document.querySelector("#frmSeguro1");
const FRMUSUARIO = document.querySelector("#frmDatos");


FRMUSUARIO.addEventListener("submit",extraerDatos);
FRMSEGURO.addEventListener("submit",extraerDatos);

function extraerDatos(evt){
    evt.preventDefault();
    alert("funciona");
    let nombreU = document.querySelector("#txtNombre").value;
    let fechaN = document.querySelector("#dtNacimiento").value;
    let tipoS = document.querySelector("#cmbTS").value;

    let tipoE = document.querySelector("#cmbEnf").value;
alert(fechaN);
    if(nombreU==""){
        alert("Introduce tu nombre");
        return false;
    }else if(fechaN==""){
        alert("Introduce tu fecha de nacimiento")
        return false;        
    }else if (tipoS=="ninguno"){
        alert("Selecciona el tipo de seguro a cotizar")
        return false;
    }else{
        alert("llega hasta aqui")
        let imprimir = document.getElementById("resultado")
        imprimir.textContent = `Hola ${nombreU}, Trabajó: ${horasT}  horas, Recibirá $ ${sueldoT}`;
    }
}