const alunos = [
    {
        nome: "Jonas",
        sobrenome: "Pereira",
        nota: 4,
    },
    {
        nome: "Rodrigo",
        sobrenome: "Lopes",
        nota: 9,
    },
    {
        nome: "Marcos",
        sobrenome: "Guilherme",
        nota: 8,
    },
];

function aprovaAluno (arr, media) {
    let aprovados = [];
    
    for (i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];        
        
        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(aprovaAluno(alunos, 5));
