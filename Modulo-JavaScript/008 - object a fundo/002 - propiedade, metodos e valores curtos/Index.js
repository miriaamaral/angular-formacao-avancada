function Tenis(tamanho, estoque, preco){
   return {
     tamanho,   
     estoque,
     preco,


   }; 
}

console.log(Tenis(35, true, "R$350"));


const tamanho = 35;
const estoque = true;
const preco = "R$350";

const tenis2= {
   tamanho,
   estoque,
   preco,
};

console.log(tenis2);


const tenis3 = {
    
  getTamanho(){
   return 35;
 },
};
console.log(tenis3.getTamanho());
 



