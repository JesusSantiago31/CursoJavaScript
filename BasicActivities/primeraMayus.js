function capitalizar(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}
console.log(capitalizar("hola mundo")); // "Hola Mundo"
