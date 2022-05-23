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