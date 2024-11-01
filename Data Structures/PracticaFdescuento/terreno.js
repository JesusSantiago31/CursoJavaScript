//Recibir el id del formulario para poderlo manipular por eventos 
//Para realizarlo utilizaremos las funciones del DOM de JavaScript
const FRMHOTEL = document.querySelector("#frmHotel");

//Crear un evento clic con un Listener(
FRMHOTEL.addEventListener("submit",calcularHospedaje)

function calcularHospedaje(evt){
    evt.preventDefault();//Hace que la pagina no se refresque
    //Recibir los datos del formulario
    let largoTerreno = document.querySelector("#txtLargo").value;
    let anchoTerreno = document.querySelector("#txtAncho").value;
    let precioM = document.querySelector("#txtPrecioM").value;
    let descuento = 0;
    let total;
    //Calcular el area 
    let area = largoTerreno * anchoTerreno;

    //Calculando el total

    let subtotal = area*precioM;

    //validamos descuento en funcion de los dias
    if(area > 400 && area <= 800){
        descuento = subtotal * 0.05 ;
    }else if(area > 800 && area <= 1000) {
        descuento = subtotal * 0.08;
    } else if(area > 1000 && area <= 2000 ){
        descuento = subtotal * 0.1;
    }else if (area > 2000){
        descuento = subtotal * 0.25;
    }

    //imprimiendo el resultado
    let imprimir = document.getElementById("resultado")
    imprimir.textContent = `Subtotal a pagar: $${subtotal}  Descuento $${descuento} Total $${subtotal-descuento}`;
    if(precioM==""){
        alert("Introduce un valor")
        return false;
    }else if ( anchoTerreno==""){
        alert("Introduce un valor")
    }else if (largoTerreno==""){
        alert("introduce un valor")
    }
    return true; 
}
