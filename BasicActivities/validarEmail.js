function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(validarEmail("correo@example.com")); // true
