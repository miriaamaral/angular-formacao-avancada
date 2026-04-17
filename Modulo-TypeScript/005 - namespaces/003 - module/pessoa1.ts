export namespace Pessoa1 {
    const data = 1 + 1;

    export let nome = "João";
    export const calc = () => {
        return data;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());