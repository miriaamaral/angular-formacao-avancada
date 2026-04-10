const myArrayobj = [
    {nome:"Bruno", sobrenome: "Soares"},
    {nome:"Bruno", sobrenome: "Soares"},
    {nome:"Bruno", sobrenome: "Soares"},
    {nome:"José", sobrenome: "Soares"},
]
//for (let item of myArrayobj) {
//c//onsole.log(item);
   //}

   for(let item of myArrayobj){
     if(item.nome === "José"){
       console.log("Lembrar SMS"); //Continue passa a mensagem e continua o código.
       continue;
       
    };
    if(item.nome === "Bruno"){
        console.log("Amanhã futebol");
        break; // break ler a mensagem e para o código.
        
     };
    console.log(item)
};
