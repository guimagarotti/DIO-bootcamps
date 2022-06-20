function returnValues(array) {
    let parNums = []
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            parNums.push(array[i])
        } else {
            console.log(`${array[i]} NÃO é par!`)
        }
    } 
    console.log(parNums)
}

let array = [1, 2, 4, 5, 7, 8]

console.log(returnValues(array));
