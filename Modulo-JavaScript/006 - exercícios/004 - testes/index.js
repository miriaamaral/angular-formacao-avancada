/*const Colors = () => 2* 2;

console.log(Colors())


const cores = {
  colors: [
   "blue","green","violet"
 ],
  
  color: function(select){
  console.log(this.colors[select]);  

 },
};
cores.color(1)
function Colors(cor1, cor2, cor3) {
    return {
      cor1: cor1,
      cor2: cor2,
      cor3: cor3
    };
  }

  const colors = Colors("red", "green", "blue");
  console.log(colors); // Output: { cor1: 'red', cor2: 'green', cor3: 'blue' }
  
  function pessoas(cor1, cor2, cor3){
     return {
        cor1: "red",
        cor2: "blue",
        cor3: "Black"
    
    }

}  
  console.log(pessoas().cor1);
  console.log(pessoas().cor2);
  console.log(pessoas().cor3);
   
    
 const createHelloWOrd = function(){
    return function(){
    return "Hello Word"
    }



}   
const f = createHelloWOrd();
console.log(f())
  
var createCounter = function(n) {
    return function counter() {
      return n++
    }
} 
     const count = createCounter(10)
     console.log(count())
     console.log(count())
     console.log(count())

     
       
    
     function expect(val) {
        return {
          toBe(expected) {
            if (val === expected) {
              return true;
            } else {
              throw new Error("Not Equal");
            }
          },
          notToBe(unexpected) {
            if (val !== unexpected) {
              return true;
            } else {
              throw new Error("Equal");
            }
          },
        };
      }
     console.log(expect(5).toBe(5))
      console.log(expect(5).notToBe(5))

      function createCounter(init) {
        let currentValue = init;
      
        return {
          increment: function() {
            currentValue += 1;
            return currentValue;
          },
          decrement: function() {
            currentValue -= 1;
            return currentValue;
          },
          reset: function() {
            currentValue = init;
            return currentValue;
          }
        };
      }
    const count = createCounter(4)
    
    console.log(count.increment())
    console.log(count.reset()) 
    console.log(count.decrement()) */


  /*let Tenis = {
  tipo:"Tenis de corrida",  
  cardaco: "G",
  estoque: false,
  tamanho:{
   palmilha: 39,
   tenis: 40,
   caixa:{
     altura: 35,
     largura: 40,
     profundidade: 10,
  
  
  },
 },
 marcaArrayValores: ["Nike", "Adidas","etc"],

 marcaArrayObj: [{
   nome: "Nike",
   },
   {
    nome: "Adidas",
    },
    {
      nome: "etc",
      },
 ],
 getMarca: function(param){
   return this.marcaArrayObj[param].nome;

 },
};
 console.log(Tenis);
 console.log(Tenis.tipo);
 console.log(Tenis.tamanho);
*/



   
/*var map = function(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};
const arr = [1, 2, 3];
const fn = (element, index) => element * index;

const result = map(arr, fn);
console.log(result); // Output: [0, 2, 6]
*/

/*function Tenis(tamanho, estoque, preco){
  return{
   tamanho,
   estoque,
   preco,
  
  
  
  
  };

}
console.log(Tenis(35, true, "R$50"))

  */
 /*const Tenis3 = {
 tamanho: 45,
 marca: "Nike"
 };

    console.log(Tenis3.marca)
   */
  
  /*const arr = [32, "Nike", true,"Bruno","Silva"];
  const evenArr = arr.filter((elemente) =>{
     return typeof elemente === "number";

  });

  console.log(evenArr);
  */
 
/*const meuArray = [1,2,3,5,6]
  meuArray.forEach((elemento) =>{
   console.log(elemento);
  
  
  
  });
*/

let Tenis = { //Exemplo de desetructuring
  tamanho: 35,
  estoque: true ,
};

function cloneObjetct(object){
  JSON.parse(JSON.stringify(object));
}
let link = {link: {a: "a", b:{c:"c"}}};


let clone1 = cloneObjetct(Tenis)
 console.log(1, clone1);
 console.log(2, Tenis);

let mesclar1 = Object.assign(cloneObjetct(Tenis), cloneObjetct(link));

let mesclar2 = {
  ...cloneObjetct(Tenis),
  ...cloneObjetct(link),

};
       clone1.estoque = false
       mesclar1.link.a = "ABC"
       console.log(3, clone1);
       console.log(4, Tenis);
       console.log(5, mesclar1);
       console.log(6, mesclar2);

  
  
  
  
  
 
    
     