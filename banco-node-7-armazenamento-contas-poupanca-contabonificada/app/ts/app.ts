//let contaController = new ContaController();
let clienteController = new ClienteController();

//contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('4', 200)

const p1 = new Poupanca('2', 100);

const cb1 = new ContaBonificada('3', 0);

const listaCli1 = new Clientes

const cli1 = new Cliente("Jurubeba", 1111, c1)
const cli2 = new Cliente("Juriscleyton", 2222, c2)
const cli3 = new Cliente("Jeba", 3333, c1)
const cli4 = new Cliente("Janta", 4444, c1)
const cli5 = new Cliente("Jamanta", 5555, c2)
const cli6 = new Cliente("Junior", 6666, c2)

listaCli1.inserir(cli1)
listaCli1.inserir(cli2)
listaCli1.inserir(cli3)
listaCli1.inserir(cli4)
listaCli1.inserir(cli5)
listaCli1.inserir(cli6)

console.log(listaCli1.listar())

listaCli1.remover(3333)
listaCli1.remover(5555)
listaCli1.remover(1111)

listaCli1.pesquisar(2222)
listaCli1.pesquisar(8888)
listaCli1.pesquisar(9999)


console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

