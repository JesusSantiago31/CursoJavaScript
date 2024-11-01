
const FRMORD= document.querySelector("#frmOrdenamientos");

const FRMBUSQUEDAS= document.querySelector("#frmBusquedas");
FRMBUSQUEDAS .addEventListener("submit",ingresar2 );

FRMORD.addEventListener("submit",ingresar );

function ingresar(evt){
    evt.preventDefault();

    let metodo = parseInt(document.querySelector("#cmbOrd").value);
    let a
    let n
    if(metodo==0){
        alert("Seleccione una opcion valida :)")
        return ;
    } else {
        n = parseInt(prompt("Numero de elementos"));
        a = Array (n);
        for(let c=0 ; c < n ; c++){
            a[c] = parseInt(prompt("Ingrese elemento" + (c+1)));
            console.log(a[c]);
        }

        console.log("----LISTA ORIGINAL----");
        imprimir(a);
    }
    
    inter= parseInt(prompt("1 - Ascendente, 2 - Descendente"));
    
    switch (metodo){       
        case 1:
            console.log("-----LISTA ORDENADA Intercambio-----");
            ordIntercambio(a);
        break;
        case 2:
            
            console.log("-----LISTA ORDENADA Bubble-----");
            if (inter==1){
                console.log("-----ASCENDENTE-----");
                ordBubbleSort(a);  
            }else if (inter==2){
                console.log("-----DESSCENDENTE-----");
                ordBubbleSort2(a);  
            }
        break;
        case 3:
            console.log("-----LISTA ORDENADA QuickSort-----");
            
            if (inter==1){
                console.log("-----ASCENDENTE-----");
                imprimir(ordQuickSort(a));  
            }else if (inter==2){
                console.log("-----DESCENDENTE-----");
                 imprimir(ordQuickSort2(a));  
            }
                      
        break;
        case 4:
            console.log("-----LISTA ORDENADA ShellSort-----");
            console.log("-----ASCENDENTE-----");
            imprimir(ordShellSort(a));
        break;

    }
    
}

function ingresar2(evt){
    evt.preventDefault();

    let metodo = parseInt(document.querySelector("#cmbBusq").value);
    let a
    let n
    if(metodo==0){
        alert("Seleccione una opcion valida :)")
        return ;
    } else {
        n = parseInt(prompt("Numero de elementos"));
        a = Array (n);
        for(let c=0 ; c < n ; c++){
            a[c] = parseInt(prompt("Ingrese elemento" + (c+1)));
            console.log(a[c]);
        }

        console.log("----LISTA ORIGINAL----");
        imprimir(a);
    }
    
   
    
    switch (metodo){       
        case 1:
            console.log("-----BSQUEDA SECUENCIAL-----");
            busquedaSecuencial(a);
        break;
        case 2:
            console.log("-----BUSQUEDA BINARIA-----");
            if(a[0] <= a[1] && a[1] <=a[2]){
                console.log(busquedaBinaria(a));
            }else{
                
                console.log(busquedaBinaria(ordQuickSort(a)));                                 

                console.log("-----Ordenacion QUICKSORT-----");
                console.log(ordQuickSort(a));
            }
            
            
        break;
        
    }
    
}

function imprimir(a){
    for(let c in a){
        console.log(a[c]);
    }
}

function ordIntercambio (a){
    let n= a.length;
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            if(a[i]>a[j]){
                let aux = a [i];
                a[i] = a[j];
                a[j] = aux;
            }
        }
    }
    
    imprimir(a);
}

function ordBubbleSort(a){
    let n= a.length;
    for(let i = 1 ; i < n ; i++){
        for(let j = 0 ; j < (n-i) ; j++){
            if(a[j]>a[j+1]){
                let aux = a [j];
                a[j] = a[j+1];
                a[j+1] = aux;
            }
        }
    }
    
    imprimir(a);
    
}

function ordBubbleSort2(a){
    let n= a.length;
    for(let i = 1 ; i < n ; i++){
        for(let j = 0 ; j < (n-i) ; j++){
            if(a[j]<a[j+1]){
                let aux = a [j];
                a[j] = a[j+1];
                a[j+1] = aux;
            }
        }
    }
    
    imprimir(a);
    
}
function ordQuickSort(a){


    if(a.length <= 1){
        return a;
    }

    let izquierdo = [];
    let derecha = [];
    let auxiliar = [];
    let pivote = a.pop();
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i] <= pivote) {
            izquierdo.push(a[i]);
        } else {
            derecha.push(a[i]);
        }
    }

    return auxiliar.concat(ordQuickSort(izquierdo), pivote, ordQuickSort(derecha));

}
function ordQuickSort2(a){


    if(a.length <= 1){
        return a;
    }

    let izquierdo = [];
    let derecha = [];
    let auxiliar = [];
    let pivote = a.pop();
    let n = a.length;
    for (let i = 0; i < (n); i++) {
        if (a[i] <= pivote) {
            derecha.push(a[i]);
        } else {
            izquierdo.push(a[i]);
        }
    }

    return auxiliar.concat(ordQuickSort(izquierdo), pivote,ordQuickSort(derecha) );

}

function ordShellSort(a){
    let incremento = a.length /2;
    while (incremento > 0) {
        for(let i = 0; i < a.length; i++) {
            let j = i;
            let dato = a[i];
            while (j >= incremento && a[j - incremento] > dato) {
                a[j] = a[j - incremento];
                j -= incremento;
            }
            a[j] = dato;
        }

        if (incremento == 2) {
            incremento =-1;
        } else {
        incremento = parseInt(incremento * 5 / 11);
        }
    }    
    return a;
}


function busquedaSecuencial(a) {    
    let elemento = parseInt(prompt('Elemento a buscar:'));
    if (Number.isInteger(elemento)) {
        let posicion = buscarElemento (a, elemento);
        if (posicion >= 0) {
            console.log('El elemento ' + elemento + ' se encuentra en la posición '+ (posicion + 1));
        } else {
            console.log('El elemento ' + elemento + ' no se encontró.');
        }
    } else {
        console.error('El elemento a buscar debe ser un número entero.');
    }
}

function buscarElemento (a, elemento) {
    for (let i=0; i < a.length; i++) {
        if (a[i] == elemento) {
            return i;
        }
    }    
    return -1;
}

function busquedaBinaria(a) {    
    let elemento = parseInt(prompt('Elemento a buscar:'));
    if (Number.isInteger(elemento)) {
        let posicion = busquedaBinaria2 (a, elemento);
        if (posicion >= 0) {
            console.log('El elemento ' + elemento + ' se encuentra en la posición '+ (posicion + 1));
        } else {
            console.log('El elemento ' + elemento + ' no se encontró.');
        }
    } else {
        console.error('El elemento a buscar debe ser un número entero.');
    }
}
function busquedaBinaria2(datos, valor) {
    let izquierda = 0;
    let derecha = datos.length-1;
    while (izquierda <= derecha) {
        let mitad = Math.floor((izquierda + derecha) / 2);
        let dato = datos[mitad];
        if (dato == valor) {
            return mitad;
        } else if (valor > dato) {
            izquierda = mitad + 1;
        } else {
            derecha = mitad - 1;
        }
    }
    return -1;
}

