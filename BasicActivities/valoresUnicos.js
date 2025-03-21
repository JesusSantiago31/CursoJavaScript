function valoresUnicos(arr) {
    return [...new Set(arr)];
}
console.log(valoresUnicos([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
