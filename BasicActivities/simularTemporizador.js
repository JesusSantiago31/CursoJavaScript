function temporizador(segundos) {
    let contador = 0;
    let intervalo = setInterval(() => {
        contador++;
        console.log(`Han pasado ${contador} segundos`);
        if (contador >= segundos) clearInterval(intervalo);
    }, 1000);
}
temporizador(5);
