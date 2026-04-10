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
    const temRefri = pedidos.every((Element, index) =>{
        return Element.bebida === "Refrigerante";
      
      
      
      });
      console.log(temRefri); 

      // Every pesquisa se só existe so aquele item e retorna true ou false