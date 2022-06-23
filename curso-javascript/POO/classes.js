class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error("Valor inválido ou insuficiente!")
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero)
        this.tipo = "poupanca";
    }
}

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero)
        this.tipo = "universitaria";
    }

    saque(valor) {
        if (valor > 500) {
            throw new Error("Valor maior que R$ 500!")
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

