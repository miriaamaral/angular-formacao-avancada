// interfaces no TypeScript definem os contratos em meu código.
// Eles também fornecem nomes explicitos para verificação de tipo.

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: 'Miriã',
    idade: 25,
    cpf: 12312312312,
    enabled: () => {
        return true;
    },
};

class Joao implements IPessoa {
nome: string = 'João';
idade: number = 22;

readonly cpf: number = 32132132132;

enabled(): boolean {
    return true;
}
};

class Lucas implements IPessoa {
nome: string = 'Lucas';
idade: number = 22;

readonly cpf: number = 45645645645;

enabled(): boolean {
    return false;
}
}  

