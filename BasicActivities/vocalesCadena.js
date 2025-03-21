function contarVocales(str) {
    let match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}
console.log(contarVocales("JavaScript")); // 3
