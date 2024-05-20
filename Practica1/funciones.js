
function calcularEdad(AnioNacim){
	 alert("Tu edad es " + (2023-AnioNacim) + " años")
}
 
function saludar(nombre){
	alert ("Hola Mundo " + nombre + " desde JavaScript")
}

function variables(){

/*Hay 3 formas de declarar una variable
 1) var:Declarar variables pero permite una redeclaración
	Ejm: var edad = 19;
    NOTA:En la actualidad su uso es poco frecuente 
*/

	var edad = 19;
	var edad = 20;
	console.log("Edad = " + edad);

/*
2)let: No permite una redeclaracion en un  mismo scope (agrupacion de codigo dentro de llaves)

*/
	let salario = 10000
	if(true){
		let salario=15000
			console.log("Tu salario es: $" + salario)
	}
	console.log("Tu salario es: $" + salario)
/*
3) const:Declara una constante y valor su valor no cambia
*/
	const IVA = 16;
	const PI = 3.1416;

	console.log("const IVA = " + (IVA+1));
	console.log("const  PI = " + (PI-0.5));
}

 function entradaSalidaDatos(){
 	//Entrada por teclado
	let horasTrabajadas = prompt("Ingrese horas trabajadas")
	let salarioPorHora = prompt("Ingrese el salario por hora")

	//Salida por pantalla
	alert("El aslario del trabajador es de $" + (salarioPorHora*horasTrabajadas))
}