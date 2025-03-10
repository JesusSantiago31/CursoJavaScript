function arrayAObjeto(arr) {
    return Object.assign({}, arr);
}
console.log(arrayAObjeto(["a", "b", "c"])); // {0: "a", 1: "b", 2: "c"}
