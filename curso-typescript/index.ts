interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executaRugido(alturaDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executaRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`)
}

animal.executaRugido(30);

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executaRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`)
}