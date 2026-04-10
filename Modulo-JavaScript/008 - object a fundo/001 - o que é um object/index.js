/*
  Objeto: Tenis (Propriedade) "cadarço", "palmilha"
  Objeto: Celular (Propriedade)
  Objeto: Drone (Propriedade)

  Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
  tipo: "Tenis de Corrida",
  cardaco: "G",
  estoque: false,
  tamanho: {
    palmilha:39,
    tenis:40,
    caixa:{
      altura:35,
      largura:40,
      profundidade:10,
    
    },

   },
   marcaArrayValores: ["Nike", "Adidas", "etc"],
   marcaArrayObj:[
    { nome: "Nike",
    
    },
    { nome: "Adidas"
    
    },
    { nome: "etc"
    
    },
  ],
   getMarcaArrayObj: function (param) {
    return this.marcaArrayObj[param].nome;
 
   },
   getMarcaArrayValores: function (param) {
    return this.marcaArrayValores[param]
 
   },
      
      
};
 console.log(Tenis.getMarcaArrayValores(0));