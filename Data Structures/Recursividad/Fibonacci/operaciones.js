
const FRMO = document.querySelector("#frmOperaciones");

FRMO.addEventListener("submit",extraerDatos);

function extraerDatos(evt){
    evt.preventDefault();

    let x = parseInt(document.getElementById("nmFactorial").value);

    if(nmFactorial.value ==""){
        alert("Introduce un valor en el campo Factorial")
        return false;
    } else if (x <= 0){
        alert("Debes introducir valores positivos")
        return false;
    }

    let imprimir = document.getElementById("resultado");
    imprimir.textContent = `El factorial de ${x} es = `+imprimirFact(x);
    console.log(imprimirFact(x))

    
}

const imprimirFact = (x) => {    
    x = Math.abs(x);
    if(x <= 1) {
        return 1;
    }else{
        return (x * imprimirFact(x - 1)) ;
    }
    
}
const FRMOP = document.querySelector("#frmFubonacci");

FRMOP.addEventListener("submit",extraerDatosF);

function extraerDatosF(evt){
    evt.preventDefault();


    let y = parseInt(document.getElementById("nmFub").value);

    if(nmFub.value ==""){
        alert("Introduce un valor en el campo Fubonacci");
        return false;
    }  
    
    if (y >= 0) {        

        for (var a = 0; a < y; a++) {
            
            console.log(imprimirFub(a));
            document.getElementById("resultado2").textContent = (imprimirFub(a));
        }
    } else {
        alert("Introduce un valor mayor a 0")
        return false;

    }
}


    
const imprimirFub = (y) =>{
    
    if (y <=1){

        return (y);
        
    } else{
                
        return imprimirFub(y - 1)+ imprimirFub(y - 2)        
        
    }

}

/*
function extraerDatosF(evt){
    evt.preventDefault();

    let y = parseInt(document.getElementById("nmFub").value);

    if(nmFub.value ==""){
        alert("Introduce un valor en el campo Fubonacci");
        return false;
    } else if ( y <= 0) {
        alert ("Introduce valores mayores a 0");
        return false;
    }


    i
    console.log(imprimirFub(y))
    let imprimir = document.getElementById("resultado2");
    
    imprimir.textContent = imprimirFub(y);
    
    
    

}*/