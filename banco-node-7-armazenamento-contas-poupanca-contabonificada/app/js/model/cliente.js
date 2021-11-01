class Cliente {
    constructor(nome_cliente, cpf, conta) {
        this._nome_cliente = nome_cliente;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome_cliente() {
        return this._nome_cliente;
    }
    set nome_cliente(nome_cliente) {
        this._nome_cliente = nome_cliente;
    }
    get cpf() {
        return this._cpf;
    }
    set conta(conta) {
        this._conta = conta;
    }
    get conta() {
        return this._conta;
    }
    toString() {
        return `Nome: ${this._nome_cliente} 
        - Cpf: ${this._cpf}
        - Conta: ${this._conta}`;
    }
}
