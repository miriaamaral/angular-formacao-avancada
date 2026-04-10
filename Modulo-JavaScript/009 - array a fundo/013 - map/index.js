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
/*
O método map além de iterar o Array ele ´r muito bom para editar o iterado (resumindo os dados do Array)
*/

/*pedidos.map((elemente, index)=>{
    if(elemente.id === 29){
      return (elemente.alimento = "Kibe");
    };
 
});
console.log(pedidos)*/

const filterRefri = pedidos.filter((Element, index) =>{
  return Element.bebida === "Refrigerante";

  console.log

});
console.log(1,filterRefri)
console.log(2,pedidos)