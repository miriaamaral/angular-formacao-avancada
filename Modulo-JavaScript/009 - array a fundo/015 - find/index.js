const pedidos = [
    {id: 420,
     nome: "Bruno",
     alimento: "Sandubão de Bacon",
     bebida: "Suco Limão",
    },
    {id: 152,
        nome: "Juliana",
        alimento: "Sandubão Vegano",
        bebida: "Suco Laranja",
    },
    {id: 29, nome:"Marcio", alimento: "Coxinha",bebida:"Suco de uva"},
    {id: 33,
        nome: "Bernardo",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
       },
    {id: 55, nome: "José", alimento:"Pizza", bebida: "Refrigerante"},
    ]
    const findRefri = pedidos.find((Element, index) =>{
        return Element.id === 29;
      
      
      
      });
      console.log(1,findRefri); 
      


      //Find acha o item que pedimos e retorna o primeiro da lista 