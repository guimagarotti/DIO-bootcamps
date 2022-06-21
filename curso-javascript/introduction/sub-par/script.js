function substituteArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === 0) {
            console.log("Já é 0!")
        } else if (arr[i] % 2 === 0) {
            console.log(`${array[i]} por 0...`)
            array[i] = 0
        }
    }

    return arr;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90]

console.log(array)
console.log(substituteArray(array))
