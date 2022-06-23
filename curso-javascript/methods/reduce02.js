/*
const lista = [
    {
        nome: 'sabao em po',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];
const saldoDisponível = 100;

function calculaSaldo(lista, saldoDisponível) {
    return lista.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });      
        return prev - current.preco;
    }, saldoDisponível)
}

console.log(calculaSaldo(lista, saldoDisponível));
*/

const lista = [
    {
        nome: 'sabao em po',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisp = 100;

function calculaSaldo (lista, saldoDisp) {
    return lista.reduce(function (previous, current, index) {
        console.log("Rodada", index + 1)
        console.log({ previous })
        console.log({ current })
        return previous - current.preco;
    }, saldoDisp)
}

console.log(calculaSaldo(lista, saldoDisp));