const error = (): never => {
    throw new Error("Algo deu errado!");
};

const loop = (): never => {
    while (true) {
        console.log("Executando...");
    }
};

// loop(); // Cuidado ao executar, pois é um loop infinito!

const validate = (value: any) => {
    if (typeof value === "string") {
        return console.log("É uma string!");
    } else if (typeof value === "number") {
        return console.log("É um número!");
    } 
    console.log(error());
    }

    // O tipo never é um tipo especial em TypeScript que representa um valor que nunca ocorre. Ele é usado principalmente para indicar que uma função nunca retorna um valor, 
    // seja porque ela lança uma exceção ou porque entra em um loop infinito. 
    // No exemplo acima, a função error lança um erro e, portanto, nunca retorna um valor. 
    // A função loop entra em um loop infinito e também nunca retorna um valor. 
    // O uso do tipo never ajuda a deixar claro que essas funções não devem ser usadas para obter um valor de retorno e que seu propósito é apenas para efeitos colaterais ou para indicar uma condição de erro.