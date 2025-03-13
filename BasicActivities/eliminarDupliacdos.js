function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
