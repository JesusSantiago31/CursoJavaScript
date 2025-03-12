function generarPassword(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return Array.from({length: longitud}, () => caracteres.charAt(Math.floor(Math.random() * caracteres.length))).join("");
}
console.log(generarPassword(8));
