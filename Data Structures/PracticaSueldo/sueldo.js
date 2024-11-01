//Recibir el id del formulario para poderlo manipular por eventos 
//Para realizarlo utilizaremos las funciones del DOM de JavaScript
const FRMHOTEL = document.querySelector("#frmSueldo");

//Crear un evento clic con un Listener(
FRMHOTEL.addEventListener("submit",calcularSueldo)

function calcularHospedaje(evt){
    evt.preventDefault();//Hace que la pagina no se refresque
    //Recibir los datos del formulario
    let horasT = document.querySelector("#txtHorTrab").value;
    let sueldoH = document.querySelector("#txtSueldo").value;
    let nombreT = document.querySelector("#txtNombre").value;
    let tipoT = document.querySelector("#cmbTipoT").value;
    let sueldoT;   
    let sueldoE     
    //Calculando el total

    let subtotal = area*precioM;

    //validamos descuento en funcion de los dias
    
    if(horasT<=40){
        sueldoT = horasT * sueldoH;
    }else if( horasT > 40){
        if( tipoT == tipo1 ){
            sueldoE = sueldoH * 1.5;
            sueldoT = sueldoE * horasT;
        }else if(tipoT == tipo2){
            sueldoE = sueldoH * 2;
            sueldoT = sueldoE * horasT;
        } else if(tipoT == tipo3){
            sueldoE = sueldoH * 2.5;
            sueldoT = sueldoE * horasT;
        }else if (tipoT == tipo4){
            sueldoE = sueldoH * 3;
            sueldoT = sueldoE * horasT;
        }
    }
    //imprimiendo el resultado
    let imprimir = document.getElementById("resultado")
    imprimir.textContent = `El empleado ${nombreT}, Trabajó: ${horasT}  horas, Recibirá $ ${sueldoT}`;

    if(horasT==""){
         alert("Introduce las horas trabajadas")
        return false;
    }else if ( sueldoH==""){
        alert("Introduce el sueldo")
    }else if (nombreT==""){
        alert("introduce el nombre del trabajador")
    }else if(tipoT == ""){
        alerrt("Introduce el tipo del trabajador")
    }
    return true; 
}
