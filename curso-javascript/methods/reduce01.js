const numeros = [4, 5, 66, 42, 0];

function somaNumeros(arr) {
    return arr.reduce(function (n1, n2) {
        return n1 + n2;
    })
}

console.log(somaNumeros(numeros))