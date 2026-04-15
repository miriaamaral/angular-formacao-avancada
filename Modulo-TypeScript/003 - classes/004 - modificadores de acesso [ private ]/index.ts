
class Pessoa {
    public nome: string;
    public idade: number;

    private profissao: string = "programadora Front-end Angular";
    // _profissao: string = "programadora Front-end Angular";


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

// precisamos salientar sobre o [private]
// private: Acessível apenas dentro da classe (própria classe)
// se encontrarmos o modificador private ou o nome com o _ antes, isso indica que a propriedade ou método é privado e só pode ser acessado dentro da própria classe. 
// Ele não pode ser acessado por objetos criados a partir da classe ou por classes derivadas (filhas). 
// O uso do private é uma prática comum para encapsular dados e proteger a integridade dos objetos, garantindo que certas informações ou comportamentos sejam controlados apenas pela própria classe.