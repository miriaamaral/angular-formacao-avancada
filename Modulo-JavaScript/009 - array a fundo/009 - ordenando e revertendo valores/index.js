//const stringArray = ["A","C","D","W","L","B"]

//console.log(stringArray.sort()); // .sort arruma os valores em ordem alfabética
//console.log(stringArray.reverse()) // .reverse trás os dados de tras para frente

//const numbArray = [10,20,30,40,50,100,1,55,15]

//console.log(numbArray.sort((a,b) => a - b));

const objectArray = [
    {nome: "Bruno Soares"},
    {nome: "Larah Sofia"},
    {nome: "Bernado Soares"},
    {nome: "Felipe Soares"},
    {nome: "Maria soares"},
    {nome: "Juliana Leal"},
    

]

   console.log(objectArray.sort((a,b)=> a.nome.localeCompare(b.nome)));