class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private clientes: Clientes;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;


    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#cliente_nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.clientes = new Clientes();
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        if (this.clientes.pesquisar(parseInt(this.inputCpf.value)) == undefined) {
            let novoCliente = new Cliente(this.inputNome.value,
                parseInt(this.inputCpf.value), 
                new Conta (this.inputNumero.value, parseFloat(this.inputSaldo.value)));

            this.clientes.inserir(novoCliente);
            this.inserirClienteNoHTML(novoCliente);   
        } else {
            alert("Esse Cliente já existe.");
        }
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }
    pesquisar(Evento: Event) {
        Evento.preventDefault()
        if (this.clientes.pesquisar(parseInt(this.inputCpf.value))==undefined) {
            alert("f")
        } else {
           let resultado = this.clientes.pesquisar(parseInt(this.inputCpf.value));
           alert(`Cliente encontrado: ${resultado.nome_cliente}`)
           console.log(`${resultado}`)
        }
    }


    inserirClienteNoHTML(cliente: Cliente) {
        const elementoCli = document.createElement('P');
        elementoCli.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoCli.appendChild(botaoApagar);
        document.body.appendChild(elementoCli);
    }
}
