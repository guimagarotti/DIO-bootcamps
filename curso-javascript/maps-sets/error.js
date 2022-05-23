function meuArray(arrow, numero) {
    try {
        if (!arrow && !numero) throw new ReferenceError("Insira números válidos!");
    
        if (typeof arrow != 'object') throw new TypeError("Essa array precisa ser do tipo OBJECT!");
    
        if (typeof numero != 'number') throw new TypeError("Esse número precisa ser do tipo NUMBER!");
    
        if (arrow.length != numero) throw new RangeError("Tamanho inválido!");

        return arrow;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Erro ReferenceError!");
            throw e;
        } else if (e instanceof TypeError) {
            console.log("Erro TypeError!");
            throw e;
        } else if (e instanceof RangeError) {
            console.log("Erro RangeError!");
            throw e;
        } else {
            console.log("Erro indefinido!" + e);
        }
    }
}

console.log(meuArray([1,2,3,4,5], 8));