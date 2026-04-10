let array1: [string, string, number, boolean] = [
    "Miriã Amaral", 
    "Teste", 
    123, 
    false
];

let array2: Array<string | number | boolean> = [
    true,
    "Miriã",
    123,
    "Amaral",
];

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = {
    nome: "Miriã",
    sobrenome: "Amaral",
    idade: 21,
    deuBom: true,
};

let obj2: Array<{
    nome: string, 
    sobrenome: string, 
    idade: number, 
    deuBom: boolean
}> = [
    {
        nome: "Miriã",
        sobrenome: "Amaral",
        idade: 21,
        deuBom: true,
    },
    {
        nome: "Miriã2",
        sobrenome: "Amaral2",
        idade: 21,
        deuBom: false,
    },
];

// Arrays e objetos são tipos de dados compostos em TypeScript. 
// Eles permitem armazenar múltiplos valores em uma única variável, 
// organizando os dados de forma estruturada. 
// Arrays são usados para armazenar listas de valores, enquanto objetos são usados para representar entidades com propriedades e valores associados. 
// Ambos os tipos são fundamentais para a construção de programas em TypeScript, 
// permitindo que os desenvolvedores criem estruturas de dados complexas e organizadas.