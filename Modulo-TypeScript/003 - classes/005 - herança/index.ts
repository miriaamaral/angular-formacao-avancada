

class Pessoa {
    public nome: string;
    protected idade: number;

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

class Miria extends Pessoa {
    private profissao: string = "Desenvolvedora front-end Angular";
    constructor(nome: string, idade: number, profissao: string) {
        super(nome, idade);
        this.profissao = profissao;
    }

    private getProfissao() {
        return `A profissão de ${this.nome} é ${this.profissao}.`;
    }
}

const miria = new Miria("Míria", 28, "Desenvolvedora front-end Angular");
// Erro: O método 'getProfissao' é privado e só pode ser acessado dentro da classe 'Miria'.
// console.log(miria.getProfissao());


// extendemos a classe Pessoa e usamos o super para acessar o construtor da classe pai, 
// e herdamos os métodos e propriedades da classe Pessoa.

// A classe Miria tem acesso ao método fezeAniversario, pois é um método protegido, 
// mas a classe Maria não tem acesso a esse método, pois é um método privado.