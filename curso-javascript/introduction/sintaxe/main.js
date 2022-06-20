function numbers(a, b) {
    const primeiraFrase = frase1(a, b);
    const segundaFrase = frase2(a, b);

    return `${primeiraFrase} ${segundaFrase}`;
}

function frase1(a, b) {
    let iguais = '';

    if (a !== b) {
        iguais = 'não';
    }

    return `Os números ${a} e ${b} ${iguais} são iguais.`
}

function frase2(a, b) {
    let soma = a + b;
    let soma10 = soma > 10; 
    let soma20 = soma > 20;

    if (soma10) {
        soma10 = 'maior';
    } else {
        soma10 = 'menor';
    }
    if (soma20) {
        soma20 = 'maior';
    } else {
        soma20 = 'menor';
    }

    return(`Sua soma é ${soma}, que é ${soma10} que 10 e ${soma20} que 20.`);
}

console.log(numbers(7, 3));

