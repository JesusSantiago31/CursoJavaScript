function sumaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumaArray([1, 2, 3, 4])); // 10
