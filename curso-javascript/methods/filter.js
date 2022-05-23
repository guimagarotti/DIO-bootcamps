const numeros = [1, 12, 16, 23, 55, 67, 30, 2, 4];

function filterPares(arr) {
    return arr.filter(function (pares) {
        return pares % 2 === 0;
    })
}

console.log(filterPares(numeros))

