function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    return hoy.getFullYear() - nacimiento.getFullYear();
}
console.log(calcularEdad("2000-01-01")); // 25 (depende del año actual)
