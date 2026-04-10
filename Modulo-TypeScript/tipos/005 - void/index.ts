let pedido = (msg: string): void => {
    console.log(msg)
}

pedido("Deu bom!");

// O tipo void é um tipo especial em TypeScript que indica que uma função não retorna nenhum valor. 
// Ele é usado principalmente para funções que realizam uma ação, mas não precisam retornar um resultado. 
// No exemplo acima, a função pedido recebe uma string como argumento e imprime essa string no console, 
// mas não retorna nenhum valor. O uso do tipo void ajuda a deixar claro que a função é apenas para efeitos colaterais e não deve ser usada para obter um valor de retorno.