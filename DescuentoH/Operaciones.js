 function entradaSalidaDatos(){

 	//Entrada por teclado
	 let diasHospedaje = prompt("Ingrese los dias de hospedaje")
	let precioDia = prompt("Ingrese el precio de cada dia")
	

	let subtotal = (precioDia*diasHospedaje);
	let descuento=0

	if (diasHospedaje<=5){
		alert("No gozas de ningun desceunto")
	} if(diasHospedaje>5 && diasHospedaje<=10){
		descuento = ((subtotal*10)/100);
	} if (diasHospedaje>10 && diasHospedaje<=15){
		descuento = ((subtotal*15)/100);
	} if(diasHospedaje > 15){
		descuento = ((subtotal*20)/100);
	}


	//Salida por pantalla
	alert("El subtotal es de $" + (subtotal) + "\nEl descuento es de $" + (descuento) + "\nEl precio a pagar es de $" +(subtotal-descuento));
	
}