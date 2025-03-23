function calcularMediana(arr) {
    let ordenado = arr.slice().sort((a, b) => a - b);
    let mitad = Math.floor(ordenado.length / 2);
    return ordenado.length % 2 === 0 ? (ordenado[mitad - 1] + ordenado[mitad]) / 2 : ordenado[mitad];
}
console.log(calcularMediana([5, 3, 8, 1])); // 4
