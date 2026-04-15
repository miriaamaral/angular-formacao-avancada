
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

// o método é como se fosse uma função dentro da classe, que pode ser chamada em objetos criados a partir da classe. Ele é definido dentro do corpo da classe e pode acessar as propriedades da classe usando a palavra-chave "this".

comer(comida: string) {
    return `A ${this.nome} comeu ${comida}.`;
}

fezeAniversario() {
    // this.idade += 1; // ou this.idade = this.idade + 1 (++this.idade) para incrementar a idade em 1
    return `Parabéns, ${this.nome}! Agora você tem ${++this.idade} anos.`;
}
}

const pessoa1 = new Pessoa("Miriã Amaral Custódio", 26);
const pessoa2 = new Pessoa("Carlos Silva", 30);

console.log(pessoa1.comer("maçã"));
console.log(pessoa2.comer("dogão"));

console.log(pessoa1.fezeAniversario());
console.log(pessoa2.fezeAniversario());