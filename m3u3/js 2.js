const num1 = prompt("numero 1")
const num2 = prompt("numero 2")
const num3 = prompt("numero 3")
const num4 = prompt("numero 4")


function encontrarMayor(numeros) {
    let mayor = -Infinity;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

const arrayNumeros = [num1, num2, num3, num4];
const mayor = encontrarMayor(arrayNumeros);
console.log(`El número más grande de ${arrayNumeros} es ${mayor}`);