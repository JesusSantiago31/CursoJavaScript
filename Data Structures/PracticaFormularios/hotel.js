//Recibir el id del formulario para poderlo manipular por eventos 
//Para realizarlo utilizaremos las funciones del DOM de JavaScript
const FRMHOTEL = document.querySelector("#frmHotel");

//Crear un evento clic con un Listener(
FRMHOTEL.addEventListener("submit",calcularHospedaje)

function calcularHospedaje(evt){
    evt.preventDefault();//Hace que la pagina no se refresque
    //Recibir los datos del formulario
    let diasHosp = document.querySelector("#txtDiasHosp").value;
    let precioPorDia = document.querySelector("#txtPrecioDiario").value;
    let TipoPago = document.querySelector("#cmbTipoPago").value;
    let descuento = 0;
    let total;
    //Calculando el total
    let subtotal = diasHosp*precioPorDia;

    //validamos descuento en funcion de los dias
    if(diasHosp > 5 && diasHosp <= 10){
        descuento = subtotal * 0.1 ;
    }else if(diasHosp > 10 && diasHosp <= 15) {
        descuento = subtotal * 0.15;
    } else if(diasHosp > 15 ){
        descuento = subtotal * 0.2;
    }

    total = subtotal - descuento ;
    if(TipoPago=="tarjeta"){
        total= total *1.03;
    }
    //imprimiendo el resultado
    let imprimir = document.getElementById("resultado")
    imprimir.textContent = `Subtotal a pagar: $${subtotal} \n Descuento $${descuento}\n Total $${total} Tipo de Pago ${TipoPago}`;

}
//Calcular e imprimir el precio de un terreno del cual se tienen los siguientes datos: Medida del largo, ancho y precio por metro cuadrado . Si el terreno tiene mas de 400 mts se le descuenta el 5%, si tiene mas de 800 mts el 8%, y si tiene mas de 1000mts el 10% y si mide mas de 2000 mts el 25%
//validar un campo vacio con JavaScript