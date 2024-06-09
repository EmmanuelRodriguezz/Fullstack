
const distanciatexto = prompt('Ingrese la distancia en metros:');
const distancia = parseInt(distanciatexto);

console.log(distancia)

function medioTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "Pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "Bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "Colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "Auto";
    } else {
        return "Avión";
    }
}
const medio = medioTransporte(distancia);
console.log("Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: " + medio);
document.write("Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: " + medio);