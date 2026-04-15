

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
    private _profissao: string = "Desenvolvedora";

    constructor() {
        super("Miriã", 26);
    }

    get profissao(): string {
        if (this._profissao === "Desenvolvedora Front-end Angular e UX Engineer") {
            return `${this.nome} não é mais só programadora, agora também é uma ${this._profissao}.`;
        }
        return this._profissao;
    }

    set profissao(novaProfissao: string) {
        this._profissao = novaProfissao;
    }
}

const miria = new Miria();
console.log(miria.profissao); // Acessando a propriedade através do getter
miria.profissao = "Desenvolvedora Front-end Angular e UX Engineer"; // Modificando a propriedade através do setter
console.log(miria.profissao); // Acessando a propriedade atualizada através do getter



// getters: são métodos que permitem acessar o valor de uma propriedade de forma controlada, 
// sem expor diretamente a propriedade. 
// Eles são definidos usando a palavra-chave "get" seguida do nome da propriedade.

// setters: são métodos que permitem modificar o valor de uma propriedade de forma controlada, 
// sem expor diretamente a propriedade. 
// Eles são definidos usando a palavra-chave "set" seguida do nome da propriedade.

// para cada instancia de variavel, um método getter retorna o seu valor, 
//  enquanto um método setter o define ou atualiza.

// podemos criar regras de validação ou lógica adicional dentro dos métodos getter e setter,
// garantindo que os dados sejam manipulados de maneira segura e consistente.

