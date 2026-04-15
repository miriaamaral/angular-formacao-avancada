
enum Mes {
    JAN = "janeiro",
    FEV = "fevereiro",
    MAR = "março",
    ABR = "abril",
    MAI = "maio",
    JUN = "junho",
    JUL = "julho",
    AGO = "agosto",
    SET = "setembro",
    OUT = "outubro",
    NOV = "novembro",
    DEZ = "dezembro"
}

console.log(Mes.JAN); // Output: "janeiro"

const pessoa: { nome: string; mesAniversario: Mes } = {
    nome: "Miriã",
    mesAniversario: Mes.JAN
};

if (pessoa.mesAniversario === Mes.JAN) {
    console.log(pessoa.nome + " nasceu em janeiro.");
}

// enum não é um tipo de dado, mas sim uma estrutura de dados que permite definir um conjunto de constantes nomeadas. 
// Ele é usado para representar um conjunto de valores relacionados, como dias da semana, meses do ano, ou estados de um processo.
