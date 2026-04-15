
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `A ${this.nome} comeu ${comida}.`;
    }
    protected fezeAniversario() {
        return `Parabéns, ${this.nome}! Agora você tem ${++this.idade} anos.`;
    }
}

// Modificadores de acesso
// public: Acessível de qualquer lugar (qualquer classe ou código fora da classe)
// protected: Acessível dentro da classe e por classes derivadas (própria classe e classes filhas)
// private: Acessível apenas dentro da classe (própria classe)

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.comer("maçã")); // Retorna: A João comeu maçã.
// console.log(pessoa1.fezeAniversario()); // Erro: fezeAniversario é protegido e não pode ser acessado fora da classe Pessoa.

// ( (public (protected)) (private) ) - > (qualquer lugar (própria classe e classes filhas) (própria classe))