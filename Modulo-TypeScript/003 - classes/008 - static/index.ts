/* 
A palavra chave static define um método estático para a classe.
Métodos estáticos não são chamados em instâncias da classe. 
Em vez disso, eles são chamados na própria classe.
Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

// exemplo de um clone de obejto profundo
class Utils {
    static cloneObject(object: Array<{}>){
        // JSON.stringify funciona diretamente com arrays, sem necessidade de Object.assign
        return JSON.parse(JSON.stringify(object));
    }
}

const tenis: { tamanho: number, estoque: boolean } = {
    tamanho: 41,
    estoque: true
};

const bota: { tamanho: number, estoque: boolean } = {
    tamanho: 41,
    estoque: true
};

console.log(Utils.cloneObject([tenis, bota])); // não é necessário criar uma instância da classe para chamar o método cloneObject    