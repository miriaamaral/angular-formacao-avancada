const fn = (nome: string, idade?: number) => {
    if (!idade){
    return `nome: ${nome}, idade: sem valor definido`;
}
return `nome: ${nome}, idade: ${idade}`;
}

console.log(fn("Miriã", 26)); // Saída: nome: Miriã, idade: 26
console.log(fn("Miriã")); // Saída: nome: Miriã, idade: undefined (opcional)

const pessoa: { nome: string; idade?: number } = {
    nome: "Miriã",
    // idade é opcional
};

// Em TypeScript, o operador de interrogação (?) é usado para indicar que um parâmetro ou propriedade é opcional. 
// Isso significa que o valor pode ser fornecido ou não, e o TypeScript não gerará um erro se o valor estiver ausente. 
// No exemplo acima, a função fn tem um parâmetro idade que é opcional, e a propriedade idade do objeto pessoa também é opcional. 
// Isso permite que você chame a função ou crie o objeto sem fornecer um valor para idade, tornando o código mais flexível e fácil de usar em situações onde a idade pode não ser conhecida ou relevante.