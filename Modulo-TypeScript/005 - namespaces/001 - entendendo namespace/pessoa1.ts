// Namespaces são uma forma especifica do TypeScript para organizar código.
// Namespace são simplesmete objetos do JavaScript nomeados no namespace global. 
// Isso o torna uma construção muito simples de usar.

export namespace Pessoa1 {
    const data = 1 + 1;

    export let nome = "João";
    export const calc = () => {
        return data;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());