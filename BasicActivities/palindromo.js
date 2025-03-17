function esPalindromo(palabra) {
    let invertida = palabra.split("").reverse().join("");
    return palabra === invertida;
}
console.log(esPalindromo("radar")); // true
