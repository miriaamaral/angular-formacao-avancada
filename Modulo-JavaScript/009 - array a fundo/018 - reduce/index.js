const pedidos = [
    {id: 420,
     nome: "Bruno",
     alimento: "Sandubão de Bacon",
     bebida: "Suco Limão",
     preco: 100,
    },
    {id: 152,
        nome: "Juliana",
        alimento: "Sandubão Vegano",
        bebida: "Suco Laranja",
        preco: 52
    },
    {id: 29, nome:"Marcio", alimento: "Coxinha",bebida:"Suco de uva", preco:55},
    {id: 33, 
        nome: "Bernardo",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 59
       },
    {id: 55, nome: "José", alimento:"Pizza", bebida: "Refrigerante", preco:28
     },
    ];
const balancete = pedidos.reduce((total, element) => {
   return total + element.preco 
},0);

console.log(balancete);