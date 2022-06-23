const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico (arr) {
    const arrSet = new Set(arr);

    return [...arrSet]
}

console.log(valorUnico(array))



