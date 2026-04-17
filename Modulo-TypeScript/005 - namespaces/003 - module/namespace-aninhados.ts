

export namespace Pessoa {
export namespace Maria {
    const data = 1 + 1;

    export let nome = "Maria";
    export const calc = () => {
        return data;
    }
}

export namespace Joao {
    const data = 1 + 1;

    export let nome = "João";
    export const calc = () => {
        return data;
    }
}
}

console.log(Pessoa.Maria.nome);
console.log(Pessoa.Joao.nome);

// multiplos namespaces aninhados