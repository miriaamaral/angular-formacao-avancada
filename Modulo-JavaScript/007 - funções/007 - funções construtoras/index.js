/*function Name(name){
    this.name = name;
}
const bruno = new Name("Bruno Soares");

console.log(bruno.name);*/
function Carro (Marca, Modelo , Ano,Preco, Avista, Financiado) {
    this.marca = Marca; 
    this.modelo = Modelo; 
    this.ano = Ano; 
    this.preço = Preco; 
    this.avista = Avista; 
    this.financiado = Financiado; 

}




  const Honda = new Carro("Honda", "Civic",2023, Number(25000).toFixed(2), Number(20000).toFixed(2), Number(3500).toFixed(2) )
 
  const Reno = new Carro("Renaut", "Sandero", 2020)

  console.log(Honda)

function Calculadora(){
   this.soma = (num1, num2)=>{
   return num1 + num2
   };
   this.subtracao = (num1, num2) => {
    return num1 - num2
}
};
const calculadora = new Calculadora
console.log(calculadora.soma(2,5))
console.log(calculadora.subtracao(20,7))