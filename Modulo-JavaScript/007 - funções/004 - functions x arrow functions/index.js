/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/
/*function nomeFunc(){
  return "Bruno Soares";
 }

 console.log(nomeFunc()); //FORMA FUNCTIONS

 const  nomeFuncArrow = () => {
   return "Bruno Soares";

}
console.log(nomeFuncArrow());

const nomeArrowReturn = () => "Bruno Soares";
console.log(nomeArrowReturn());

const nomeFuncArrowHoisting = () => {
     return "Bruno Soares"
}
console.log(nomeFuncArrowHoisting());

//Não funciona
//const nomeFuncArrowArguments = () =>{
  //  return arguments;
//}
//console.log(nomeFuncArrowArguments())

function nomeFuncArguments(){
return arguments;
}
console.log(nomeFuncArguments("Bruno"))





  /*
6 - Contexto
  Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.
  
  Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
  enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
  no momento da chamada 

  Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
  como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
  cardapio: [
 { nome: "x-salada", preco: "R$25"},
 { nome: "x-tudo", preco: "R$25"},
],
meuPedidoFunc: function(select){
   return console.log(this.cardapio[select]);
},
meuPedidoFuncTimeOut: function(select){
setTimeout(function(){
    console.log(this.cardapio[select]);

    
 }.bind(this) //.bind() Chama o this pai
 ,1000);


},
meuPedidoArrowFunc: (select) => {
    this.cardapio = [
        { nome: "x-salada", preco: "R$25"},
        { nome: "x-tudo", preco: "R$25"},];
   
    return console.log(this.cardapio[select])
},
};
lanches.meuPedidoFunc(0)  
lanches.meuPedidoArrowFunc(0) 
lanches.meuPedidoFuncTimeOut(0)












/*
  7 - Constructor
  Arrow functions não podem ser constructors, então não é possível usar o operador 
  new com a mesma.
*/

class newFunc{
   constructor(nome){
   this.nome = nome;
   }
}

const a = new newFunc("Bruno");
console.log(a.nome);