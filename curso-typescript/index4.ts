interface Cachorro{
    nome: string,
    idade: number, 
    parqueFavorito?: string;
}

type CachorroReadOnly = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

// Classes
class meuCachorro implements Cachorro {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const dadosCachorro = new meuCachorro('Cookie', 6);


