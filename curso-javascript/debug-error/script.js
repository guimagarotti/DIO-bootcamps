const array = [1, 3, 5, 7, 9]
const number = "g"

function debugError (arr, num) {
    try {
        if (!arr && !num) {
            throw new ReferenceError('Insira parâmetros válidos!');
        }
    
        if (typeof arr !== 'object') {
            throw new TypeError("O Array não é um objeto!");
        }
    
        if (typeof num !== 'number') {
            throw new TypeError("O número não é um número!");
        }
    
        if (arr.length !== num) {
            throw new RangeError("Os tamanhos são diferentes!")
        }
    
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Erro tipo ReferenceError")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log("Erro tipo TypeError")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log("Erro tipo RangeError")
            console.log(e.name)
            console.log(e.stack)
        } else {
            console.log("Erro inesperado!" + e)
        }
    }    
}

console.log(debugError(array, 5))
