class Pessoa {
    public readonly nome: string = 'Miriã';
}

let pessoa = new Pessoa();

console.log(pessoa.nome); // Retorna: Miriã
// pessoa.nome = 'Maria'; // Erro: Não é possível atribuir um novo valor a 'nome' porque é uma propriedade somente leitura.
