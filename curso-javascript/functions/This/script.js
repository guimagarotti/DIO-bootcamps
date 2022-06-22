const person1 = {
    nome: "Cleber",
    idade: 34,
}

const person2 = {
    nome: "Jonas",
    idade: 26,
}

const person3 = {
    nome: "Simone",
    idade: 45,
}

function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

console.log(calculaIdade.call(person1, 30))
console.log(calculaIdade.apply(person1, [23]))