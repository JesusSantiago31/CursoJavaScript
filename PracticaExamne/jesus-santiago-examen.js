
const FRMIMPORTE = document.querySelector("#frmPrecioEstacionamiento");

FRMIMPORTE.addEventListener("submit",extraerD );

function extraerD(evt){
    evt.preventDefault();

    let  diaS= parseInt(document.querySelector("#cmbDia").value);
    let nEntradaH = parseInt(document.querySelector("#nmEntradaH").value);
    let nEntradaM = parseInt(document.querySelector("#nmEntradaM").value);
    let nSalidaH =parseInt(document.querySelector("#nmSalidaH").value);
    let nSalidaM =parseInt(document.querySelector("#nmSalidaM").value);
   
    if(diaS == 0){
        alert("Introduce los dias");
       return false;
    }else if ( nmEntradaH.value == ""  ){
        alert("introduce la hora de entrada");
        return false;
    }else if (nmEntradaM .value ==""){
        alert ("introduce los minutos de entrada")
        return false;
    }else if (nmSalidaH.value == ""){
        alert ("introduce la hora de salida")
        return false;
    }else if (nmSalidaM .value ==""){
        alert ("introduce los minutos de salida")
        return false;
    }else if ((nEntradaH < 0) ){
        alert("Formato Incorrecto de Hora entrada")
        return false;
    }else if ((nEntradaH >= 24)){
        alert("Formato Incorrecto de Hora entrada")
        return false;
    }else if ((nEntradaM < 0)){
        alert("Formato Incorrecto de Minutos entrada")
        return false;
    }else if ((nEntradaM > 59)){
        alert("Formato Incorrecto de Minutos entrada")
        return false;
    }else if ((nSalidaH < 0)){
        alert("Formato Incorrecto Hora salida")
        return false;
    }else if ((nSalidaH >= 24)){
        alert("Formato Incorrecto Hora salida")
        return false;
    }else if ((nSalidaM < 0) ){
        alert("Formato Incorrecto Minuto salida")
        return false;
    }else if ( (nSalidaM > 59)){
        alert("Formato Incorrecto Minuto salida")
        return false;
    }
    
    let imprimir = document.getElementById("resultado");
    imprimir.textContent = calcularImporteTDA (diaS, nEntradaH, nEntradaM, nSalidaH, nSalidaM);

    

}
const calcularImporteTDA=(diaS, nEntradaH, nEntradaM, nSalidaH, nSalidaM) =>{
    let bandera = true; 

    let totalH = nSalidaH-nEntradaH;
    let totalM = nSalidaM-nEntradaM;
    let costoTotal;

    if ((totalH < 0) && (totalM < 0)){
        bandera = false;
    }
    

    if(totalM > 5){
        totalH++
    }

    switch (diaS){
        case 1:
        case 2:
        case 3:
            costoTotal = (totalH * 10);
        break;
        case 4:
        case 5:
            costoTotal = (totalH * 12);
        break;
        case 6:
        case 7:
            costoTotal = (totalH * 15);
        break
        default:
            alert("No se introdujo ninguna fecha")
    }

    
    if(bandera){
        return  `Importe ${costoTotal} `
    }else{
        return "Fecha Incorrecta, intente de nuevo por favor";
    }


}