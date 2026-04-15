abstract class Pessoa {
    public nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `A ${this.nome} comeu ${comida}.`;
    }
    public fezeAniversario() {
        return `Parabéns, ${this.nome}! Agora você tem ${++this.idade} anos.`;
    }

    // o legal é que podemos difinir que todas as classes filhas de Pessoa devem ter esses métodos
    // mas cada classe filha pode dar o valor que quiser a sua profissão, como apresenta e seu salário.
    protected abstract profissao(): string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number): number;
}

class Miria extends Pessoa {
    protected profissao(): string {
        return "Desenvolvedora";
    }

    constructor() {
        super("Miriã", 26);
    }

    public qualSuaProfissao(): string {
        return `A profissão de ${this.nome} é ${this.profissao()}.`;
    }

    public qualSeuSalario(salario: number): number {
        return salario;
    }
}


class Guilherme extends Pessoa {
    protected profissao(): string {
        return "Desenvolvedor";
    }

    constructor () {
        super("Guilherme", 28);
    }

    public qualSuaProfissao(): string {
        return `A profissão de ${this.nome} é ${this.profissao()}.`;
    }

    public qualSeuSalario(salario: number): number {
        return salario;
    }
}

// classes abstratas não podem ser privadas, pois precisam ser estendidas por outras classes. 

// as classes Miria e Guilherme são classes concretas que estendem a classe abstrata Pessoa.

// a classe abstrata Pessoa define os métodos abstratos que as classes concretas devem implementar, garantindo que todas as classes filhas tenham esses métodos, mas permitindo que cada classe filha defina sua própria implementação.