class Cliente {

    private _nome_cliente: string;
    private _cpf: number;
    private _conta: Conta;

    constructor(nome_cliente: string, cpf: number, conta:  Conta) {
        this._nome_cliente = nome_cliente;
        this._cpf = cpf
        this._conta = conta;
    }

    get nome_cliente() {
        return this._nome_cliente;
    }

    set nome_cliente(nome_cliente) {
        this._nome_cliente = nome_cliente;
    }

    get cpf(){
        return this._cpf;
    }

    set conta (conta) {
        this._conta = conta;
    }

    get conta(){
        return this._conta;
    }
    
    toString(): string {
        return `Nome: ${this._nome_cliente} 
        - Cpf: ${this._cpf}
        - Conta: ${this._conta}`;
    }
}