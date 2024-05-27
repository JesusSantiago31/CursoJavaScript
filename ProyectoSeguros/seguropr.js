//Escribir el id del formulario para podedr modificarlo con eventos
//Para realizarlo utilizaremos las funciones dom de javascript 
const FRMSEGURO=document.querySelector("#frmSeguro");
//crear un evento clic con listener
FRMSEGURO.addEventListener("submit", calcularSeguro)
//crear funcion
function calcularSeguro(evt){
    evt.preventDefault();
    let TipoSeguro = document.querySelector("#cmbTipoSeguro").value;
    let seguroA=1200;
    let seguroB=950;
    let total1;
    let total2;
    let total3;
    let total4;
    let alcohol = document.getElementById(`ckxBebesAlchol`).checked;
    let lentes = document.getElementById(`ckxUsasLentes`).checked;
    let enfermedad = document.getElementById(`ckxEnfermedad`).checked;
    let edad = document.querySelector("#txtEdad").value;

    if(TipoSeguro=="CoberturaAmplia"){
        subtotal=seguroA;
        if(alcohol){
            total1=seguroA*0.10;
        }else{
            total1=0;
        }
        if(lentes){
            total2=seguroA*0.05;
        }else{
            total2=0;
        }
        if(enfermedad){
            total3=seguroA*0.05;
        }else{
            total3=0;
        }
        if(edad > 40){
            total4=seguroA*0.20;
        }else if(edad<=40 & edad>17){
            total4=seguroA*0.10;
        }
        total=subtotal+total1+total2+total3+total4;
    }else if(TipoSeguro=="DañosTerceros"){
        subtotal=seguroB;
        if(alcohol){
            total1=seguroB*0.10;
        }else{
            total1=0;
        }
        if(lentes){
            total2=seguroB*0.05;
        }else{
            total2=0;
        }
        if(enfermedad){
            total3=seguroB*0.05;
        }else{
            total3=0;
        }
        if(edad > 40){
            total4=seguroB*0.20;
        }else if(edad<=40 & edad>17){
            total4=seguroB*0.10;
        }
        total=subtotal+total1+total2+total3+total4;
    }
let imprimir = document.getElementById("resultado")
imprimir.textContent = `Subtotal a pagar:$${subtotal} Alcohol:$${total1} Lentes:$${total2} Enfermedad:$${total3} Edad:$${total4}  Total:$${total}`;
}
