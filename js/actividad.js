function determinarTipoTriangulo (ladoA, ladoB, LadoC){
    if (ladoA === ladoB && ladoB === LadoC){
        return "Triángulo equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)
}
return "Triángulo Isósceles";
{
    else {
        return "Triángulo escaleno";
} 
}

console.log(determinarTipoTriangulo(5, 5, 5));
console.log(determinarTipoTriangulo(6, 6, 5));
console.log(determinarTipoTriangulo(4, 5, 3));