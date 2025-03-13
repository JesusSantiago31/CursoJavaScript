function obtenerDominio(url) {
    return new URL(url).hostname;
}
console.log(obtenerDominio("https://www.ejemplo.com/pagina")); // "www.ejemplo.com"
