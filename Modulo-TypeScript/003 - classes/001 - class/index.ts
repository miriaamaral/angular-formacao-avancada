// uma classe typescript é uma estrutura que permite criar objetos com propriedades e métodos, facilitando a organização e reutilização de código

// para criar uma classe, usamos a palavra-chave "class" seguida do nome da classe
class Pessoa {
    // as propriedades da classe são definidas dentro do corpo da classe
    nome: string;
    idade: number;
    // o construtor é o que inicializa nossa classe, sendo um método especial que é chamado quando um objeto da classe é criado
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}
// para criar um objeto da classe, usamos a palavra-chave "new" seguida do nome da classe e passamos os argumentos necessários para o construtor
const pessoa1 = new Pessoa("Miriã Amaral", 26);
const pessoa2 = new Pessoa("João Silva", 30);
console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);