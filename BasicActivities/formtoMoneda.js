function formatoMoneda(num) {
    return num.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}
console.log(formatoMoneda(1234.56)); // "1.234,56 €"
