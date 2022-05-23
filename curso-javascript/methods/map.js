const valores = [2, 4, 6, 8, 10];

function mapComArray(arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}

console.log(mapComArray(valores));