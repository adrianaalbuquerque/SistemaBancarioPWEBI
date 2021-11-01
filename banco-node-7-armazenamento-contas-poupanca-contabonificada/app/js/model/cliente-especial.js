class ClienteEspecial extends Cliente {
    constructor(nome_cliente, cpf, conta) {
        super(nome_cliente, cpf, conta);
        this._dependentes = new Array();
    }
    inserir(dependente) {
        this._dependentes.push(dependente);
    }
    remover(clienteCpf) {
        this._dependentes.splice(this._dependentes.findIndex(cliente => cliente.cpf === clienteCpf), 1);
    }
    toString() {
        return `Nome: ${this.nome_cliente} - Cpf: ${this.cpf} - Conta: ${this.conta}`;
    }
}
